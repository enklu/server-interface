import AsyncStatus from '../constants/AsyncStatus';
import AsyncMethods from '../constants/AsyncMethods';
import ioLoader from '../loaders/ioLoader';

/**
 * Shows fatal errors.
 */
export const FATALERROR = 'app.fatalerror';

const fatalerror = (error) => {
  return {
    type: FATALERROR,
    error
  };
}

const createAddHandler = (handlers) => {
  return function (name, handler) {
    handlers[name] = function (state, action) {
      const requests = { ...state.requests };

      requests[name] = {
        status: action.status
      };

      switch (action.status) {
        case AsyncStatus.IN_PROGRESS: {
          return handler(
            {
              ...state,
              requests
            },
            action
          );
        }
        case AsyncStatus.SUCCESS: {
          return handler(
            {
              ...state,
              requests
            },
            action
          );
        }
        case AsyncStatus.FAILURE: {
          requests[name].error = action.response.error;

          return handler(
            {
              ...state,
              requests
            },
            action
          );
        }
      }

      return handler(state, action);
    };
  };
}

/**
 * Creates an action factory for receiving a message type.
 */
function receive(type) {
  return function (response, request) {
    if (response.success) {
      return {
        type,
        status: AsyncStatus.SUCCESS,
        body: response.body,
        response,
        request,
        time: Date.now()
      };
    }

    return {
      type,
      status: AsyncStatus.FAILURE,
      error: response.error,
      response,
      request,
      time: Date.now()
    };
  };
}

/**
 * Creates an action factory for sending a message type.
 */
function send(type) {
  return function (request, replacements) {
    return {
      type,
      status: AsyncStatus.IN_PROGRESS,
      request: {
        body: request,
        replacements,
      }
    };
  };
}

function defaultReplacements() {
  // These must be lowercase.
  return typeof io !== 'undefined' && io.sails.user
    ? { userid: io.sails.user.id }
    : {};
}

// Some code-generated params do not match our naming conventions. Rather than depend on remembering this fact every
// time they are used, we simply change them here.
// NOTE: This will overwrite params if there is already a property by the corrected name.
const correctParams = (replacementMap = {}) => (params = {}) => Object.entries(params)
  .reduce((accum, [name, value]) => ({
    ...accum,
    [replacementMap[name] || name]: value
  }), {});

const prepareObjectKeys = (replacementsMap = {}) => (obj = {}) => Object.entries(obj || {})
  .reduce((accum, [name, value]) => ({
    ...accum,
    [(replacementsMap[name] || name).toLowerCase()]: value
  }), {});

/**
 * Replaces tokens in endpoint with replacements.
 */
function replace(endpoint, _replacements) {
  const replacements = {
    ...defaultReplacements(),
    ...prepareObjectKeys({ collaboratorId: 'secondarycollaboratorid' })(_replacements)
  };

  let [url, queryString = ''] = endpoint.toLowerCase().split('?');

  Object.keys(replacements)
    .forEach((key) => {
      url = url.replace(`:${key}`, replacements[key]);
    });

  if (url.includes(':')) {
    throw new Error(
      `Replacements did not contain all endpoint requirements: ${url} ${Object.keys(replacements)}.`
    );
  }

  if (url.indexOf('{{') !== -1) {
    throw new Error(`Endpoint did not contain all replacements: ${endpoint}`);
  }

  if (queryString) {
    const queryParams = queryString.split('&');
    const queryObj = queryParams.reduce((accum, param) => {
      // const [key, value] = param.split('=');
      return { ...accum, [param.split('=')[0]]: true };
    }, {});

    queryString = Object.entries(replacements).reduce((accum, [key, value]) => {
      const exists = queryObj[key];
      return exists ? `${accum}${accum !== '?' ? '&' : ''}${key}=${value}` : accum;
    }, '?');
  }

  return `${url}${queryString}`;
}

const requestify = (type, baseUrl, endpointTemplate, method, loader = ioLoader) => (_body, _replacements = {}, _customOptions = {}) => {
  // TODO Can remove this if we go through the codebase and change every call.
  const customOptions = _customOptions
  const { body, replacements } = {
    GET: {
      body: null,
      replacements: _body
    },
    POST: {
      body: _body,
      replacements: _replacements
    },
    PUT: {
      body: _body,
      replacements: _replacements
    },
    DELETE: {
      body: null,
      replacements: _body
    }
  }[method];

  // redux-thunk will execute this thunk and inject dispatch() in the process.
  // The thunk will return a Promise, which won't matter for normal async actions.
  // For combo events, this promise will be used to monitor the state of the request.
  const thunk = dispatch => new Promise(async (resolve, reject) => {
    const sender = send(type);
    const receiver = receive(type);
    const endpoint = replace(endpointTemplate, replacements);
    const internalReplacements = correctParams(
      {
        assetid: 'assetId',
        kvid: 'kvId',
        userid: 'userId'
      }
    )(replacements);


    dispatch(sender(body, internalReplacements));

    const action = await loader(
      {
        endpoint: `${baseUrl}${endpoint}`,
        replacements: internalReplacements,
        body,
        customOptions
      },
      receiver,
      { method }
    );

    dispatch(action);
    return action.status === 'success' ? resolve(action) : reject(action);
  });

  return thunk;
};

const getify = (type, endpointTemplate) => requestify(type, endpointTemplate, AsyncMethods.GET);
const postify = (type, endpointTemplate) => requestify(type, endpointTemplate, AsyncMethods.POST);
const putify = (type, endpointTemplate) => requestify(type, endpointTemplate, AsyncMethods.PUT);
const deletify = (type, endpointTemplate) => requestify(type, endpointTemplate, AsyncMethods.DELETE);

const createBaseActions = (loader, baseUrl) => {
  return {
    getify: (type, endpointTemplate) => requestify(type, baseUrl, endpointTemplate, AsyncMethods.GET, loader),
    postify: (type, endpointTemplate) => requestify(type, baseUrl, endpointTemplate, AsyncMethods.POST, loader),
    putify: (type, endpointTemplate) => requestify(type, baseUrl, endpointTemplate, AsyncMethods.PUT, loader),
    deletify: (type, endpointTemplate) => requestify(type, baseUrl, endpointTemplate, AsyncMethods.DELETE, loader)
  }
};

export {
  createBaseActions, createAddHandler,
  getify, postify, putify, deletify, requestify,
  send, receive, replace
};

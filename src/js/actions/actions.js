import { log } from 'js-util';

/**
 * Constants for async request status.
 */
export const AsyncStatus = {
  IN_PROGRESS: "inprogress",
  SUCCESS: "success",
  FAILURE: "failure"
};

/**
 * Shows fatal errors.
 */
export const FATALERROR = "app.fatalerror";
export function fatalerror(error) {
  return {
    type: FATALERROR,
    error: error
  };
}

export function createAddHandler(handlers) {
  return function(name, handler) {
    handlers[name] = function(state, action) {
      const requests = {...state.requests};

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
            action);
        }
        case AsyncStatus.SUCCESS: {
          return handler(
            {
              ...state,
              requests
            },
            action);
        }
        case AsyncStatus.FAILURE: {
          requests[name].error = action.response.error;

          return handler(
            {
              ...state,
              requests
            },
            action);
        }
      }

      return handler(state, action);
    };
  }
};

/**
 * Creates an action factory for receiving a message type.
 */
function receive(type) {
  return function (response, request) {
    if (response.success) {
      return {
        type: type,
        status: AsyncStatus.SUCCESS,
        body: response.body,
        response: response,
        request:request,
        time: Date.now()
      };
    }

    return {
      type: type,
      status: AsyncStatus.FAILURE,
      error: response.error,
      response: response,
      request:request,
      time: Date.now()
    };
  };
}

/**
 * Creates an action factory for sending a message type.
 */
function send(type) {
  return function(request, replacements) {
    return {
      type: type,
      status: AsyncStatus.IN_PROGRESS,
      request: {
        body: request,
        replacements: replacements
      }
    };
  }
}

function defaultReplacements() {
  var replacements = {};

  return replacements;
}

/**
 * Replaces tokens in endpoint with replacements.
 */
function replace(endpoint, _replacements) {
  const replacements = {
    ...defaultReplacements(),
    ..._replacements
  };

  var prepared = endpoint;
  Object.keys(replacements).forEach((key) => {
    prepared = prepared.replace(":" + key, replacements[key]);
  });

  if (-1 !== prepared.indexOf("{{")) {
    throw "Endpoint did not contain all replacements : " + endpoint;
  }

  return prepared;
}

/**
 * Exported method to create a thunk from a message type and endpoint.
 */
function getify(type, endpoint) {
  var sender = send(type);
  var receiver = receive(type);

  return function(replacements = {}) {
    var modifiedEndpoint = window.env.stargazerUrl + replace(endpoint, replacements);

    return function(dispatch) {
      // dispatch first
      dispatch(sender(null, replacements));

      log.info("GET " + modifiedEndpoint);

      const request = {
        endpoint: modifiedEndpoint,
        replacements
      };

      // make request
      const req = new XMLHttpRequest();
      req.addEventListener('error', function(evt) {
        dispatch(receiver(
          {
            success: false
          },
          request));
      });
      req.addEventListener('load', function() {
        const res = {};

        if (this.status === 200) {
          res.success = true;
          res.body = JSON.parse(this.responseText).body;
        } else {
          res.success = false;
        }

        dispatch(receiver(res, request));
      });
      req.open('GET', modifiedEndpoint);
      req.send();
    };
  };
}

/**
 * Exported method to create a thunk from a message type and endpoint.
 */
function postify(type, endpoint) {
  var sender = send(type);
  var receiver = receive(type);

  return function(body, replacements = {}) {
    var modifiedEndpoint = replace(endpoint, replacements);

    return function(dispatch) {
      // dispatch first
      dispatch(sender(body, replacements));

      log.info("POST " + modifiedEndpoint, body);

      // make request
      io.socket.request(
        {
          method: "POST",
          url: modifiedEndpoint,
          data: body,
          headers: {
            "Authorization" : "Bearer " + io.sails.token
          }
        },
        (responseBody, JWR) => {
          dispatch(receiver(
            responseBody,
            {
              endpoint: modifiedEndpoint,
              body: body,
              replacements: replacements
            }));
        });
    };
  };
}

/**
 * Exported method to create a thunk from a message type and endpoint.
 */
function putify(type, endpoint) {
  var sender = send(type);
  var receiver = receive(type);

  return function(body, replacements = {}) {
    var modifiedEndpoint = window.env.stargazerUrl + replace(endpoint, replacements);

    return function(dispatch) {
      // dispatch first
      dispatch(sender(body, replacements));

      log.info("PUT " + modifiedEndpoint, body);

      const request = {
        endpoint: modifiedEndpoint,
        replacements
      };

      // make request
      const req = new XMLHttpRequest();
      req.addEventListener('error', function(evt) {
        dispatch(receiver(
          {
            success: false
          },
          request));
      });
      req.addEventListener('load', function() {
        const res = {};

        if (this.status === 200) {
          res.success = true;
          res.body = JSON.parse(this.responseText).body;
        } else {
          res.success = false;
        }

        dispatch(receiver(res, request));
      });
      req.open('PUT', modifiedEndpoint);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify(body));
    };
  };
}

/**
 * Exported method to create a thunk from a message type and endpoint.
 */
function deletify(type, endpoint) {
  var sender = send(type);
  var receiver = receive(type);

  return function(replacements = {}) {
    var modifiedEndpoint = replace(endpoint, replacements);

    return function(dispatch) {
      // dispatch first
      dispatch(sender(null, replacements));

      log.info("DELETE " + modifiedEndpoint);

      // make request
      io.socket.request(
        {
          method: "DELETE",
          url: modifiedEndpoint,
          headers: {
            "Authorization" : "Bearer " + io.sails.token
          }
        },
        (body, JWR) => dispatch(receiver(
          body,
          {
            endpoint: modifiedEndpoint,
            replacements: replacements
          })));
    };
  };
}

export { getify, postify, putify, deletify, send, receive, replace };

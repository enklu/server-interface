// constants
import AsyncStatus from './constants/AsyncStatus';
import AsyncMethods from './constants/AsyncMethods';

// Loaders
import fetchLoader from './loaders/fetchLoader';
import ioLoader from './loaders/ioLoader';

// Actions
import * as Actions from './actions/actions';
import * as StargazerActions from './actions/stargazerActions';
import * as TrellisActions from './actions/trellisActions';

const { createBaseActions } = Actions;

const baseActionsByName = {};
const getBaseActions = (name) => {
  if (!baseActionsByName[name]) {
    throw new Error(`No base actions by name '${name}'.`);
  }

  return baseActionsByName[name];
}

const actionsByName = {};
const initActions = (name, { loader, baseUrl, Actions }) => {
  if (actionsByName[name]) {
    console.log(`Actions by name '${name}' have already been created.`);
  } else {
    const baseActions = createBaseActions(loader, baseUrl);
    baseActionsByName[name] = baseActions;
    actionsByName[name] = Actions.createActions(baseActions);
  }
}

const getActions = (name) => {
  if (!actionsByName[name]) {
    throw new Error(`Call initActions('${name}') before calling getActions('${name}').`);
  }

  return actionsByName[name];
}

export {
  Actions,
  AsyncMethods,
  AsyncStatus,
  fetchLoader,
  ioLoader,
  StargazerActions,
  TrellisActions,
  initActions,
  getActions,
  getBaseActions
};

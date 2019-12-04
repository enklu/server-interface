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

const actionsByTarget = {};
const { createBaseActions } = Actions;

let actions;
const getActions = () => {
  if (!actions) {
    throw new Error('Call initActions() before calling getActions().');
  }

  return actions;
}

const initActions = ({ loader, baseUrl, Actions }) => {
  const baseActions = createBaseActions(loader, baseUrl);
  actions = Actions.createActions(baseActions);
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
  getActions
};

import * as Actions from './src/js/actions/actions';
import * as TrellisActions from './src/js/actions/trellisActions';
import * as StargazerActions from './src/js/actions/stargazerActions';

module.exports = {
  ...Actions,
  ...TrellisActions,
  ...StargazerActions
};

const ErrorMessages = require('../constants/ErrorMessages');
const config = require('../config/config');

module.exports = ({ targetName }) => {
  if (!config) {
    throw new Error(ErrorMessages.NO_CONFIG);
  }

  if (!config.targets[targetName]) {
    throw new Error(`${targetName}: ${ErrorMessages.SPECIFIED_TARGET_MISSING}`);
  }

  return {
    headers: config.headers,
    target: {
      ...config.targets[targetName],
      name: targetName
    }
  };
}

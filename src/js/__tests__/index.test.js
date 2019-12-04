jest.mock('js-util', () => {
  const { log } = require('js-mocks');
  return { log };
});

const index = require('../index');

describe('index', () => {
  it('should export the correct items', () => {
    expect(index).toContainAllKeys([
      'Actions',
      'AsyncMethods',
      'AsyncStatus',
      'fetchLoader',
      'ioLoader',
      'StargazerActions',
      'TrellisActions',
      'initActions',
      'getActions'
    ]);
  });

  it('should create and return actions', () => {
    index.initActions({ loader: index.fetchLoader, baseUrl: 'https://example.com', Actions: index.TrellisActions });
    expect(index.getActions()._targetName).toBe('trellis');

    index.initActions({ loader: index.fetchLoader, baseUrl: 'https://example.com', Actions: index.StargazerActions});
    expect(index.getActions()._targetName).toBe('stargazer');
  });
});

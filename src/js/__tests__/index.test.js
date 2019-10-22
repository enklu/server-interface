jest.mock('js-util', () => {
  const { log } = require('js-mocks');
  return { log };
});

const index = require('../index');

describe('index', () => {
  it('should export the correct items', () => {
    expect(index).toContainAllKeys(['Actions', 'AsyncStatus', 'AsyncMethods', 'TrellisActions', 'StargazerActions', 'SnapActions']);
  });
});

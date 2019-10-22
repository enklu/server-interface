jest.mock('js-util', () => {
  const { log } = require('js-mocks');
  return { log };
});

const index = require('../index');
const { AsyncStatus } = require('../index');

describe('index', () => {
  it('should export the correct items', () => {
    expect(index).toContainAllKeys(['Actions', 'AsyncStatus', 'TrellisActions', 'StargazerActions', 'SnapActions']);
    console.log(AsyncStatus);
  });
});

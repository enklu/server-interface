jest.mock('js-util', () => {
  const { log } = require('js-mocks');
  return { log };
});

const index = require('../index');
const { Actions } = require('../index');

describe('index', () => {
  it('should export the correct items', () => {
    expect(index).toContainAllKeys(['Actions', 'AsyncStatus', 'TrellisActions', 'StargazerActions']);
    console.log(index)
  });
});

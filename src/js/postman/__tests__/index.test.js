// Mock environment.
const mockProcess = require('jest-mock-process');

// Mock fetch.
const mockJson = jest.fn();
jest.mock('node-fetch', () => {
  return jest.fn().mockImplementation(() => {
    return { json: mockJson }
  })
});
const fetch = require('node-fetch');

// Import code under test.
const getConfig = require('../util/getConfig');
const getCollection = require('../util/getCollection');
const ErrorMessages = require('../constants/ErrorMessages');

// Remove console.log for cleaner tests.
console.log = jest.fn();

const configPath = './config';
const originalArgs = [...process.argv];

describe('getConfig', () => {
  beforeEach(() => {
    process.argv = originalArgs;
  });

  it('should return a config object', () => {
    const config = getConfig({ path: configPath, targetName: 'trellis' });

    expect(config).toContainAllKeys(['headers', 'target']);
    expect(config.target).toContainAllKeys(['uid', 'name']);
  })
});

describe('getCollection', () => {
  beforeEach(() => {
    process.argv = originalArgs;
  });

  it('should fetch a collection and JSONify it', async (done) => {
    const config = getConfig({ path: configPath, targetName: 'trellis' });
    const json = await getCollection(config);

    expect(fetch).toHaveBeenCalled();
    expect(mockJson).toHaveBeenCalled();
    done();
  });
});

describe('parseResult', () => {
  it('should parse a result', () => {
    // TODO
  });
});


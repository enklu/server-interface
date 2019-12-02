import { createTrellisActions } from '../actions/trellisActions';

const mocks = {
  getify: jest.fn(),
  postify: jest.fn(),
  deletify: jest.fn(),
  putify: jest.fn()
};

describe('createTrellisActions', () => {
  it('should create a trellisActions object', () => {
    const trellisActions = createTrellisActions(mocks);
    console.log(trellisActions);
  });
});

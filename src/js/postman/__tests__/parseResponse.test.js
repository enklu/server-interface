import parseResponse from '../util/parseResponse';

const mock = {
  name: 'Delete Space',
  request: {
    url: {
      path: ['v1', 'editor', 'space', '{{spaceId}}']
    }
  }
};

describe('parseResponse', () => {
  it('should parse a response', () => {
    const result = parseResponse(mock);
  });
});

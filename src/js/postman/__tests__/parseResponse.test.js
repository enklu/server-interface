import parseResponse from '../util/parseResponse';

const mock = {
  name: 'Delete Space',
  request: {
    method: 'delete',
    url: {
      path: ['v1', 'editor', 'space', '{{spaceId}}']
    }
  }
};

describe('parseResponse', () => {
  it('should parse a response into properties', () => {
    const { uri, action, func } = parseResponse(mock);
    expect(uri).toBe("DELETESPACE_URI: '/v1/editor/space/:spaceId'");
    expect(action).toBe("DELETESPACE: 'deletespace'");
    expect(func).toBe('deletespace: deletify(DELETESPACE, DELETESPACE_URI)');
  });

  it('should parse a response into variables', () => {
    const { uri, action, func } = parseResponse(mock, { assignment: 'variable' });
    expect(uri).toBe("DELETESPACE_URI = '/v1/editor/space/:spaceId'");
    expect(action).toBe("DELETESPACE = 'deletespace'");
    expect(func).toBe('deletespace = deletify(DELETESPACE, DELETESPACE_URI)');
  });
});

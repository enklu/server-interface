import constructItem from '../util/constructItem';

const mock = {
  name: 'Delete Space',
  request: {
    method: 'delete',
    url: {
      raw: 'ur{{port}}/v1/editor/space/{{spaceId}}'
    }
  }
};

describe('constructItem', () => {
  it('should parse a response into both properties and variables', () => {
    const { uri, action, func } = constructItem(mock);
    expect(uri).toBe("DELETESPACE_URI = '/v1/editor/space/:spaceId'");
    expect(action).toBe("DELETESPACE = 'deletespace'");
    expect(func).toBe('deletespace: deletify(DELETESPACE, DELETESPACE_URI)');
  });
});

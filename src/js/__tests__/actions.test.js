const actions = require('../actions/actions');
const { replace } = actions;


const rootUrl = '/long/url/name';
const testUrl1 = `${rootUrl}/:urlParam1/more/url/:urlParam2`;
const testUrl2 = `${testUrl1}?queryParam1=:queryParam1&queryParam2=:queryParam2`;

describe('replace', () => {
  it('should replace all vars in the url', () => {
    const replacements = { urlParam1: 'value1', urlParam2: 'value2' };
    const result = replace(testUrl1, replacements);
    expect(result.indexOf(':')).toBe(-1);

    const replacements2 = { urlParam1: 'value1', urlParam2: 'value2', queryParam1: 'queryvalue1', queryParam2: 'queryvalue2' };
    const result2 = replace(testUrl2, replacements2);
    expect(result2.indexOf(':')).toBe(-1);
  });

  it('should throw if something is in the url that is not in the replacements', () => {
    const replacements = { urlParam1: 'value1' };
    expect(() => replace(testUrl1, replacements)).toThrow();
  });

  it('should remove any endpoints not replaced in the querystring', () => {
    const replacements = { urlParam1: 'value1', urlParam2: 'value2', queryParam1: 'queryvalue1' };
    expect (() => replace(testUrl2, replacements)).not.toThrow();
  });
});

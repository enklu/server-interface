module.exports = (data, assignment = { uri: 'variable', action: 'variable', func: 'property' }) => {

  const { name, request: { url, method: _method } } = data;
  const method = _method.toLowerCase();

  const funcName = name.split(' ').join('').toLowerCase();
  const actionName = funcName.toUpperCase();
  const uriName = `${actionName}_URI`;

  // v1/editor/space/{{spaceId}}
  const path = url.path
    ? url.path.join('/').replace(/\{\{/g, ':').replace(/\}\}/g, '')
    : '';
  const uri = `${uriName}${assignment.uri === 'property' ? ':' : ' ='} '/${path}'`;
  const action = `${actionName}${assignment.action === 'property' ? ':' : ' ='} '${funcName}'`;
  const func = `${funcName}${assignment.func === 'property' ? ':' : ' ='} ${method === 'delete' ? 'delet' : method}ify(${actionName}, ${uriName})`

  return { uri, action, func };
};

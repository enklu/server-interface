module.exports = (data) => {
  const { name, request: { url, method: _method } } = data;
  const method = _method.toLowerCase();

  const path = url.path.join('/').replace('{{', ':').replace('}}', ''); // v1/editor/space/{{spaceId}}
  const funcName = name.split(' ').join('').toLowerCase();
  const actionName = funcName.toUpperCase();
  const uriName = `${actionName}_URI`;
  const uriString = `${uriName}: '/${path}'`;
  const actionString = `${actionName}: '${funcName}'`;
  const funcString = `${funcName}: ${method === 'delete' ? 'delet' : method}ify(${actionName}, ${uriName})`

  return [uriString, actionString, funcString];
};

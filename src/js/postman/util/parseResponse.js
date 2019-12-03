module.exports = (data, { assignment = 'property' } = {}) => {
  const { name, request: { url, method: _method } } = data;
  const method = _method.toLowerCase();

  const path = url.path.join('/').replace('{{', ':').replace('}}', ''); // v1/editor/space/{{spaceId}}
  const funcName = name.split(' ').join('').toLowerCase();
  const actionName = funcName.toUpperCase();
  const uriName = `${actionName}_URI`;

  const assignmentString = assignment === 'property' ? ':' : ' ='
  const uri = `${uriName}${assignmentString} '/${path}'`;
  const action = `${actionName}${assignmentString} '${funcName}'`;
  const func = `${funcName}${assignmentString} ${method === 'delete' ? 'delet' : method}ify(${actionName}, ${uriName})`

  return { uri, action, func };
};

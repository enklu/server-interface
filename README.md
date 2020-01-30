# server-interface

This package contains all server-facing code, and it is imported by various tools. It will need to be
rebuilt and committed to `master` every time a server changes.

## building
- to build trellisActions.js: `node src/js/postman/index.js --target=trellis`
- to build stargazerActions.js: `node src/js/postman/index.js -=target=stargazer`

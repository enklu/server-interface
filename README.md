## Overview

This package contains a generated API for Enklu services.

## Publishing a New Version

### Setup

- Login to your Postman account and generate a [Postman API key](https://trellis.postman.co/settings/me/api-keys).
- Create a file `src/js/postman/config/config.json` from the supplied `config-template.json`.
- Add your API key.

### Building

- To build `trellisActions.js`: `node src/js/postman/index.js --target=trellis`
- To build `stargazerActions.js`: `node src/js/postman/index.js --target=stargazer`

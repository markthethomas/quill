'use strict';

const fs = require('fs');
const path = require('path');
const PackageJSON = path.resolve(__dirname, '..', '..', 'package.json');
const config = {
  version: JSON.parse(fs.readFileSync(PackageJSON, 'utf8')).version,
  apiHost: process.env.apiHost || 'localhost',
  apiPort: process.env.apiPort || 3425,
  appHost: process.env.appPort || 'localhost',
  appPort: process.env.appPort || 5000,
}

module.exports = () => config;

#!/usr/bin/env node
const fs = require('fs');
const Package = require('../package.json');

const createPackage = (data) => {
  fs.writeFile('./lambda/custom/package.json', JSON.stringify(data), (error) => {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.mkdir('./lambda', (err) => {
          if (err) throw err;
          fs.mkdir('./lambda/custom', (e) => {
            if (e) throw e;
            createPackage(data);
          });
        });
      } else {
        throw error;
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('package.json -> lambda/custom/package.json');
    }
  });
};

const config = {
  name: Package.name,
  version: Package.version,
  private: true,
  dependencies: Package.dependencies,
};

createPackage(config);

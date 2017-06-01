#!/usr/bin/env node

let jsonfile = require('jsonfile');


const addScript = () => {
  try {
    let _package = jsonfile.readFileSync('../../package.json');
    if (!_package.scripts) {
      _package.scripts = {};
    }

    _package.scripts["boilerplate"] = "react-jarb";

    jsonfile.writeFileSync('../../package.json', _package, {spaces: 2});

  } catch (e) {

      throw e;

  }
};

console.log("adding Script");
addScript();

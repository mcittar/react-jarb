#!/usr/bin/env node

let jsonfile = require('jsonfile')


const addScript = () => {
  try {
    let _package = jsonfile.readFileSync('../../package.json');
    if (!_package.scripts) {
      _package.scripts = {};
    }

    console.log(_package);

    _package.scripts["boilerplate"] = "react-jarb";

    console.log(_package.scripts);

    jsonfile.writeFileSync('../../package.json', _package, {spaces: 2});

    console.log(jsonfile.readFileSync('../../package.json'));
    console.log(_package);
  } catch (e) {

      throw e

  }
};

console.log("adding Script");
addScript();

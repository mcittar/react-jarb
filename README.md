# README
### Quickstart Guide
 
`npm init -y`
`npm install react-jarb`
`npm run boilerplate`
 
### Description
Just Another React Boilerplate (jarb) is an npm module developed to allow React/Redux users to quickly and easily set up the skeleton and boilerplate for a basic React/Redux framework. The package sets up a webpack configuration, downloads all necessary dependencies, creates Jest/Enzyme test files, creates an organized file system, and provides a working example of React/Redux site that can be edited and further built upon.
 
### File Structure
```text
frontend
├── actions
│   └── project_actions.js
│      
├── components 
│   ├── __tests__
│   │     └── components-test.js
│   ├── gif_container.jsx
│   ├── gif.jsx
│   ├── main.jsx
│   └── root.jsx
│
├── reducers
│   ├── __tests__
│   │     └── reducer-test.js
│   ├── error_reducer.jsx
│   ├── gif_reducer.jsx
│   └── root.jsx
│
├── store
│   └── store.js
└── util
│   └── project_api_util.js
└── app.js
│
└── Index.html
 
webpack.config.js
```

### How to use it
- In a new directory, initialize your package.json by running: 
`npm init -y`
 
- Install react-jarb by running:
`npm install react-jarb -s`
 
- The following command will create the necessary file structure and initial boilerplate for your React/Redux project:
`npm run boilerplate`
 
 
### How it works
React-jarb works by installing all the packages that you would need to get full setup with React/Redux and sets up testing too. On top of adding all this it also parses your package.json file and adds itself to make it so you never have to leave the command-line. It does this by using another npm package called jsonfile.
 
```JavaScript
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
```

Once the boilerplate script has been added all that is left to do is run it. The script creates the folder structure that is listed out above and creates all the files that are needed.

### Future plans
- [ ] Provide optional redux-saga support
- [ ] Allow for components to be created from the command line
- [ ] Allow for packages to be added to the user’s package.json that have been installed from react-jarb

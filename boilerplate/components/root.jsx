import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router-dom';
import Main from './main.jsx';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ Main }>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

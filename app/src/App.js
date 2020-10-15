import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './Views/Homepage';
import Login from './Views/Login';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

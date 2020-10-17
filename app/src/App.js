import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './Views/Homepage';
import Login from './Views/Login';
import SignUp from './Views/SignUp';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <Login/>
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>
        
        <Route path="/">
          <HomePage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

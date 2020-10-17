import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { isUserLoggedIn } from '../lib/helpers';

export const RequireLogin = (ChildComponent) => {
  class ComposedComponent extends Component {
    state = {
      loggedin: true
    }

    async componentDidMount() {
      if (!(await isUserLoggedIn())) {
        this.setState({
          loggedin: false
        });
      }
    }

    render() {
      if (!this.state.loggedin) {
        return <Redirect to='/login'/>
      }
      return <ChildComponent {...this.props}/>;
    }
    
  }

  return ComposedComponent;
}
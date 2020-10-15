import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Dimmer } from 'semantic-ui-react';

import HomePage from './Views/Homepage';
import Login from './Views/Login';

function App() {
  const [active, setActive] = useState(false);
  
  const onLogin = () => {
    console.log("?");
    setActive(true);
  };

  const onClose = () => {
    setActive(false);
  };

  return (
    <div>
      <Dimmer active={active} onClickOutside={onClose} page>
        <Login/>
      </Dimmer>
      <HomePage login={onLogin}/>
    </div>
  );
}

export default App;

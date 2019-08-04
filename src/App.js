import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Welcome from './Components/Welcome/welcome';
import './App.css';
import './sidebar.css'

function App() {
  return (
    <div className="App">
      <Router>

        <Menu  pageWrapId={"page-wrap"} outerContainerId={"App"}>
          <Link className="home" to ="/">Welcome</Link>
        </Menu>

        <Route exact path="/" component={Welcome} />
      </Router>
    </div>
  );
}

export default App;

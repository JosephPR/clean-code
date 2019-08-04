import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Welcome from './Components/Welcome/welcome';
import Disney from "./Components/Disney/disney";
import './App.css';
import './sidebar.css'

function App() {
  return (
    <div>
      <Router>

        <Menu  pageWrapId={"page-wrap"} outerContainerId={"App"}>
          <Link className="home" to ="/">Welcome</Link>
          <Link className="home" to ="/disney">Disney</Link>
        </Menu>

        <Route exact path="/" component={Welcome} />
        <Route path="/disney" component={Disney} />
      </Router>
    </div>
  );
}

export default App;

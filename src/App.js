import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

import Clock from './Components/Clock/clock';
import Welcome from './Components/Welcome/welcome';
import Disney from "./Components/Disney/disney";
import Genie from './Components/Genie/genie';
import Playing from './Components/Playing/playing'
import RickAndMorty from './Components/RickAndMorty/rick-and-morty'
import Stock from './Components/Stock/stock';
import Megaman from './Components/Megaman/megaman'
import './App.css';
import './sidebar.css';

function App() {
  return (
    <div>
      <Router>
        <Clock className='clock' />
        <Menu  pageWrapId={"page-wrap"} outerContainerId={"App"}>
            <Link className="home" to ="/">Welcome</Link>
            <Link className="home" to ="/disney">Alice</Link>
            <Link className="home" to ="/genie">Genie</Link>
            <Link className="home" to ="/playing">In Theathers</Link>
            <Link className="home" to ="/rickandmorty">Rick and Morty</Link>
            <Link className="home" to ="/stocks">Stocks</Link>
            <Link className="home" to ="/megaman">Megaman</Link>

        </Menu>

        <Route exact path="/" component={Welcome} />
        <Route path="/disney" component={Disney} />
        <Route path="/genie" component={Genie} />
        <Route path="/playing" component={Playing} />
        <Route path="/rickandmorty" component={RickAndMorty} />
        <Route path="/stocks" component={Stock} />
        <Route path="/megaman" component={Megaman} />
      </Router>
    </div>
  );
}

export default App;

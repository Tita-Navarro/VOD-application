import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import History from './sections/History';
import Home from './sections/Home';
import Initiate from './sections/Initiate';
import Login_ from './sections/Login_';
import Movie from './sections/Movie';
import Register from './sections/Register';
import Reset from './sections/Reset';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={()=> <Initiate />} />
        <Route exact path="/Login_" render={()=><Login_ />} />
        <Route exact path="/Reset-Password" render={()=><Reset />} />
        <Route exact path="/Register" render={()=><Register />} />
        <Route exact path="/Home" render={()=><Home />} />
        <Route exact path="/Movie" render={()=><Movie />} />
        <Route exact path="/Watched" render={()=><History />} />
      </Switch>
    </HashRouter>
  );
}

export default App;

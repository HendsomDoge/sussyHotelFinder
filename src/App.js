import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Home, Rooms, SingleRoom, Error } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:roomId" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;

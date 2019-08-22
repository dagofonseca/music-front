import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
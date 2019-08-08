import React from 'react';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;

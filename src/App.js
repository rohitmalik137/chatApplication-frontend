import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import WelcomePage from './pages/welcome/welcome.components';
import HomePage from './pages/home/home.components';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/chat" exact component={HomePage} />
      </Router>
    </div>
  );
}

export default App;

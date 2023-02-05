import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const user = null;

  return (
    <div className="app">
      {
        !user ? (
          <LoginScreen />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        )
      }
    </div>
  );
}

export default App;

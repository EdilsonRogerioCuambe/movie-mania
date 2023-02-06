import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import PerfilScreen from './screens/PerfilScreen';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    // auth listener
    const desInscrever = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          profileUrl: userAuth.photoURL,
          email: userAuth.email
        }));
      } else {
        console.log('user logged out');
        dispatch(logout());
      }
    });

    return desInscrever;
  }, []);

  return (
    <div className="app">
      {
        !user ? (
          <LoginScreen />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/perfil" element={<PerfilScreen />} />
            </Routes>
          </Router>
        )
      }
    </div>
  );
}

export default App;

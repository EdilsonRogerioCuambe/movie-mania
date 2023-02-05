import React from 'react';
import logo from '../assets/image/NetFlix.svg';

const LoginScreen = () => {
  return (
    <div
        className="h-screen bg-black"
    >
        <div
            className="fixed top-0 left-0 right-0 z-50 transition duration-200 ease-in-out"
        >
            <img
                src={logo}
                alt="Netflix Logo"
                className="py-5 px-5 cursor-pointer transition duration-200 transform hover:scale-125"
            />
        </div>
    </div>
  )
};

export default LoginScreen;
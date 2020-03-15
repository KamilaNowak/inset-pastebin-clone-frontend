import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserRegister from "./authentication/UserRegister"
import UserLogin from "./authentication/UserLogin";

function App() {
  return (
    <div className="App">
      <UserLogin/>
    </div>
  );
}

export default App;

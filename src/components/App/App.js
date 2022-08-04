import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

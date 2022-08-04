import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

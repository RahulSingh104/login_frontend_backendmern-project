import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage.js';

 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login'element={<LoginPage/>}/>
        <Route path ='/registration' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
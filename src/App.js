import React from 'react'; //import React Component
import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from './page/MainPage.js';
import { Signup } from './page/Signup.js';
import { Login } from './page/Login.js';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="main" />} />
        <Route path="*" element={<Navigate to="error" />} />
        <Route path="main" element={<MainPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
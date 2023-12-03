import React from 'react'; //import React Component
import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from './page/MainPage.js';
// import { Signup } from './page/Signup.js';
// import { Login } from './page/Login.js';
import { Q1_1 } from './page/Q1_1.js';
import { Q1_2 } from './page/Q1_2.js';
import { Q2_1 } from './page/Q2_1.js';
import { Q2_2 } from './page/Q2_2.js';
import { Q2_3 } from './page/Q2_3.js';
import { Q3_1 } from './page/Q3_1.js';
import { Q3_2 } from './page/Q3_2.js';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="main" />} />
        <Route path="*" element={<Navigate to="error" />} />
        <Route path="main" element={<MainPage />} />
        {/* <Route path="signup" element={<Signup />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="q1_1" element={<Q1_1 />} />
        <Route path="q1_2" element={<Q1_2 />} />
        <Route path="q2_1" element={<Q2_1 />} />
        <Route path="q2_2" element={<Q2_2 />} />
        <Route path="q2_3" element={<Q2_3 />} />
        <Route path="q3_1" element={<Q3_1 />} />
        <Route path="q3_2" element={<Q3_2 />} />
      </Routes>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals'; 
import { Login } from './login/LoginScreen';
import { Home } from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { SessionContextProvider } from './context/SessionContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiado a BrowserRouter
import { RegisterScreen } from './register/RegisterScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <SessionContextProvider>   
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Home" element={<Home />} />  
        <Route path="/Register" element={<RegisterScreen />} />  
      </Routes>
    </Router> 
  </SessionContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

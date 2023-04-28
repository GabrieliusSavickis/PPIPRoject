import './App.css';
import React from 'react';
import  F1  from './components/F1';
import Home  from './components/Home';
import  MotoGP  from './components/MotoGP';
import  Login  from './components/Login';
import  Signup  from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class MotorSportsApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/home" element={<Home/>}/>
            <Route path="/F1" element={<F1 />} />
            <Route path="/MotoGP" element={<MotoGP />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default MotorSportsApp;

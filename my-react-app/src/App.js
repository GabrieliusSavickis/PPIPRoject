import './App.css';
import React from 'react';
import { F1 } from './components/F1';
import { Content } from './components/content';
import { MotoGP } from './components/MotoGP';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class MotorSportsApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="HomePage">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/F1">Formula 1</Nav.Link>
              <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
            </Nav>

          </Navbar>
          <br />
          <Routes>
            <Route path="/" element={<Content />} exact />
            <Route path="/F1" element={<F1 />} />
            <Route path="/" element={<MotoGP />} />
          </Routes>

        </div>
      </Router>
    );
  }
}
export default MotorSportsApp;

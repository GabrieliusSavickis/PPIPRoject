import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import '../styling/button-container.css';

function Home() {

  return (
    <div className="NavbarMenu">
      <Navbar>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/F1">Formula 1</Nav.Link>
          <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
        </Nav>
      </Navbar>
      <div className="Homepage">
        <h1>Hello and welcome to the home of MotorSports</h1>
        <div className="button-container">
          <a href="/F1" className="button">Go to F1</a>
          <a href="/MotoGP" className="button">Go to MotoGP</a>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </div>
  );
}

export default Home;
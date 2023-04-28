import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import '../styling/news-container.css';

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
        <br/>
        <br/>
        <h2>MotorSport News</h2>
        <div className="news-container">
            
                <div className="item1">
                    <h1>Image+clickable link to source</h1>
                </div>
                <div className="item2">
                    <h2>Image+clickable link to source</h2>
                </div>
                <div className="item3">
                    <h2>Image+clickable link to source</h2>
                </div>
                <div className="item4">
                    <h2>Image+clickable link to source</h2>
                </div>
                <div className="item5">
                    <h2>Image+clickable link to source</h2>
                </div>
                <div className="item6">
                    <h2>Image+clickable link to source</h2>
                </div>
            </div>
        <br/>
        <br/>
        <br/>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </div>
  );
}

export default Home;
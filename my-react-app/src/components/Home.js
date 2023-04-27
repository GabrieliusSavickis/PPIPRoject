import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Home() {

    //This hook returns the current location object
    return (
        <div className="HomePage">
            <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/F1">Formula 1</Nav.Link>
                    <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
                </Nav>
            </Navbar>
            <h1>Hello and welcome to the home of MotorSports</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Home
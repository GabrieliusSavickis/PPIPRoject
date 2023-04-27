import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class F1 extends React.Component {
    render() {
        return <div className="F1">
            <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/F1">Formula 1</Nav.Link>
                    <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
                </Nav>
            </Navbar>
            <h1>This is the F1</h1>
        </div>
    }
}
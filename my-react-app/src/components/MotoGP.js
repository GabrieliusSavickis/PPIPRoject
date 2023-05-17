import '../styling/navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';

const MotoGP = () => {
  const [seasons, setSeasons] = useState(null);

  useEffect(() => {
    const getSeasons = async () => {
      const url = 'http://localhost:3001/api/motogp/seasons';
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setSeasons(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSeasons();
  }, []);

  return (
    <div>
      <div className="NavbarMenu">
        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/F1">Formula 1</Nav.Link>
            <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="grid-container">
                <div className="item1">
                    <h1>2023 Riders Championship</h1>
                </div>
                <div className="item2">
                    <h2>Constructors Championship</h2>
                </div>
                <div className="item3">
                    <h2>Riders</h2>
                </div>
                <div className="item4">
                    <h2>Locations</h2>
                </div>
            </div>
      <h1>Season Statistics</h1>
      {seasons && (
        <div>
          <p>Name: {seasons}</p>
        </div>
      )}

    </div>
  );
};

export default MotoGP;

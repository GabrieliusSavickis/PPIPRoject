import '../styling/navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';

const MotoGP = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const getStatistics = async () => {
      const url = 'https://motogp2.p.rapidapi.com/api/data/get_rider_statistics_from_id';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'd5f52960c8mshe65ce0ba97ab492p19e6a5jsn5041f65a619f',
          'X-RapidAPI-Host': 'motogp2.p.rapidapi.com'
        },
        body: JSON.stringify({
          rider_id: '71df6f0d-51c3-4cdb-9f5c-51939e6f33f2'
        })
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error(error);
      }
    };

    getStatistics();
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
      <h1>Rider Statistics</h1>
      {statistics && statistics.rider && (
        <div>
          <p>Name: {statistics.rider.name}</p>
          <p>Number: {statistics.rider.number}</p>
          <p>Points: {statistics.points}</p>
          <p>Wins: {statistics.wins}</p>
          <p>Podiums: {statistics.podiums}</p>
        </div>
      )}

    </div>
  );
};

export default MotoGP;

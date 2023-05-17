import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import '../styling/f1.css';

function MotoGP() {
  const [team, setStages] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.sportradar.us/motogp/trial/v2/:locale/teams/:sr:competitor:22035/profile.json?api_key=kevrm5qvp7u49hd3qqw7hvum')
      .then(response => {
        setStages(response.data.team);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="MotoGP">
      <div className="NavbarMenu">
        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/F1">Formula 1</Nav.Link>
            <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="motoGP-container">
        <div className="item1">
          <h1>MotoGP Seasons</h1>
          <ul>
            {team.map(stage => (
              <li key={stage.description}>
                {stage.scheduled} {stage.scheduled_end}
              </li>
            ))}
          </ul>
        </div>
        <div className="item2">
          <h2>Circuits</h2>
        </div>
        <div className="item3">
          <h2>Drivers</h2>
        </div>
        <div className="item4">
          <h2>Locations</h2>
        </div>
      </div>
    </div>
  );
}

export default MotoGP;

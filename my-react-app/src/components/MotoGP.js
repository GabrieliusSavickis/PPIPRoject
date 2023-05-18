import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import '../styling/f1.css';

function MotoGP() {
  const [riderStandings, setRiderStandings] = useState([]);
  const [riders, setRiders] = useState([]);
  const [teams, setTeams] = useState([]);
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/Kaif370Z/JsonServer/Standings')
      .then(response => {
        setRiderStandings(response.data); // response.data instead of response
      })
      .catch(error => {
        console.log(error);
      });
      axios
      .get('https://my-json-server.typicode.com/Kaif370Z/JsonServer/Riders')
      .then(response => {
        setRiders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      axios
      .get('https://my-json-server.typicode.com/Kaif370Z/JsonServer/Teams')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      axios
      .get('https://my-json-server.typicode.com/Kaif370Z/JsonServer/Circuits')
      .then(response => {
        setCircuits(response.data);
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
        <h1>Riders</h1>
          <ul>
            {riders.map(rider => (
              <li key={rider.First_Name}>
                {rider.First_Name} 
                {rider.Last_Name}
              </li>
            ))}
          </ul>
        </div>
        <div className="item2">
          <h2>Rider Standings</h2>
          <ul>
            {riderStandings.map(riderStanding => (
              <li key={riderStanding.Position}>
                {riderStanding.Position} {riderStanding.Points} {riderStanding.Rider} {riderStanding.Team}
              </li>
            ))}
          </ul>
        </div>
        <div className="item3">
          <h2>Teams</h2>
          <ul>
            {teams.map(team => (
              <li key={team.id}>
                {team.TeamName}{team.Rider1} {team.Rider2}
              </li>
            ))}
          </ul>
        </div>
        <div className="item4">
          <h2>Circuits</h2>
          <ul>
            {circuits.map(circuit => (
              <li key={circuit.id}>
                {circuit.Name} {circuit.Country} {circuit.Length} {circuit.CircuitRecord}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MotoGP;

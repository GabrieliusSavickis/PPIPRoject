import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const options = {
  method: 'POST',
  url: 'https://motogp2.p.rapidapi.com/api/data/get_race_details_of_season',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'd5f52960c8mshe65ce0ba97ab492p19e6a5jsn5041f65a619f',
    'X-RapidAPI-Host': 'motogp2.p.rapidapi.com'
  },
  data: {
    season_id: 'db8dc197-c7b2-4c1b-b3a4-6dc534c023ef'
  }
};

function MotoGP() {

  const [races, setRaces] = useState([]);

  useEffect(() => {
    async function fetchRaces() {
      try {
        const response = await axios.request(options);
        setRaces(response.data.races);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRaces();
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
      <h1>MotoGP Season</h1>
      <ul>
        {races.map((race) => (
          <li key={race.id}>
            {race.name} - {race.country} ({race.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MotoGP;
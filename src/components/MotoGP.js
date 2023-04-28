import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    try {
        const response = axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }, []);

  return (
    <div>
      <h1>MotoGP Season</h1>
      <ul>
        {races.map(race => (
          <li key={race.id}>
            {race.name} - {race.country} ({race.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MotoGP;

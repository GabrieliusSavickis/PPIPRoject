import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import '../styling/f1.css';

function F1() {

    const [drivers, setDrivers] = useState([]);
    const [circuits, setCircuits] = useState([]);
    const [constructorStandings, setConstructorStandings] = useState([]);
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        axios
          .get('http://ergast.com/api/f1/2023/5/driverStandings.json')
          .then(response => {
            setDriverStandings(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    useEffect(() => {
        axios
            .get('http://ergast.com/api/f1/2023/drivers.json')
            .then(response => {
                setDrivers(response.data.MRData.DriverTable.Drivers);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    useEffect(() => {
        axios
            .get('http://ergast.com/api/f1/2023/circuits.json')
            .then(response => {
                setCircuits(response.data.MRData.CircuitTable.Circuits);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
          .get('http://ergast.com/api/f1/2023/5/constructorStandings.json')
          .then(response => {
            setConstructorStandings(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
        <div className="F1">
            <div className="NavbarMenu">
                <Navbar>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/F1">Formula 1</Nav.Link>
                        <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div className="f1-container">
                <div className="item1">
                    <h1>2023 Drivers Championship</h1>
                    <ul>
            {driverStandings.map(driver => (
              <li key={driver.Driver.driverId}>
                {driver.position}. {driver.Driver.givenName} {driver.Driver.familyName} ({driver.points} points)
              </li>
            ))}
          </ul>

                </div>
                <div className="item2">
                    <h2>Constructors Championship</h2>
                    <ul>
            {constructorStandings.map(constructor => (
              <li key={constructor.constructorId}>
                {constructor.position}. {constructor.Constructor.name} ({constructor.points} points)
              </li>
            ))}
          </ul>
                </div>
                <div className="item3">
                    <h2>Drivers</h2>
                    <ul>
                        {drivers.map(driver => (
                            <li key={driver.driverId}>
                                {driver.givenName} {driver.familyName}
                            </li>

                        ))}
                    </ul>
                </div>
                <div className="item4">
                    <h2>Circuits</h2>
                    <ul>
                        {circuits.map(circuit => (
                            <li key={circuit.circuitId}>
                                {circuit.circuitName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default F1;
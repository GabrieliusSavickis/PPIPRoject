import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import '../styling/f1.css';

function F1() {

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        axios
          .get('http://ergast.com/api/f1/2023/drivers')
          .then(response => {
            setDrivers(response.data.MRData.DriverTable.Drivers);
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

            <div className="grid-container">
                <div className="item1">
                    <h1>2023 Drivers Championship</h1>
                    <ul>
                        {drivers.map(driver => (
                            <li key={driver.driverId}>
                                {driver.givenName} {driver.familyName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="item2">
                    <h2>Constructors Championship</h2>
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

export default F1;
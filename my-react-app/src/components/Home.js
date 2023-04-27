import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';


export class Home extends React.Component {
    render() {
        {/*This hook returns the current location object*/}
        const location=useLocation()
        return (
        <div className="Front-Page">
            <h1>Hello {location.state.id} and welcome to the home of MotorSports</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

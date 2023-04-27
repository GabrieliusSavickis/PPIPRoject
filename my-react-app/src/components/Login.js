import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"


export class Login extends React.Component {
    render() {
        return (
        <div className="login">
        
            <h1>Login</h1>
            
            //This is a form
            <form action="POST">
                <input type="email" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email"/>
                <input type="password" onChange={(event)=>{setPassword(event.target.value)}} placeholder="Password"/>
                <input type="submit" />
            </form>

            <br/>
            <p>OR</p>
            <br/>

            <Link to="/signup"></Link>
        </div>
        );
    }
}
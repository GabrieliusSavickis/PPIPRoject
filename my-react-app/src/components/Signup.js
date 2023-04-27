import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


function Signup() {

    //New variable to move between pages
    const redirect = useNavigate();
    //Empty values which will be stored by user's entry
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitSignup(event) {
        //If the event does not get explicitly handled, its default action should not be taken
        event.preventDefault();

        try {
            await axios.post('http://localhost:3000/signup', {
                email,
                password
            })
                .then(res => {
                    if (res.data === "emailExist") {
                        alert("User already exists")

                    }
                    else if (res.data === "emailNotExist") {
                        redirect("/Home", { state: { id: email } })
                    }
                })             
        }
        catch (event) {
            console.log(event);
        }
    };

    return (
        <div className="signup">

            <h1>Signup</h1>

            {/*This is a form for a user to login*/}
            <form action="POST">
                <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                <input type="submit" onClick={(event) => submitSignup(event)} />
            </form>

            <br />
            <p>OR</p>
            <br />
            {/*If the user doesn't have an account they can clik Sign up instead which will redirect them to the signup link*/}
            <Link to="/api/">Login</Link>
        </div>
    );
}
export default Signup
import React from 'react';


export class Home extends React.Component {
    render() {
        return (
        <div className="Front-Page">
            <h1> Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

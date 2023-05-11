import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styling/news-container.css';
import '../styling/navbar.css';
import '../styling/homepage.css';

function Home() {
  return (
    <div className="HomePage">
      <div className="NavbarMenu">
        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/F1">Formula 1</Nav.Link>
            <Nav.Link href="/MotoGP">MotoGP</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="MainContent">
        <h1>Hello and Welcome to the Home of Motorports</h1>
        <br />
        <br />
        <h2>MotorSport News</h2>
        <div className="news-container">
          <Card>
            <Card.Img variant="top" src="https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1678300205/content/dam/fom-website/manual/2023/Power%20Rankings%202023%20header.jpg.transform/9col/image.jpg" />
            <Card.Body>
              <Card.Title>POWER RANKINGS: Which drivers impressed our judges at the Miami Grand Prix?</Card.Title>
              <Button variant="primary" href="https://www.formula1.com/en/latest/article.power-rankings-which-drivers-impressed-our-judges-at-the-miami-grand-prix.4qaLo2rR5qEgDGWXRWrxcQ.html">
                Read More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1683725784/horner-miami-grid.png.transform/9col/image.png" />
            <Card.Body>
              <Card.Title>‘Where did Ferrari and Mercedes go?’ – Horner baffled by rivals after latest Red Bull 1-2</Card.Title>
              <Button variant="primary" href="https://www.formula1.com/en/latest/article.where-did-ferrari-and-mercedes-go-horner-baffled-by-rivals-after-latest-red.3GrEuZy8oEJ6rVmBabxkHB.html">
                Read More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1683556851/GettyImages-1395925477.jpg.transform/9col/image.jpg" />
            <Card.Body>
              <Card.Title>EXCLUSIVE: ‘There will be consequences’ – Furious Rossi demands Alpine improve fast after stuttering start to 2023</Card.Title>
              <Button variant="primary" href="https://www.formula1.com/en/latest/article.exclusive-there-will-be-consequences-furious-rossi-demands-alpine-improve.4Tbxdxh5xV4fS2a4u2T2yl.html">
                Read More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/T1d9Ymb/MotoGp1.png"/>
            <Card.Body>
              <Card.Title>Official: Marc Marquez declared FIT for the French GP</Card.Title>
              <Button variant="primary" href="https://www.motogp.com/en/news/2023/05/11/official-marc-marquez-declared-fit-for-the-french-gp/454634">
                Read More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/TWLny1x/MotoGp2.png" />
            <Card.Body>
              <Card.Title>The secrets to toppling the Top Gun in MotoGP™ Fantasy</Card.Title>
              <Button variant="primary" href="https://www.motogp.com/en/news/2023/05/11/the-secrets-to-toppling-the-top-gun-in-motogp-fantasy/454640">
                Read More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/vhh80qG/Motogp3.png" />
            <Card.Body>
              <Card.Title>Who were the winners in past Grand Prix milestones?</Card.Title>
              <Button variant="primary" href="https://www.motogp.com/en/news/2023/05/10/who-were-the-winners-in-past-grand-prix-milestones/454438">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    </div>
  );
}

export default Home;
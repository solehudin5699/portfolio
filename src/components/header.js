import React, { useContext } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-scroll';
import PortfolioContext from '../context';

export default function Header() {
  const { profile } = useContext(PortfolioContext);
  return (
    <section
      id="header"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6ff',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Container
        style={{ paddingLeft: '25px', color: '#000066', fontSize: '2.5rem' }}
      >
        <Jumbotron>
          <Fade duration={2500} delay={500} left distance="150px">
            <h1>
              Hi, my name is{' '}
              <span style={{ fontWeight: 'bold' }}>{profile.name}</span>
            </h1>
          </Fade>
          <Fade duration={2500} delay={1000} distance="50px" top>
            <h4>
              Welcome to my <span style={{ color: '#6666ff' }}>portfolio</span>
            </h4>
          </Fade>
          <Fade bottom duration={2500} delay={500} distance="150px">
            <Link to="about" smooth duration={500}>
              <Button
                style={{
                  height: '40px',
                  backgroundColor: '#6666ff',
                  outline: 'none',
                  outlineWidth: 0,
                  outlineColor: 'transparant',
                }}
              >
                About me
              </Button>
            </Link>
          </Fade>
          <Bounce bottom duration={1500} delay={2000} distance="150px">
            <div
              style={{
                borderBottom: '3px solid #6666ff',
                width: '100%',
                marginTop: '50px',
              }}
            ></div>
          </Bounce>
        </Jumbotron>
      </Container>
    </section>
  );
}

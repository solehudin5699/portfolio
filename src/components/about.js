import React from 'react';
import Title from './title';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { PortfolioConsumer } from '../context';

export default function About() {
  return (
    <PortfolioConsumer>
      {({ profile }) => (
        <section id="about" style={{ backgroundColor: '#000066' }}>
          <Container
            style={{
              backgroundColor: '#000066',
              paddingTop: '15px',
            }}
          >
            <Title title="ABOUT" />
            <div>
              <Row>
                <Col lg={4} sm={12}>
                  <Fade left duration={1000} delay={500}>
                    <div style={{ padding: '20px' }}>
                      <Image src={profile.photo} rounded width="100%" />
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade right duration={1000} delay={500}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        height: '100%',
                        flexDirection: 'column',
                        padding: '20px',
                      }}
                    >
                      {profile.aboutme.map((paragraph) => (
                        <p style={{ textAlign: 'justify', color: '#e6e6ff' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </Fade>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      )}
    </PortfolioConsumer>
  );
}

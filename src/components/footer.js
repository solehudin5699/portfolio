import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { PortfolioConsumer } from '../context';

export default function Footer() {
  return (
    <PortfolioConsumer>
      {({ profile }) => (
        <section
          id="footer"
          style={{
            height: '95vmin',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000066',
          }}
        >
          <Container>
            <Row>
              <Col
                sm={12}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span>
                  <Link to="header" smooth duration={1000}>
                    <i
                      style={{
                        color: 'rgba(230, 230, 255,0.7)',
                        cursor: 'pointer',
                      }}
                      className="fa fa-angle-up fa-2x"
                      aria-hidden="true"
                    />
                  </Link>
                </span>
              </Col>
              <Col
                sm={12}
                style={{ textAlign: 'center', marginBottom: '10px' }}
              >
                <span style={{ color: 'rgba(230, 230, 255,0.5)' }}>
                  connect to
                </span>
              </Col>
              <Col
                style={{
                  borderBottom: '1px solid #e6e6ff',
                  textAlign: 'center',
                  paddingBottom: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
                sm={12}
              >
                <Fade duration={2500} delay={500} bottom distance="30px">
                  <div title="Github">
                    <h1>
                      <a
                        style={{
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        href={profile.urlGithub}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          style={{
                            color: '#e6e6ff',
                            marginRight: '5px',
                          }}
                          className="fa fa-github"
                          aria-hidden="true"
                        ></i>
                        <span
                          style={{
                            color: '#e6e6ff',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          {profile.github}
                        </span>
                      </a>
                    </h1>
                  </div>
                  <div title="Gitlab">
                    <h1>
                      <a
                        style={{
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        href={profile.urlGitlab}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          style={{ color: '#e6e6ff', marginRight: '5px' }}
                          class="fa fa-gitlab"
                          aria-hidden="true"
                        ></i>
                        <span
                          style={{
                            color: '#e6e6ff',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          {profile.gitlab}
                        </span>
                      </a>
                    </h1>
                  </div>
                  <div title="Linkedin">
                    <h1>
                      <a
                        style={{
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        href={profile.urlLinkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          style={{ color: '#e6e6ff', marginRight: '5px' }}
                          class="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>
                        <span
                          style={{
                            color: '#e6e6ff',
                            fontWeight: 'bold',
                            fontSize: '16px',
                          }}
                        >
                          {profile.linkedin}
                        </span>
                      </a>
                    </h1>
                  </div>
                </Fade>
              </Col>
              <Col
                style={{
                  textAlign: 'center',
                  color: '#e6e6ff',
                  marginTop: '15px',
                }}
                sm={12}
              >
                <Fade duration={2500} delay={500} top distance="30px">
                  <h6>
                    Developed by {profile.name} &#169;{' '}
                    {new Date().getFullYear()}
                  </h6>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </PortfolioConsumer>
  );
}

import React, { useContext } from 'react';
import Title from './title';
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-medium-image-zoom';
import PortfolioContext from '../context';

export default function Projects() {
  const { projects } = useContext(PortfolioContext);
  return (
    <section id="projects" style={{ backgroundColor: '#6666ff' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000066"
          fill-opacity="1"
          d="M0,224L1440,64L1440,0L0,0Z"
        ></path>
      </svg>
      <Container
        style={{
          backgroundColor: '#6666ff',
          marginTop: '-25px',
        }}
      >
        <Title title="PROJECTS" />
        <Row style={{ marginTop: '35px' }}>
          {projects.map((project, i) => (
            <Col
              key={i.toString()}
              lg={6}
              sm={12}
              style={{ marginBottom: '15px' }}
            >
              <Fade
                left={i % 2 === 0}
                right={i % 2 === 1}
                duration={1000}
                delay={500}
              >
                <Card
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    border: 'none',
                    overflow: 'hidden',
                  }}
                >
                  <Zoom>
                    <Image alt="" src={project.image} width="100%" />
                  </Zoom>

                  <Card.Body style={{ minHeight: '200px' }}>
                    <Card.Title style={{ color: '#6666ff' }}>
                      {project.name}
                    </Card.Title>
                    <Card.Text
                      style={{ textAlign: 'justify', fontSize: '0.9rem' }}
                    >
                      {project.description}
                    </Card.Text>
                    <ButtonGroup
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: 'none',
                        outline: 'none',
                      }}
                      size="sm"
                    >
                      <Button
                        disabled={!Boolean(project.sourceCode)}
                        href={project.sourceCode}
                        target="_blank"
                        style={{
                          backgroundColor: 'transparent',
                          borderRadius: '10px',
                          marginRight: '10px',
                          borderColor: '#6666ff',
                          color: '#6666ff',
                        }}
                      >
                        {project.sourceCode
                          ? 'Repository'
                          : 'Private Repository'}
                      </Button>
                      {/* <Button
                          style={{
                            backgroundColor: '#6666ff',
                            borderRadius: '10px',
                            marginRight: '10px',
                          }}
                        >
                          Download
                        </Button> */}
                      {project.demo && (
                        <Button
                          style={{
                            backgroundColor: 'transparent',
                            borderRadius: '10px',
                            marginRight: '10px',
                            borderColor: '#6666ff',
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

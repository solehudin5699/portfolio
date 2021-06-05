import React, { useState } from 'react';
import Title from './title';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

export default function Contact({ width, height }) {
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', messages: '' });
  const handleChange = (e) => {
    let target = e.target;
    setForm({ ...form, [target.name]: target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const scriptURL = process.env.REACT_APP_SPREADSHEETS;
    let formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('messages', form.messages);
    setSuccess(false);
    setError(false);
    setLoading(true);
    fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => {
        setSuccess(true);
        setForm({ name: '', email: '', messages: '' });
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#e6e6ff',
        marginBottom: 0,
        paddingBottom: '25px',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6666ff"
          fill-opacity="1"
          d="M0,224L1440,64L1440,0L0,0Z"
        ></path>
      </svg>
      <Container
        style={{
          backgroundColor: '#e6e6ff',
          marginTop: '-25px',
        }}
      >
        <Title title="CONTACT" color="#6666ff" />
        <Row className="justify-content-center mb-3 ">
          <Col md={8}>
            <Fade left duration={1000} delay={500}>
              <Alert
                show={isSuccess}
                variant="success"
                className="d-flex justify-content-between"
              >
                Your messages has been sent.
                <button
                  onClick={() => setSuccess(false)}
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                ></button>
              </Alert>
              <Alert
                show={isError}
                variant="danger"
                className="d-flex justify-content-between"
              >
                Failed to send message, please try again.
                <button
                  onClick={() => setError(false)}
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                ></button>
              </Alert>
              <Form onSubmit={onSubmit} name="myPorfolioMessage">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Messages</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Your messages"
                    rows={3}
                    required
                    name="messages"
                    value={form.messages}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  disabled={isLoading}
                  style={{ backgroundColor: '#6666ff' }}
                  type="submit"
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm btn-loading me-1"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </>
                  ) : (
                    <>
                      <span
                        className="fa fa-paper-plane me-1"
                        aria-hidden="true"
                      ></span>
                      Send
                    </>
                  )}
                </Button>
              </Form>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

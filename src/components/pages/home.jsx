import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Bienvenido a nuestra tienda</h1>
          <Button variant="primary">Iniciar Sesión</Button>{' '}
          <Button variant="secondary">Registrarse</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

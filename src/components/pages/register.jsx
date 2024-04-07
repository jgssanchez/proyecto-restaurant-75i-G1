import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import bannerRegister from "../../assets/bannerRegister.jpg"
import "../cssPages/register.css"

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier lógica de validación que necesites
    // En este ejemplo, simplemente mostraremos los datos en la consola
    console.log({ nombre, email, password });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
    <Row>
      <Col md={6}>
        <img className='img-fluid my-4 h-75' src={bannerRegister} alt="Imagen de registro" />
      </Col>
      <Col md={6}>
        <div className="d-flex justify-content-start align-items-start flex-column">
          <h2 className=' mt-4'>Registro</h2>
          <Form  className= "mt-4"onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  
  
  );
}

export default Registro;

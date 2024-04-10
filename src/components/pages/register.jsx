import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import bannerRegistro from "../../assets/bannerRegistro.png";
import "../cssPages/register.css"

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!nombre || !email || !password || !confirmPassword) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Lógica para enviar los datos del formulario
    console.log('Datos del formulario:', { nombre, email, password });
  };

  return (
      
    <Container className="conteiner d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage:`url(${bannerRegistro})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Row>
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Registro</h2>
            {error && <p className="text-danger">{error}</p>}
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirme su contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Registrarse</Button>
          </Form>
        </Col>
      </Row>
    </Container>
 
  );
};

export default Register;

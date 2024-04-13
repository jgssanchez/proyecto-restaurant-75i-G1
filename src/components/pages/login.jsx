import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../cssPages/loginCss.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Por favor, ingresa tu correo electrónico.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Por favor, ingresa tu contraseña.');
      isValid = false;
    }

    if (isValid) {

      console.log('Email:', email);
      console.log('Password:', password);
     
    }
  };

  return (
    <div className="fullcontent">
      <Container className='container'>
        <Row className="headings">
          <Col>
            <h1>Bienvenido a Lotus Fusion</h1>
            <h2>
              ¡Descubre una fusión de sabores únicos y una experiencia
              gastronómica excepcional en nuestro restaurante!
            </h2>
            <h2>
              {" "}
              En Lotus Fusion, nos enorgullece ofrecer platos cuidadosamente
              preparados que combinan la frescura de los ingredientes con la
              creatividad en la cocina. Nuestro objetivo es brindarte una comida
              deliciosa y satisfactoria en un ambiente acogedor y relajante.
            </h2>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2 className="mb-4">Registro</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" name="name" value={formData.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password" value={formData.password} onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default Login;

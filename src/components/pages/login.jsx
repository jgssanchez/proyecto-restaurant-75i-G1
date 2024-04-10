import React, { useState } from 'react';
import { Form, Button, Container,Row,Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../cssPages/loginCss.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos al servidor
    console.log('Email:', email);
    console.log('Password:', password);
    // Aquí puedes agregar la lógica para redirigir al usuario después del inicio de sesión
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
        <Row className="formbox justify-content-center ">
          <Col>
            <h3>Log In</h3>
            <Form id="form" action="" method="post">
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" />
              </Form.Group>
              <Button className="botonForm my-2 bg-transparent" id="btn" type="submit">
                Log In
              </Button>
              <Form.Group>
                <Form.Label>Eres nuevo aqui?</Form.Label>
                <Link href="register.html" className="mainbox" to="/register">
                  Register Now
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

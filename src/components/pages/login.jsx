import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../cssPages/loginCss.css";
import clienteAxios from "../../utils/clienteAxios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !regexEmail.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return
    }

    if (!password) {
      setError("Por favor, ingresa tu contraseña.");
      return
    }
    
    try {
      await clienteAxios.post('/login', {email, password})
      .then(res => {
        setError('')
        setEmail('')
        setPassword('')
        alert('Bienvenido')
        setTimeout(()=>{
          navigate("/")
        }, 2000)
      })
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div className="fullcontent">
      <Container className="container">
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
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2 className="mb-4">Iniciar Sesión</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

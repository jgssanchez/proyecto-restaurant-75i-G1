import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import bannerRegistro from "../../assets/bannerRegistro.png";
import "../cssPages/register.css";

function RegisterForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (!nombre || !email || !telefono || !password || !confirmPassword) {
      setError('Por favor complete todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    // Aquí puedes implementar la lógica para manejar el envío del formulario
  };

  return (
    <div className=" d-flex justify-content-center align-items-center p-0" style={{ height: '100vh', backgroundImage: `url(${bannerRegistro})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <Form onSubmit={handleSubmit} className="formulario p-4 bg-light rounded shadow d-flex flex-column align-items-center">
            <h2 className="text-center mb-4">Registro</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su número de teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirme su contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 my-3">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterForm;




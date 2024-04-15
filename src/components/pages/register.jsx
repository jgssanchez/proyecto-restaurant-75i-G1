import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import bannerRegistro from "../../assets/bannerRegistro.png";
import "../cssPages/register.css";
import clienteAxios from '../../utils/clienteAxios';


function RegisterForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const regexNombre = /^[a-zA-Z ]{4,50}$/
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !email || !password || !confirmPassword) {
      setError('Por favor complete todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if(!regexNombre.test(nombre)){
      setError('El nombre debe tener entre 4 y 50 caracteres (solo letras)')
      return;
    }

    if(!regexEmail.test(email)){
      setError('Introduce un email válido')
      return;
    }

    if(!regexPassword.test(password)){
      setError('La contraseña debe tener al menos 8 carácteres y contener al menos una letra mayúscula, una letra minúscula y un número')
      return;
    }
    
    try {
      await clienteAxios.post('/usuarios', {nombre, email, password})
      .then(res => {
        setError('')
        setNombre('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        alert('Usuario creado con exito')
      })
    }catch(error){
      alert(error.message)
    }
  };

  return (
    <div className=" d-flex justify-content-center align-items-center p-0" style={{ height: '100vh', backgroundImage: `url(${bannerRegistro})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Row className="justify-content-center w-50">
        <Col md={12} lg={12}>
          <Form onSubmit={handleSubmit} className="formulario p-4 bg-light rounded shadow d-flex flex-column align-items-center">
            <h2 className="text-center mb-4">Registro</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <Form.Group className='w-75' controlId="nombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className='w-75'  controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>  
            <Form.Group className='w-75'  controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className='w-75'  controlId="confirmPassword">
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




import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../cssPages/loginCss.css";
import clienteAxios from "../../utils/clienteAxios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = async e => {
        e.preventDefault();

        if (!email || !regexEmail.test(email)) {
            setError("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (!password) {
            setError("Por favor, ingresa tu contraseña.");
            return;
        }

        try {
            await clienteAxios.post("/login", { email, password }).then(res => {
                setError("");
                setEmail("");
                setPassword("");
                alert("Bienvenido");
                setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                }, 2000);
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="fullcontent align-content-center">
            <Container className="container">
                <div className="formbox d-flex justify-content-center align-items-center">
                    <div
                        style={{
                            color: "white",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <h2 className="mb-4">Iniciar Sesión</h2>
                        {error && (
                            <p className="text-danger text-center">{error}</p>
                        )}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button
                                className="btn my-2 w-100"
                                variant="warning"
                                type="submit"
                            >
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

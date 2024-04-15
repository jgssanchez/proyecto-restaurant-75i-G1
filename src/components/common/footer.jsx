import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../common/footer.css";
import logo from "../../assets/logo-sinbg.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={3} className="footer-column">
                        <img src={logo} alt="Logo" className="footer-logo" />
                        <p>&copy; RollingCode Todos los derechos reservados</p>
                        <p>Proyecto final</p>
                        <p>comisión 75-i Grupo 1</p>
                    </Col>
                    <Col md={3} className="footer-column">
                        <h5>Información</h5>
                        <p>
                            Dirección: Gral. Paz 576, T4000 San Miguel de
                            Tucumán, Tucumán
                        </p>
                        <p>Teléfono: +543815783030</p>
                        <p>Email: academy@rollingcodeschool.com</p>
                    </Col>
                    <Col md={3} className="footer-column">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.facebook.com/">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/">Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} className="footer-column">
                        <h5>Contacto</h5>
                        <p>Envíanos un mensaje</p>
                        <a href="mailto:contacto@example.com">
                            contacto@example.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

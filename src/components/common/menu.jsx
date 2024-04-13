import React from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../common/menu.css";
import logo from "../../assets/logo-sinbg.png";

const Menu = () => {
  const [opaco, setOpaco] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setOpaco(true);
      } else {
        setOpaco(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar sticky="top" expand="lg" className="bg-navbar pt-0">
      <Container
        fluid
        className="d-flex flex-lg-column flex-wrap justify-content-between align-items-center"
        style={{
          backgroundColor: opaco ? "#232222" : "transparent",
        }}
      >
        <div className="d-flex flex-row justify-content-between align-items-center">
          <Navbar.Brand>
            <img className="img-fluid me-md-4 " src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{
              backgroundColor: opaco ? "white" : "transparent",
            }}
            className="ms-md-5"
          ></Navbar.Toggle>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            
            className="justify-content-center align-items-center text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link
                href="/"
                className={`${opaco ? "text-white" : "text-black"} `}
              >
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/nosotros"
                className={`${opaco ? "text-white" : "text-black"} `}
              >
                Nosotros
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                className={`nav-link ${
                  opaco ? "text-white" : "text-black"
                } hover-text`}
              >
                Productos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                className={`nav-link ${
                  opaco ? "text-light" : "text-black"
                } hover-text`}
              >
                Ver carrito <i class="bi bi-cart-fill"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav
            className="justify-content-end mb-lg-0 ms-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link
                eventKey="link-4"
                className={`text-center ${
                  opaco ? "text-white" : "text-black"
                } hover-text`}
              >
                <button class="btn btn-warning" type="text">
                  Iniciar sesión
                </button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

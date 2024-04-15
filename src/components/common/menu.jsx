import React from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../common/menu.css";
import logo from "../../assets/logo-sinbg.png";
import { useSelector } from "react-redux";
import clienteAxios from "../../utils/clienteAxios";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [opaco, setOpaco] = useState(false);
  const { estaLogueado, usuario } = useSelector((state) => state.usuario);

  const handleLogout = async () => {
    try {
      await clienteAxios.get("/logout").then((res) => {
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1500);
      });
    } catch (error) {
      alert(error.message);
    }
  };

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
            {usuario && usuario.role === "admin" ? (
              <Nav.Item>
                <Nav.Link
                  href="/admin"
                  className={`nav-link ${
                    opaco ? "text-light" : "text-black"
                  } hover-text`}
                >
                  Panel <i className="bi bi-person-gear"></i>
                </Nav.Link>
              </Nav.Item>
            ) : (
              ""
            )}
            <Nav.Item>
              <Nav.Link
                href="/Register"
                className={`${opaco ? "text-white" : "text-black"} `}
              >
                Registrarse
              </Nav.Link>
            </Nav.Item>  
            <Nav.Item>
              <Nav.Link
                href="/carrito"
                className={`nav-link ${
                  opaco ? "text-light" : "text-black"
                } hover-text`}
              >
                Ver carrito <i className="bi bi-cart-fill"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav
            className="justify-content-end mb-lg-0 ms-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {estaLogueado ? (
              <Nav.Item>
                <Nav.Link
                  className={`text-center ${
                    opaco ? "text-white" : "text-black"
                  } hover-text`}
                >
                  <button
                    onClick={handleLogout}
                    className="btn btn-warning"
                    type="text"
                  >
                    Cerrar Sesión
                  </button>
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link
                  href="/login"
                  className={`text-center ${
                    opaco ? "text-white" : "text-black"
                  } hover-text`}
                >
                  <button className="btn btn-warning" type="text">
                    Iniciar sesión
                  </button>
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

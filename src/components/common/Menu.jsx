import React from 'react';
import { Button, Navbar, Container, Nav,Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../common/menu.css'; 

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
      <Container fluid className="d-flex flex-lg-column flex-wrap justify-content-between align-items-center" 
      style={{
        backgroundColor: opaco ? "#232222" : "transparent",
       
      }}>
        
    <Navbar.Brand>
        <img className= "img-fluid min-sm-vw-25" src="../../assets/Lotus-logo.png"></img>
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav variant="tabs" className="justify-content-center  text-center"
            style={{ maxHeight: '100px',
        
        }}
        
            navbarScroll
          >
          <Nav.Item>
          <Nav.Link href="/home" className={`${opaco ? "text-white" : "text-black"} `}>Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/nosotros" className={`${opaco ? "text-white" : "text-black"} `}>Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className={`nav-link ${opaco ? "text-white" : "text-black"} hover-text`} >Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" className={`nav-link ${opaco ? "text-light" : "text-black"} hover-text`} >Ver carrito <i class="bi bi-cart-fill"></i></Nav.Link>
        </Nav.Item>
        </Nav>
        <Nav  className="justify-content-end mb-lg-0 ms-3"
            style={{ maxHeight: '100px',
        
        }}
        
            navbarScroll
          >
        <Nav.Item>
          <Nav.Link eventKey="link-4" className={`text-center ${opaco ? "text-white" : "text-black"} hover-text`} ><button class="btn btn-warning" type="text">
                    Iniciar sesión
                  </button></Nav.Link>
        </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      
      
      </Container>
    </Navbar>

    );
};

export default Menu;
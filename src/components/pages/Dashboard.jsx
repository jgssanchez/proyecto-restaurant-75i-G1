import React, { useState } from "react";
import { Container, Navbar, Col, Button, Offcanvas, Nav, Image } from "react-bootstrap";
import usuario from "../../assets/usuario.png";
import logo from "../../assets/logo-sinbg.png"
import { HiOutlineMenuAlt1, HiOutlineMenu } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRequestPage, MdOutlineRestaurantMenu,MdOutlineLogout } from "react-icons/md";

const Dashboard = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openOffcanvas, setOpenOffcanvas] = useState(true);

  const handleCloseNavbar = () => setShowNavbar(false);
  const handleShowNavbar = () => setShowNavbar(true);

  const toggleOffcanvas = () => setOpenOffcanvas(!openOffcanvas);

  return (
    
      <Container  className="d-flex">
        <Navbar bg="dark" expand="lg" fixed="top" className="dashboard">
          <Container fluid className="d-flex justify-content-around align-items-center">
            <Col>
              <Button onClick={toggleOffcanvas} aria-controls="offcanvas-collapse" className="btn btn-link">
                <HiOutlineMenuAlt1 size={44} />
              </Button>
            </Col>
            <Col>
              <Navbar.Brand href="#" className="mx-auto">
                <img src={logo} width="290" height="50" className="img-fluid" alt="logo" />
              </Navbar.Brand>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleShowNavbar} className="btn btn-link">
                <HiOutlineMenu size={58} />
              </Button>
            </Col>
          </Container>
        </Navbar>

        <Offcanvas show={showNavbar} onHide={handleCloseNavbar} placement="end" className="bg-light">
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav variant="tabs" className="flex-column mt-4 text-center">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#">Productos</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

          
            <Offcanvas show={openOffcanvas}  onHide={toggleOffcanvas} placement="start" backdrop={false}
        keyboard={false}
        scrollLock={false} className="offcanva-dashboard">
              <Offcanvas.Header closeButton className="btn-dashboard">
                <div className="d-flex flex-column">
                <Offcanvas.Title className="col-12"> Bienvenido admin</Offcanvas.Title>
                <Image src={usuario} height="100" className="col-6 mt-4" style={{marginLeft: "110px"}}roundedCircle></Image>
                <p className="col-12 text-center ms-5 mt-4">administrador@gmail.com</p>
                </div>
                
                </Offcanvas.Header>
                <Offcanvas.Body>
               
                <Nav className="mt-4 flex-column text-center align-items-center">
                  <Nav.Link href="/admin/usuarios">
                    <FaUsers />
                    Usuarios
                  </Nav.Link>
                  <Nav.Link href="/carrito">
                    
                    <MdOutlineRequestPage />
                    Pedidos
                  </Nav.Link>
                  <Nav.Link href="/admin/productos">
                    <MdOutlineRestaurantMenu />
                    Productos
                  </Nav.Link>
                </Nav>
                <Nav style={{marginTop : "130px", marginLeft: "120px"}} className="link-logout">
                  <Nav.Link>
                    <MdOutlineLogout></MdOutlineLogout>Logout
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
        
            <Container style={{ marginLeft: openOffcanvas ? "250px" : "0" } } className="mt-5">
       
        <Col>
          <div className="p-3">
            <h5>Otro contenido</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, mauris et pulvinar varius, risus
              neque porta arcu, nec dignissim leo purus nec ligula. Nullam auctor metus id orci convallis, quis commodo
              odio scelerisque.
            </p>
          </div>
        </Col>
      </Container>
        </Container>
   
    
  );
};

export default Dashboard;
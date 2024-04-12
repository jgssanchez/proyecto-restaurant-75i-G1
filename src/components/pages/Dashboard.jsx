import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Button,
} from "react-bootstrap";
import React, { useState } from "react";
import logo from "../../assets/logo-sinbg.png";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleCloseNavbar = () => setShowNavbar(false);
  const handleShowNavbar = () => setShowNavbar(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container fluid className="align-items-center">
          <Button variant="primary" onClick={handleShow} className="me-auto">
            Dashboard
          </Button>

          <Navbar.Brand href="#">
            <img
              src={logo}
              width="290"
              height="50"
              className="img-fluid mx-auto"
              alt="logo"
            />
          </Navbar.Brand>
          <Button variant="primary" onClick={handleShowNavbar} className="ms-auto">
            Navbar
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showNavbar} onHide={handleCloseNavbar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add your navbar content here */}
          <Nav className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        {/* Separate Offcanvas for other content (optional) */}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{/* Add your Offcanvas content here */}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Dashboard;

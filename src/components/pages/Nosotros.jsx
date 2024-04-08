import React from "react";
import {
  Card,
  ListGroup,
  Image,
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import bannerTeam from "../../assets/pexels-team.jpg";
import cardImg from "../../assets/pexels-d.jpg";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";

const Nosotros = () => {
  return (
    <>
      <Card className="text-white">
        <Card.Img src={bannerTeam} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="display-2 text-center h-about-us">About us</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Container fluid className="my-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Quienes somos ?</Accordion.Header>
            <Accordion.Body>
              Nosotros somos un grupo diverso y motivado de estudiantes de la
              Rolling School. Nos une un interés común: ¡el fascinante mundo de
              la programación!<br></br> <strong>Más que estudiantes, somos una comunidad</strong><br></br> Como
              estudiantes de Rolling School, formamos parte de una comunidad
              dinámica y solidaria. Nos apoyamos mutuamente, compartimos
              conocimientos y aprendemos de las experiencias de los demás. Los
              instructores de la academia son expertos apasionados que nos guían
              y nos ayudan a superar desafíos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Que hacemos ?</Accordion.Header>
            <Accordion.Body>
              En Rolling School, nos dedicamos a desarrollar las habilidades y
              conocimientos necesarios para convertirnos en programadores
              competentes.<br></br> <strong>Nuestras actividades principales incluyen:</strong> 
              <ul>
                <li>Aprender
              el dominio de diferentes tecnologías: como JavaScript, HTML y CSS,
              MongoDB etc., para tener la flexibilidad de trabajar en diversos
              proyectos.</li>
                <li>Participar en proyectos: Trabajamos en proyectos
              individuales y grupales para poner en práctica nuestros
              conocimientos, desarrollar nuestra creatividad y aprender de la
              experiencia.</li>
                <li>Colaborar en equipo: Entendemos la importancia del
              trabajo en equipo y la comunicación efectiva para lograr objetivos
              comunes.</li>
                </ul>  
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center mb-2"
      >
        <Row>
          <Col>
            <Card style={{ width: "16rem" , height:"21rem"}} className="card-us">
              <Card.Header className=" bg-warning "></Card.Header>
              <Card.ImgOverlay className="mb-1">
                <Image
                  variant="top"
                  src={cardImg}
                  className="img-top position-absolute bottom-0 start-50 translate-middle-x border border-warning"
                  roundedCircle
                  thumbnail
                />
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="text-center mt-5">Maia Gutierrez</Card.Title>
                <Card.Text className="text-center">
                  <strong>Programadora</strong><br></br>Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item className="d-flex justify-content-center ">
                <BsInstagram color="fuchsia" />
                <SiGmail className="mx-3" color="red"></SiGmail>
                <BsFacebook color="blue"></BsFacebook>
                </ListGroup.Item>
                
              </ListGroup>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: "16rem" , height:"21rem"}} className="card-us">
              <Card.Header className=" bg-warning "></Card.Header>
              <Card.ImgOverlay className="mb-1">
                <Image
                  variant="top"
                  src={cardImg}
                  className="img-top position-absolute bottom-0 start-50 translate-middle-x border border-warning"
                  roundedCircle
                  thumbnail
                />
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="text-center mt-5">Maia Gutierrez</Card.Title>
                <Card.Text className="text-center">
                  <strong>Programadora</strong><br></br>Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item className="d-flex justify-content-center ">
                <BsInstagram color="fuchsia" />
                <SiGmail className="mx-3" color="red"></SiGmail>
                <BsFacebook color="blue"></BsFacebook>
                </ListGroup.Item>
                
              </ListGroup>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: "16rem" , height:"21rem"}} className="card-us">
              <Card.Header className=" bg-warning "></Card.Header>
              <Card.ImgOverlay className="mb-1">
                <Image
                  variant="top"
                  src={cardImg}
                  className="img-top position-absolute bottom-0 start-50 translate-middle-x border border-warning"
                  roundedCircle
                  thumbnail
                />
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="text-center mt-5">Maia Gutierrez</Card.Title>
                <Card.Text className="text-center">
                  <strong>Programadora</strong><br></br>Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item className="d-flex justify-content-center ">
                <BsInstagram color="fuchsia" />
                <SiGmail className="mx-3" color="red"></SiGmail>
                <BsFacebook color="blue"></BsFacebook>
                </ListGroup.Item>
                
              </ListGroup>
            </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;

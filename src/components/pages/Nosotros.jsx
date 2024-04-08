import React from 'react';
import {Card, ListGroup, Image, Accordion, Container,Row, Col} from "react-bootstrap"
import bannerTeam from "../../assets/pexels-team.jpg"
import cardImg from "../../assets/pexels-d.jpg"
const Nosotros = () => {
    return (<>
 <Card className="text-white">
      <Card.Img src={bannerTeam} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title  className="display-2 text-center">About us</Card.Title>
      </Card.ImgOverlay>
    </Card>
<Container fluid className="my-3" >
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    <Container fluid className="d-flex justify-content-center align-items-center mb-2">
    <Row>
        <Col><Card style={{ width: '18rem' }} className='card-us'>
         <Card.Header  className=" bg-warning "></Card.Header>
         <Card.ImgOverlay className="mb-1">
        <Image  variant="top" src={cardImg} className='img-top position-absolute bottom-0 start-50 translate-middle-x border border-warning'roundedCircle thumbnail/>
        </Card.ImgOverlay >
        <Card.Body >
          <Card.Title className="text-center mt-5">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
      </Col>
        <Col><Card style={{ width: '18rem' }} className='card-us'>
         <Card.Header  className=" bg-warning "></Card.Header>
         <Card.ImgOverlay className="mb-1">
        <Image  variant="top" src={cardImg} className='img-top position-absolute bottom-0 start-50 translate-middle-x border border-warning'roundedCircle thumbnail/>
        </Card.ImgOverlay >
        <Card.Body >
          <Card.Title className="text-center mt-5">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
      </Col>
        <Col><Card style={{ width: '18rem' }} className='card-us'>
         <Card.Header  className=" bg-warning "></Card.Header>
         <Card.ImgOverlay className="mb-1">
        <Image  variant="top" src={cardImg} className='img-top position-absolute bottom-0 start-50 translate-middle-x border border-warning'roundedCircle thumbnail/>
        </Card.ImgOverlay >
        <Card.Body >
          <Card.Title className="text-center mt-5">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
      </Col>
      </Row>
      </Container>
      </>
    );
};

export default Nosotros;
import { useState } from 'react'

import Logo from './assets/Icono.png';//importacion del gogo
import Slide1 from './assets/3d-ilustracion.jpg';//importacion del gogo
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
      
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              
              height="80"
              className="d-inline-block align-top"
            />{' '}
  
          </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Guia</Nav.Link>
            <Nav.Link href="#action2">Noticias</Nav.Link>
            <Nav.Link href="#action2">Agenda</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" className=''>EMPRESAS</Button>
            <Button variant="outline-success">LOGIN</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Carousel >

      <Carousel.Item>
        <img
        //TODO:debe de ser una imagen de 800 x 400
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Slider 1</h5>
          <p>Materializa conceptos Innovadores sin caos</p>
          <Button>AGENDA AHORA</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="#" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="#" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>




    </header>
      
    </>
  )
}

export default App

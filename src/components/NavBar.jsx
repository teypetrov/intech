import React from 'react'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Logo from '../assets/Icono.png'//importacion del gogo


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
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
  )
}

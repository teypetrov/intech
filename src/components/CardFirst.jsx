import Container from "react-bootstrap/esm/Container"
import '../index.css'
import Mision from "../assets/mision.gif"
import Vision from "../assets/vision.gif"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react'

export default function CardFirst() {
  return (
    <Container fluid>

        <Row className="d-flex space-between">
        <Col ><img src={Mision} alt="" /></Col>
    
        <Col><img src={Vision} alt="" /></Col>
      </Row>
    <div className="contenedor  ">
    <div className="rigth">
    </div>

    <div className="left">
        
    </div>
    </div>
    </Container>
)}

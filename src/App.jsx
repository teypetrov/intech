import { useState } from 'react'


import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar.jsx'
import CardFirst from './components/CardFirst.jsx'
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <NavBar></NavBar>
    
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
          <Button variant="outline-light">AGENDA AHORA</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    <CardFirst></CardFirst>



    </header>
      
    </>
  )
}

export default App

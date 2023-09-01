import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='position-relative vh-100'> {/* Utilizamos container-fluid */}
    
      <Carousel className="m-0 vh-100">
        <Carousel.Item interval={1000}>
          <img
            className="d-block object-fit-cover w-100 vh-100"
            src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Primera imagen"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block object-fit-cover w-100 vh-100"
            src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Segunda imagen"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block object-fit-cover w-100 vh-100"
            src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Tercera imagen"
          />
        </Carousel.Item>

      </Carousel>
      
      <div className='position-absolute top-0 start-0 m-3'>
        <img
          className="w-25"
          src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1-1.png"
          alt="tird"
        />
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Button variant="dark" size="lg">Abrir puerta</Button>
      </div>

    </div>
  );
}

export default App;

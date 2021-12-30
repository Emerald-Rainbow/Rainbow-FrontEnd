import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
  return (
    <Carousel  wrap={true} interval = {5000}>
    <Carousel.Item >
      <img
        className="d-block w-100"
        height= {500}
        src="https://www.kalfound.org/Portals/0/Uploads/Images/Misc%20Graphics/LGBTQ_web_banner.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        height= {500}
        src="https://www.kalfound.org/Portals/0/Uploads/Images/Misc%20Graphics/LGBTQ_web_banner.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.kalfound.org/Portals/0/Uploads/Images/Misc%20Graphics/LGBTQ_web_banner.png"
        height={500}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const OurStory = () => {
  return (
    <div className="ourStory" id="ourstory">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/c5/94/69/c5946979c996079097e4cc0d75e89a95.jpg"
            alt="First slide"
            height="400"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/ca/f6/88/caf68832955cd4b2fbfb8b3894c3fced.jpg"
            alt="Second slide"
            height="400"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/ca/f6/88/caf68832955cd4b2fbfb8b3894c3fced.jpg"
            alt="Third slide"
            height="400"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OurStory;

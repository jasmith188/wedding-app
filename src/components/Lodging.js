import React from 'react';
import './Lodging.css';
import { Card, Button } from 'react-bootstrap';
import Image from '../images/hotel.jpeg'

const Lodging = () => {
  return (
    <div className="lodging" id="lodging">
      <h1>Lodging Accomodations </h1>
        <img variant="top" src={Image} alt='hotel'/>
        <div>
          <p>
            25 FAIRFIELD APPROACH DR, WEAVERVILLE, NC 28787, USA (828) 645-9000
          </p>
          <p>
            <strong>Check-In</strong>: Friday, November 5, 2021 |{' '}
            <strong>Check-Out</strong>: Sunday, November 7, 2021
          </p>
          <p>
            <strong>Rate: $131</strong>
          </p>
          <p>
            The Fairfield Inn &amp; Suites hotel is a 9 minute drive from
            Emerald Ridge Farms property
          </p>
          <p>- must book room by 10/5</p>
          <a href="https://www.marriott.com/hotels/travel/avlfw-fairfield-inn-and-suites-asheville-weaverville/"><button>Link to Website</button></a>
        </div>
      
    </div>
  );
};

export default Lodging;

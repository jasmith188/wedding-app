import React from 'react';
import './Lodging.css';
import Image from '../images/hotel.jpeg';
import airBnB from '../images/airbnb.jpeg';
import vRbo from '../images/vrbo.jpeg';

const Lodging = () => {
  return (
    <div className="lodging" id="lodging">
      <h1>Lodging Accomodations </h1>
      <div>
        <img variant="top" src={Image} alt="hotel" className="lodging__image" />

        <h3>
          25 FAIRFIELD APPROACH DR, WEAVERVILLE, NC 28787, USA (828) 645-9000
        </h3>
        <br />
        <br />
        <p>
          <strong>Check-In</strong>: Friday, November 5, 2021 |{' '}
          <strong>Check-Out</strong>: Sunday, November 7, 2021
        </p>
        <p>
          <strong>Rate: $131</strong>
        </p>
        <p>
          The Fairfield Inn &amp; Suites hotel is a 9 minute drive from Emerald
          Ridge Farms property
        </p>
        <p>- must book room by 10/5</p>
        <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1617900603438&key=GRP&app=resvlink">
          <button className="lodging__button">
            Link to 'Katie and Jimmy's Hotel Block'
          </button>
        </a>
      </div>
      <br />
      <div>
        <img
          variant="top"
          src={airBnB}
          alt="airbnb"
          className="lodging__bookingImage"
        />

        <p>AIRBNB</p>
        <p>
          There are many Airbnb options near Emerald Ridge Farm -
          Asheville/Weaverville -
        </p>

        <a href="https://www.airbnb.com/">
          <button>Link to Website</button>
        </a>
      </div>
      <br />
      <div>
        <img variant="top" src={vRbo} alt="vrbo" className="lodging__bookingImage" />

        <p>
          There are plenty of Vrbo options near Emerald Ridge Farm -
          Asheville/Weaverville -
        </p>

        <a href="https://www.vrbo.com/">
          <button>Link to Website</button>
        </a>
      </div>
     
    </div>
  );
};

export default Lodging;

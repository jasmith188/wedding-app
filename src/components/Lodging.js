import React from 'react';
import './Lodging.css';
import Image from '../images/hotel.jpeg';
import Image2 from '../images/airbnb.jpeg';
import Image3 from '../images/vrbo.jpeg';


const Lodging = () => {
  return (
    <div className="lodging" id="lodging">
      <h1>Lodging Accomodations </h1>
      <div>
        <img variant="top" src={Image} alt="hotel" className='lodging__image'/>

        <h3>
                  25 FAIRFIELD APPROACH DR, WEAVERVILLE, NC 28787, USA (828) 645-9000
        </h3>
              <br />
              <br/>
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
        <a href="https://www.marriott.com/hotels/travel/avlfw-fairfield-inn-and-suites-asheville-weaverville/">
          <button>Link to Website</button>
        </a>
      </div>
      <br />
      <div>
        <img variant="top" src={Image2} alt="airbnb" />

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
        <img variant="top" src={Image3} alt="vrbo" />

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

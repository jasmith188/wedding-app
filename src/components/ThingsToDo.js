import React from 'react';
import Image from '../images/biltmore.jpeg';
import Image2 from '../images/brewery.jpeg';
import './ThingsToDo.css';

const ThingsToDo = () => {
  return (
    <div className="thingsToDo" id="thingsToDo">
      <h1>Things To Do</h1>
      <div>
        <img
          variant="top"
          src={Image}
          alt="airbnb"
          className="thingsToDo__image"
        />

        <h1>BILTMORE</h1>
        <br />
        <h3>
          1 LODGE ST, ASHEVILLE, NC 28803, USA{' '}
          <a href="tel:800-411-3812">(800) 411-3812</a>
        </h3>
        <p>
          Biltmore Estate in Asheville, N.C. George Vanderbilt's 250-room castle
          is America's Largest Home and a top attraction in Asheville. Plan a
          visit to Biltmore House, explore 8,000 acres of grounds, or book a
          behind-the-scenes tour.
        </p>
        <br />
        <a href="https://www.biltmore.com/">
          <button>Link to Website</button>
        </a>
      </div>
      <div>
        <img
          variant="top"
          src={Image2}
          alt="airbnb"
          className="thingsToDo__image"
        />

        <h1>HIGHLAND BREWING COMPANY</h1>
        <br />
        <h3>
          12 OLD CHARLOTTE HWY #200, ASHEVILLE, NC 28803, USA (828) 299-3370
        </h3>
        <p>
          One of Jimmy's favorite beers is brewed here! - Cold Mountain Winter
          Ale (seasonal) - Also try their Gaelic Ale!
        </p>
        <br />
        <a href="https://highlandbrewing.com/">
          <button>Link to Website</button>
        </a>
      </div>
      {/* <div>
        <img variant="top" src={Image2} alt="airbnb" />

        <p>AIRBNB</p>
        <p>
          There are many Airbnb options near Emerald Ridge Farm -
          Asheville/Weaverville -
        </p>

        <a href="https://www.airbnb.com/">
          <button>Link to Website</button>
        </a>
      </div> */}
    </div>
  );
};

export default ThingsToDo;

import React from 'react';
import Image from '../images/biltmore.jpeg';
import Image2 from '../images/brewery.jpeg';

const ThingsToDo = () => {
  return (
    <div className="thingsToDo" id="thingsToDo">
      <h1>Things To Do In The Area</h1>
      <div>
        <img variant="top" src={Image} alt="airbnb" />

        <p>BILTMORE</p>
        <p>1 LODGE ST, ASHEVILLE, NC 28803, USA (800) 411-3812</p>
        <p>
          Biltmore Estate in Asheville, N.C. George Vanderbilt's 250-room castle
          is America's Largest Home and a top attraction in Asheville. Plan a
          visit to Biltmore House, explore 8,000 acres of grounds, or book a
          behind-the-scenes tour.
        </p>

        <a href="https://www.biltmore.com/">
          <button>Link to Website</button>
        </a>
      </div>
      <div>
        <img variant="top" src={Image2} alt="airbnb" />

        <p>HIGHLAND BREWING COMPANY</p>
        <p>
          12 OLD CHARLOTTE HWY #200, ASHEVILLE, NC 28803, USA (828) 299-3370
        </p>
        <p>
          One of Jimmy's favorite beers is brewed here! - Cold Mountain Winter
          Ale (seasonal) - Also try Gaelic Ale
        </p>
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

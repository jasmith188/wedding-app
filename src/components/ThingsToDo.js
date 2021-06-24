import React from "react";
import Image from "../images/biltmore.jpeg";
import Image2 from "../images/brewery.jpeg";
import Image3 from "../images/wicked-weed.jpeg";
import Image4 from "../images/downtown-weaverville.jpeg";
import "./ThingsToDo.css";

const ThingsToDo = () => {
  return (
    <div className="thingsToDo" id="thingsToDo">
      <h1>
        <strong>Things To Do</strong>
      </h1>
      <div>
        <img
          variant="top"
          src={Image4}
          alt="downtown-weaverville"
          className="thingsToDo__image"
        />

        <h1>DOWNTOWN WEAVERVILLE</h1>
        <br />
        <h3>
          N MAIN ST, WEAVERVILLE, NC 28787 USA{" "}
          {/* <a href="tel:800-411-3812">(800) 411-3812</a> */}
        </h3>
        <p>
          One of the best things to do in Weaverville, NC is to explore Main
          Street and it’s cute shops and restaurants. There is on-street parking
          all along Main Street as well as a couple of parking lots
          (Weaverville’s Downtown Parking Lot is the most centrally located)
          where you can dump your vehicle for the day and explore on foot. If
          you’re able, we think walking is the best way to explore the town. In
          addition to Main Street, we also recommend a few detours off the main
          drag such as Merchants Alley, Merrimon Avenue and Florida Avenue. Two
          of our favorite shops in Weaverville are{" "}
          <a href="https://curtiswrightoutfitters.com/">
            Curtis Wright Outfitters
          </a>{" "}
          and
          <a href="https://fivemonkeyquilts.com/">
            {" "}
            Five Little Monkeys Quilt and Sew
          </a>
          .
        </p>
        <br />
        <a href="https://weavervillenc.org/working/why-weaverville/main-street-weaverville/">
          <button>Link to Website</button>
        </a>
      </div>
      <div></div>
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
          1 LODGE ST, ASHEVILLE, NC 28803, USA{" "}
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
      <div>
        <img
          variant="top"
          src={Image3}
          alt="airbnb"
          className="thingsToDo__image"
        />

        <h1>WICKED WEED BREWING PUB</h1>
        <br />
        <h3>91 BILTOMORE AVE, ASHEVILLE, NC 28801, USA (828) 575-9599</h3>
        <p>
          What a great place! (even though it got bought out by the big guys...)
          Another one of Jimmy's favorite breweries!
        </p>
        <br />
        <a href="https://www.instagram.com/wickedweedbrewing/?hl=en">
          <button>Link to Instagram Page</button>
        </a>
      </div>
    </div>
  );
};

export default ThingsToDo;

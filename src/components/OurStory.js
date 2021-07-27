import React from "react";
import Image1 from "../weddingImages/couple-smile.jpeg";
import Image2 from "../weddingImages/30bday.jpeg";
import Image3 from "../images/kandj-biltmore.JPG";
import Image4 from "../weddingImages/boatpic.jpeg";
// import Image5 from '../weddingImages/cubshat.jpeg';
import Image6 from "../weddingImages/coldpic.jpeg";
import Image7 from "../weddingImages/formalpic.jpeg";
import Image8 from "../weddingImages/formalpic2.jpeg";
import Image9 from "../weddingImages/newglarus.jpeg";
import Image10 from "../weddingImages/packergame.jpeg";
import Image11 from "../weddingImages/patiopic.jpeg";
import Image12 from "../weddingImages/ringpic.jpeg";
import Image13 from "../weddingImages/stpattys.jpeg";
import Image14 from "../weddingImages/weddingpic.jpeg";

import "./OurStory.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const OurStory = () => {
  return (
    <div className="ourStory" id="ourStory">
      <h1>
        <strong>Our Story</strong>
      </h1>
      <p className="ourStory__paragraph">
        Katie, a small town girl from Wisconsin and Jimmy, a bearded chef from
        North Carolina, met in 2013 in Hawai'i while working aboard the
        Norwegian Pride of America cruise ship. They worked in the same galley
        and were also on the same fire team where they became friends. In 2015,
        Katie and Jimmy went on their first date snorkeling at Hanauma Bay on
        the island of Oahu. May it be the Hawai'ian sun, the salt water or sting
        of the sea urchin - it was forever after that.
      </p>
      <Carousel className="ourStory__carousel">
        <div>
          <img
            className="ourStory__image"
            src={Image3}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image7}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image9}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image8}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image6}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image1}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image4}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image2}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image13}
            alt="katieandjimmypic"
          />
        </div>

        <div className="ourStory__carousel-slider">
          <img
            className="ourStory__image"
            src={Image10}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image14}
            alt="katieandjimmypic"
          />
        </div>

        <div>
          <img
            className="ourStory__image"
            src={Image11}
            alt="katieandjimmypic"
          />
        </div>
        <div>
          <img
            className="ourStory__image"
            src={Image12}
            alt="katieandjimmypic"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default OurStory;

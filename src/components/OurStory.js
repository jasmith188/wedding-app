import React from 'react';
import Image1 from '../weddingImages/couple-smile.jpeg';
import Image2 from '../weddingImages/30bday.jpeg';
// import Image3 from '../weddingImages/beachpic.jpeg';
import Image4 from '../weddingImages/boatpic.jpeg';
// import Image5 from '../weddingImages/cubshat.jpeg';
import Image6 from '../weddingImages/coldpic.jpeg';
import Image7 from '../weddingImages/formalpic.jpeg';
import Image8 from '../weddingImages/formalpic2.jpeg';
import Image9 from '../weddingImages/newglarus.jpeg';
import Image10 from '../weddingImages/packergame.jpeg';
import Image11 from '../weddingImages/patiopic.jpeg';
import Image12 from '../weddingImages/ringpic.jpeg';
import Image13 from '../weddingImages/stpattys.jpeg';
import Image14 from '../weddingImages/weddingpic.jpeg';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="ourStory" id="ourStory">
      <h1>Our Story</h1>
      <p>
        Jimmy and Katie met in 2013 while working aboard the Pride of America in
        Hawai'i. Their first 'official' date was snorkeling at Hanuma Bay on the
        big island of O'ahu - it was forever after that.
      </p>
      <div>
        <img className="ourStory__image"  src={Image1} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image2} alt="" />
      </div>
      {/* <div>
        <img className="ourStory__image" src={Image3} alt="" />
      </div> */}
      <div>
        <img className="ourStory__image" src={Image4} alt="" />
      </div>
      {/* <div>
        <img className="ourStory__image" src={Image5} alt="" />
      </div> */}
      <div>
        <img className="ourStory__image" src={Image6} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image7} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image8} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image9} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image10} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image11} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image12} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image13} alt="" />
      </div>
      <div>
        <img className="ourStory__image" src={Image14} alt="" />
      </div>
    </div>
  );
};

export default OurStory;

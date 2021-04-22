import React from 'react';
import './WeddingParty.css';
import jenPic from '../weddingImages/jen.jpg';
import lizPic from '../weddingImages/liz.jpg';
import sirayaPic from '../weddingImages/siraya.jpg';
import baileyPic from '../weddingImages/bailey.jpg';
import reneePic from '../weddingImages/renee.jpg';
import bridgetPic from '../weddingImages/bridget.jpg';

const WeddingParty = () => {
  return (
    <div className="weddingParty" id="wedding">
      <h1>Wedding Party</h1>
      <br />
      <br />
      <h2 className="weddingParty__title">Bride's Side</h2>
      <div className="weddingParty__card">
        <img src={jenPic} alt="girl emoji" className="weddingParty__image" />
        <h1 className="weddingParty__name">Jennifer Garrett - Maid of Honor</h1>
        <br />
        <p>
          Jennifer and Katie met in Chicago while working at Mars in 2017. As
          her best friend, it was only fitting to have Jennifer stand up next to
          Katie as her Maid of Honor.
        </p>
      </div>
      <br />
      <div className="weddingParty__card">
        <img src={sirayaPic} alt="girl emoji" className="weddingParty__image" />
        <h1 className="weddingParty__name">Siraya Schleis - Bridesmaid</h1>
        <br />
        <p>
          Siraya is the sister of the bride and Katie wanted nothing more than
          to have her by her side when she marries Jimmy. Siraya worked on the
          cruise ship with Jimmy and Katie – so she has been there since the
          very beginning!
        </p>
      </div>
      <br />
      <div className="weddingParty__card">
        <img src={lizPic} alt="girl emoji" className="weddingParty__image" />
        <h1 className="weddingParty__name">Liz Jasurda-Love – Bridesmaid</h1>
        <br />
        <p>
          Liz (a kindred heart from Wisconsin) met Katie and Jimmy while working
          on the cruise ship in Hawai’i in 2013. Having her with us to share the
          day was an easy choice.
        </p>
      </div>
      <br />
      <div className="weddingParty__card">
        <img src={baileyPic} alt="girl emoji" className="weddingParty__image" />
        <h1 className="weddingParty__name">Bailey Smith – Bridesmaid</h1>
        <br />
        <p>
          Bailey and Katie met in Chicago in 2019, only a couple months before
          Katie and Jimmy moved to Florida. She quickly became a close friend
          (and cherished cousin 😉) and there was no question to have her a part
          of the day.
        </p>
      </div>
      <div className="weddingParty__card">
        <img src={reneePic} alt="girl emoji" className="weddingParty__image" />
        <h1 className="weddingParty__name">Renee DuBois – Attendant</h1>
        <br />
        <p>
          Renee and Katie met in Florida after matching on the Bumble BFF app in
          2019! Their ‘first date’ was a success and they have been awesome
          friends ever since.
        </p>
      </div>
      <div className="weddingParty__card">
        <img src={bridgetPic} alt="girl emoji" className="weddingParty__image" />
        <h1 className="weddingParty__name">Bridget Crawford – Attendant</h1>
        <br />
        <p>
          Bridget and Katie met in Florida via the Bumble BFF app in 2019 –
          their ‘first date’ was a wine walk which solidified their wonderful
          friendship!
        </p>
      </div>
      <h1>Groom's Side</h1>
      <div className="weddingParty__card">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/boy_light-skin-tone_1f466-1f3fb_1f3fb.png"
          alt="girl emoji"
          className="weddingParty__image"
        />
        <h1 className="weddingParty__name">Justin Merod</h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          maxime ut, eos in corrupti voluptas nostrum tempora obcaecati
          accusantium quo! Dolorem dolorum distinctio et temporibus corporis?
          Earum debitis ad animi.
        </p>
      </div>
      <br />
      <div className="weddingParty__card">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/boy_light-skin-tone_1f466-1f3fb_1f3fb.png"
          alt="girl emoji"
          className="weddingParty__image"
        />
        <h1 className="weddingParty__name">Mike Dubois</h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          maxime ut, eos in corrupti voluptas nostrum tempora obcaecati
          accusantium quo! Dolorem dolorum distinctio et temporibus corporis?
          Earum debitis ad animi.
        </p>
      </div>
      <br />
      <div className="weddingParty__card">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/boy_light-skin-tone_1f466-1f3fb_1f3fb.png"
          alt="girl emoji"
          className="weddingParty__image"
        />
        <h1 className="weddingParty__name">Gabe Schuman</h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          maxime ut, eos in corrupti voluptas nostrum tempora obcaecati
          accusantium quo! Dolorem dolorum distinctio et temporibus corporis?
          Earum debitis ad animi.
        </p>
      </div>
      <br />
      <div className="weddingParty__card">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/boy_light-skin-tone_1f466-1f3fb_1f3fb.png"
          alt="girl emoji"
          className="weddingParty__image"
        />
        <h1 className="weddingParty__name">Nick Schubert</h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          maxime ut, eos in corrupti voluptas nostrum tempora obcaecati
          accusantium quo! Dolorem dolorum distinctio et temporibus corporis?
          Earum debitis ad animi.
        </p>
      </div>
    </div>
  );
};

export default WeddingParty;

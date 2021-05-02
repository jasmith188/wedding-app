import React from 'react';
import './WeddingParty.css';
import jenPic from '../weddingImages/jen.jpg';
import lizPic from '../weddingImages/liz.jpg';
import sirayaPic from '../weddingImages/siraya.jpg';
import baileyPic from '../weddingImages/bailey.jpg';
import reneePic from '../weddingImages/renee.jpeg';
import bridgetPic from '../weddingImages/bridget.jpeg';
import justinPic from '../weddingImages/justin.jpg';
import nickPic from '../weddingImages/nick.jpg';
import mikePic from '../weddingImages/mike.jpg';
import gabePic from '../weddingImages/gabe.jpg';

const WeddingParty = () => {
  return (
    <div className="weddingParty" id="wedding">
      <h1>Wedding Party</h1>
      <div className="weddingParty__brides">
        <h2 className="weddingParty__title">
          <strong>Bride's Side</strong>
        </h2>

        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={jenPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">
                Jennifer Garrett - Maid of Honor
              </h1>

              <p>
                Jennifer and Katie met in Chicago while working at Mars in 2017.
                As her best friend, it was only fitting to have Jennifer stand
                up next to Katie as her Maid of Honor.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="weddingParty__card">
              <img
                src={sirayaPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">
                Siraya Schleis - Bridesmaid
              </h1>

              <p>
                Siraya is the brides sister and Katie wanted nothing more than
                to have her by her side when she marries Jimmy. Siraya worked on
                the cruise ship with Jimmy and Katie – so she has been there
                since the very beginning!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={lizPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">
                Liz Jasurda-Love – Bridesmaid
              </h1>
              <br />
              <p>
                Liz (a kindred heart from Wisconsin) met Katie and Jimmy while
                working on the cruise ship in Hawai’i in 2013. Having her with
                us to share the day was an easy choice.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={baileyPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Bailey Smith – Bridesmaid</h1>
              <br />
              <p>
                Bailey and Katie met in Chicago in 2019, only a couple months
                before Katie and Jimmy moved to Florida. She quickly became a
                close friend (and cherished cousin 😉) and there was no question
                to have her a part of the day.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={reneePic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Renee DuBois – Attendant</h1>
              <br />
              <p>
                Renee and Katie met in Florida after matching on the Bumble BFF
                app in 2019! Their ‘first date’ was a success and they have been
                awesome friends ever since.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={bridgetPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">
                Bridget Crawford – Attendant
              </h1>
              <br />
              <p>
                Bridget and Katie met in Florida via the Bumble BFF app in 2019
                – their ‘first date’ was a wine walk which solidified their
                wonderful friendship!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="weddingParty__grooms">
        <h2 className="weddingParty__title">
          <strong>Groom's Side</strong>
        </h2>

        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={justinPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Justin Merod - Best Man</h1>
              <br />
              <p>
                Justin is the groom’s cousin and Jimmy couldn’t have asked for a
                better man to stand next to him on his wedding day.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={mikePic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Mike Dubois - Groomsman</h1>
              <br />
              <p>
                Mike is a friend of the groom. They go way back. Jimmy knew Mike
                would be there to support him on his big day.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={nickPic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Nick Schubert - Groomsman</h1>
              <br />
              <p>
                Nick is the brother of the groom. Jimmy knew he’d want his only
                brother to be there with him when he says I Do.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={gabePic}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Gabe Shuman - Groomsman</h1>
              <br />
              <p>
                Gabe is a friend of the groom – the choice was easy to have Gabe
                standing with Jimmy during his wedding. He was his his first
                friend he met when he moved to North Carolina.
              </p>
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default WeddingParty;

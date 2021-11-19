import React from 'react';
import './WeddingParty.css';

import maleAvatar from '../images/male-avatar.jpg';
import femaleAvatar from '../images/female-avatar.png';

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
                src={femaleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">
                Rose Castaneda - Maid of Honor
              </h1>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                repellendus saepe maiores ad consectetur commodi molestiae
                debitis maxime perferendis, accusantium, aspernatur nostrum.
                Tempora distinctio facilis rem perferendis placeat, ducimus
                exercitationem.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="weddingParty__card">
              <img
                src={femaleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Julie Spence - Bridesmaid</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                in impedit totam quas inventore. Facere libero harum impedit
                ratione officiis sit voluptates a consequatur placeat molestiae,
                delectus explicabo provident nisi.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={femaleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Joyce Forbes – Bridesmaid</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                aperiam vitae fuga non, id sequi veritatis pariatur obcaecati
                voluptates magni ab est ex, voluptate voluptatum quas maxime
                doloremque omnis. Non.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={femaleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Octavia Huynh – Bridesmaid</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                exercitationem quia enim maiores nesciunt, maxime minima
                molestias? Labore expedita dicta quae excepturi quo optio
                provident nostrum assumenda. Consequatur, magni in.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={femaleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Giulia Bowes – Attendant</h1>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis, quas. Consectetur aliquid eligendi quibusdam
                repudiandae ratione velit, molestias ullam, accusamus quas,
                veritatis harum commodi natus enim? Sint consequatur eaque
                ipsam!
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={femaleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Caitlan Mccann – Attendant</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus nihil, esse debitis pariatur corrupti cumque. Quas
                maxime incidunt adipisci delectus, ratione odio voluptas
                laudantium fugiat repudiandae magni nisi perferendis. Et?
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
                src={maleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Patrik Rubio - Best Man</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, vero blanditiis. Exercitationem error, ab quod eos
                laboriosam quidem nobis esse maxime et. Dicta voluptate sunt
                quos neque nam mollitia officia.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={maleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Issac Lowry - Groomsman</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                necessitatibus quod similique vero perspiciatis, iusto suscipit
                sapiente? Dolor aperiam quia labore, magni eligendi consequuntur
                quod, delectus quo qui asperiores deserunt?
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={maleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Josh Wallis - Groomsman</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                enim, quae totam nobis esse recusandae! Neque nobis praesentium
                exercitationem id explicabo voluptatibus error debitis commodi
                corporis, doloribus numquam repellendus earum?
              </p>
            </div>
          </div>
          <div className="column">
            <div className="weddingParty__card">
              <img
                src={maleAvatar}
                alt="girl emoji"
                className="weddingParty__image"
              />
              <h1 className="weddingParty__name">Jarrod Carter - Groomsman</h1>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum dolor a, voluptatem tenetur cum, earum minus doloremque
                fugit, fugiat asperiores facilis eveniet rem corporis!
                Recusandae incidunt veritatis tempora aliquam aspernatur.
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

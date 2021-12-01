import React from 'react';
import './MainInfo.css';
import './RSVP.css';

const MainInfo = () => {
  return (
    <div className="mainInfo" id="home">
      <div>
        <div className="mainInfo__nameTitle">L & R</div>
      </div>

      <h3 className="banner__h3">June 20, 2022 • Weaverville, NC</h3>
      <p>
        <div>
          <a href="https://www.emeraldridgenc.com/" title="Emerald Ridge Farm">
            <strong className="mainInfo__map">
              <u>Emerald Ridge Farm</u>
            </strong>
          </a>
        </div>
        <br />
        <div>
          <a
            href="https://showtheway.io/to/35.726865,-82.586953?name=161%20Greenridge%20Rd"
            title="Show the Way to 161 Greenridge Rd with your favorite navigation application"
          >
            <strong className="mainInfo__map">
              <u>161 Green Ridge Road, Weaverville, NC, 28787</u>
            </strong>
          </a>
        </div>
        <br />
        <br />
        <strong>
          We look forward to having you with us to celebrate our new adventure!
        </strong>
      </p>
      <br />
    </div>
  );
};

export default MainInfo;

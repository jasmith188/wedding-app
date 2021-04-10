import React from 'react';
import './MainInfo.css';

const MainInfo = () => {
  return (
    <div className="mainInfo">
      <h1 className="mainInfo__nameTitle">Katie and Jimmy</h1>
      {/* {timerComponents.length ? (
              timerComponents
            ) : (
              <span>Time's up!</span>
            )}{' '}
            DAYS TO GO! */}

      <h3 className="banner__h3">
        NOVEMBER 6, 2021 • WEAVERVILLE, NC
        {/* {description} */}
      </h3>
      <hr />
      {/* <ul className="social">
            <a href="tel:715-219-3199">Katie's Cell</a>
            <br />
            <a href="tel:704-909-8461">Jimmy's Cell</a>
          </ul> */}
      <p>
        Emerald Ridge Farm
        <br />
        161 Green Ridge Road, Weaverville, NC, 28787
        <br />
        <br />
        We look forward to having you with us to celebrate our new adventure!
      </p>
      <h1 className="mainInfo__initials">K &amp;J</h1>
      <hr />
      <p className='mainInfo__date'>11.6.2021</p>
    </div>
  );
};

export default MainInfo;

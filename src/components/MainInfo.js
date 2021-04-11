import React, { useState, useEffect } from 'react';
import './MainInfo.css';

const MainInfo = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-6`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        '': Math.floor(difference / (1000 * 60 * 60 * 24)),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  return (
    <div className="mainInfo">
      <h1 className="mainInfo__nameTitle">Katie and Jimmy</h1>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>} DAYS
      TO GO!
      <h3 className="banner__h3">
        NOVEMBER 6, 2021 • WEAVERVILLE, NC
        {/* {description} */}
      </h3>
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
    </div>
  );
};

export default MainInfo;

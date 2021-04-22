import React from 'react';
import './MainInfo.css';
import Countdown from 'react-countdown';

const MainInfo = ({ days, hours, minutes}) => {
 
  const renderer = ({ days,  completed }) => {
    if (completed) {
      // Render a completed state
      return  'Todays the big day!!!';
    } else {
      // Render a countdown
      return <span className='mainInfo__countdown'>{days} more days<br/><p> until the big day!</p></span>;
    }
  };

  
  return (
    <div className="mainInfo" id='home'>
      <h1 className="mainInfo__nameTitle">Katie and Jimmy</h1>
      <Countdown
    date={new Date('2021/11/06 00:00:00')}
    renderer={renderer}
  />
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

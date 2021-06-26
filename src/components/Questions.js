import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions" id="questions">
      <h1>
        <strong>Questions and Answers</strong>
      </h1>
      <h3>
        <strong>
          <u>WHAT ABOUT COVID?</u>
        </strong>
      </h3>

      <p>
        Emerald Ridge Farm is a 33 acre property that we have for the entire
        weekend. There is plenty of space to spread out and the buildings are
        set for a indoor/outdoor flow to keep the air fresh and free. The staff
        are all fully vaccinated and take the proper measures to deep clean the
        property before and after each event. We would love for you to join in
        celebrating, but understand if there are reservations.
      </p>
      <br />
      <h3>
        <strong>
          <u>WHAT AIRPORT SHOULD I FLY INTO?</u>
        </strong>
      </h3>
      <p>
        <ol>
          <h4>There are a few options:</h4>
          <li>Asheville (AVL) - 11 miles from downtown</li>
          <li>Charlotte (CLT) - 95 miles from downtown</li>
          <li>Greenville/Spartanburg (GSP) - 53 miles from downtown</li>
          <li>Knoxville (TYS) - 82 miles from downtown</li>
        </ol>
      </p>
      <br />
      <h3>
        <strong>
          <u>WHAT IS THE ATTIRE?</u>
        </strong>
      </h3>
      <p>
        Semi-formal - suggested to bring a light jacket or sweater as the
        temperature may drop at night.
      </p>
      <br />
      <h3>
        <strong>
          <u>IS THERE PARKING AT THE VENUE?</u>
        </strong>
      </h3>
      <p>
        Yes! There is parking for up to 50 vehicles at the venue. Uber and Lyft
        reach the area, so we suggest either utilizing one of those services or
        car pooling to ensure we have enough space for everyone.
      </p>
    </div>
  );
};

export default Questions;

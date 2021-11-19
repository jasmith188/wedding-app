import React from 'react';
import './MainInfo.css';
import './RSVP.css';
// import Countdown from 'react-countdown';
// import { useForm, ValidationError } from '@formspree/react';
// import axios from 'axios';

// const url = `https://randomuser.me/api`;

const MainInfo = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const resp = await fetch(url);
  //     const users = await resp.json();
  //     setUsers(users.results);
  //     console.log(users.results);
  //   };
  //   fetchUserData();
  // }, []);

  // const renderer = ({ days, completed }) => {
  //   if (completed) {
  //     // Render a completed state
  //     return 'Todays the big day!!!';
  //   } else {
  //     // Render a countdown
  //     return (
  //       <span className="mainInfo__countdown">
  //         <strong>{days}</strong> days to go!
  //         <br />
  //       </span>
  //     );
  //   }
  // };

  return (
    <div className="mainInfo" id="home">
      {/* {users.map((user) => {
        const {
          gender,
          name: { title, first, last },
          location: {
            street: { number, name },
            city,
            state,
            country,
            postcode,
          },
          email,
          login: { uuid, username },
        } = user;
        return (
          <div key={uuid}>
            <h3>
              {title}. {first} {last} & {title}. {first} {last}
            </h3>
          </div>
        );
      })} */}
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

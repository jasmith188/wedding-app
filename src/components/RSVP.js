import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = () => {
    window.open(
      `mailto:pughkv05@gmail.com?subject=${encodeURIComponent(
        numberOfGuests
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <div id="rsvp" className="rsvp">
      <form onSubmit={submitForm}>
        <fieldset>
          <div>
            <label htmlFor="rsvpName">
              Guest Name(s) <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              value={name}
              size="35"
              id="rsvpName"
              name="rsvpName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rsvpNumberOfGuests">Number of Guests </label>
            <input
              type="text"
              defaultValue=""
              value={numberOfGuests}
              size="35"
              id="rsvpNumberOfGuests"
              name="rsvpNumberOfGuests"
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rsvpEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              value={email}
              size="35"
              id="rsvpEmail"
              name="rsvpEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rsvpMessage">
              Message <span className="required">*</span>
            </label>
            <textarea
              cols="50"
              rows="15"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="rsvpMessage"
              name="rsvpMessage"
            ></textarea>
          </div>

          <div>
            <button onClick={submitForm} type="submit" className="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>

      <div id="message-warning"> Error boy</div>
      <div id="message-success">
        <i className="fa fa-check"></i>Your message was sent, thank you!
        <br />
      </div>
    </div>
  );
};

export default RSVP;

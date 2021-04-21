import React from 'react';
import './RSVP2.css';
import { useForm, ValidationError } from '@formspree/react';

const RSVP = () => {
  const [state, handleSubmit] = useForm('mwkapeze');
  if (state.succeeded) {
    return <p>Thanks for your RSVP! We can't wait to see you there!</p>;
  }
  return (
    <div className="rsvp" id="rsvp">
      {/* <div className="rsvp__container">
        <h1>
          <u>RSVP</u>
        </h1>
        <form className="rsvp__form" onSubmit={handleSubmit}>
          <label className="rsvp__label">
            Name of Guest(s):
            <input type="text" name="Guest(s) Name" required />
          </label>

          <label className="rsvp__label" type="number" name="number" required>
            Number of Guest(s):
            <select name="Number of Guests" id="guests">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <ValidationError
                prefix="guests"
                field="guests"
                errors={state.errors}
              />
            </select>
          </label>

          <label className="rsvp__label" htmlFor="email">
            Email Address
            <input id="email" type="email" name="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>

          <label className="rsvp__label" htmlFor="message">
            Message
            <textarea id="message" name="Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>

          <button
            className="rsvp__button"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div> */}

      <div className="top"></div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>RSVP</h1>
        <h2>for the wedding of</h2>
        <h1>Katie & Jimmy</h1>
        <p className="line">________________________________________</p>
        <h2>The Details</h2>
        <p>Saturday, November 11, 2021</p>
        <p>5:00 PM</p>
        <br />
        <h2>Ceremony & Reception</h2>
        <p>Chapel of Our Saviour</p>
        <p>8 4th St, Colorado Springs, CO 80906</p>
        <p className="line">________________________________________</p>
        <label className="rsvp__label">
          <pre>Name of Guest(s): </pre>
          <input type="text" name="Guest(s) Name" required />
        </label>

        <label className="rsvp__label" type="number" name="number" required>
          <pre>Number of Guest(s): </pre>
          <select name="Number of Guests" id="guests">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <ValidationError
              prefix="guests"
              field="guests"
              errors={state.errors}
            />
          </select>
        </label>

        <label className="rsvp__label" htmlFor="email">
          <pre>Email Address: </pre>
          <input id="email" type="email" name="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label className="rsvp__label" htmlFor="message">
          <pre>Message: </pre>
          <textarea id="message" name="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        {/* <button className ="accept">Accept</button> */}

        <button className="button">Accept</button>
        <button className="button">Regret</button>
      </form>
    </div>
  );
};

export default RSVP;

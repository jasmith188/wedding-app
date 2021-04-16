import React from 'react';
import './RSVP.css';
import { useForm, ValidationError } from '@formspree/react';

const RSVP = () => {
  const [state, handleSubmit] = useForm('mwkapeze');
  if (state.succeeded) {
    return <p>Thanks for your RSVP! We can't wait to see you there!</p>;
  }
  return (
    <div className="rsvp" id="rsvp">
      <div className="rsvp__container">
        <h1>RSVP</h1>
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

          <button className='rsvp__button' type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVP;

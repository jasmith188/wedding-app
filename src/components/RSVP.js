import React from 'react';
import './RSVP.css';
import { useForm, ValidationError } from '@formspree/react';

const RSVP = () => {
  const [state, handleSubmit] = useForm('mwkapeze');
  if (state.succeeded) {
    return <p>Thanks for your RSVP! We can't wait to see you there!</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name of Guest(s): </label>
        <input type="text" name="Guest(s) Name" required />
        <br />
        <label>Number of Guest(s): </label>
        <label type="number" name="number" required></label>
        <select name="Number of Guests" id="guests">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <ValidationError prefix="guests" field="guests" errors={state.errors} />
        </select>
        <br />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <textarea id="message" name="Message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      {/* <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label type="text" name="name" htmlFor="name">
            Name of Guest(s)
          </Form.Label>
          <Form.Control type="text" placeholder="Guest Full Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Number of Guest(s)</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button variant="primary" type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </Form> */}
    </div>
  );
};

export default RSVP;

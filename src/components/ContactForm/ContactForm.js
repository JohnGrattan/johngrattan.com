import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

const ContactForm = ({ formname }) => {
  return (
    <Form
      name={formname}
      method="POST"
      data-netlify="true"
      className="border rounded shadow p-5 bg-texture-2"
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Business Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formService">
          <Form.Label>Service of Interest</Form.Label>
          <Form.Control as="select" required>
            <option value="" disabled defaultValue hidden>
              Choose One...
            </option>
            <option value="0">Package 1: Website Only</option>
            <option value="1">Package 2: Website + SEO</option>
            <option value="2">Package 3: Website + SEO + SEM</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formIndustry">
          <Form.Label>Industry</Form.Label>
          <Form.Control as="select" required>
            <option value="" disabled defaultValue hidden>
              Choose One...
            </option>
            <option value="0">Home Services</option>
            <option value="1">Medical</option>
            <option value="2">Legal</option>
            <option value="3">Retail</option>
            <option value="4">Restaurant</option>
            <option value="5">Education</option>
            <option value="6">Small Business</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Text className="text-danger small mb-3">
        * All form fields are required and must be completed.
      </Form.Text>
      <Form.Text className="text-muted small mb-3">
        Your information will never be shared with anyone else.
      </Form.Text>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

Form.defaultProps = {
  formname: `contact-form`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default ContactForm;

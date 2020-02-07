import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

const FormContact = ({ formname }) => {
  return (
    <Form
      name={formname}
      method="POST"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="border border-secondary rounded shadow p-2 p-md-5 bg-texture-2"
    >
      <input type="hidden" name="form-name" value={formname} />
      <Form.Row>
        <Form.Group as={Col} controlId="formContactFirstName">
          <Form.Label>
            First Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactLastName">
          <Form.Label>
            Last Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formContactPhone">
          <Form.Label>
            Phone Number <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="tel" />
        </Form.Group>
        <Form.Group as={Col} controlId="formContactEmail">
          <Form.Label>
            Business Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formContactCompanyName">
          <Form.Label>
            Company <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactJobTitle">
          <Form.Label>
            Job Title <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formContactService">
          <Form.Label>
            Service of Interest <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control as="select" defaultValue={''} required>
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="0">Package 1: Website Only</option>
            <option value="1">Package 2: Website + SEO</option>
            <option value="2">Package 3: Website + SEO + SEM</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formContactIndustry">
          <Form.Label>
            Business Industry <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control as="select" defaultValue={''} required>
            <option value="" disabled hidden>
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

      <Form.Text className="text-danger small mb-3">* Required</Form.Text>
      <Form.Text className="text-muted small mb-3">
        Your information will never be shared with anyone else.
      </Form.Text>

      <Button className="drop-shadow-dark" variant="primary" type="submit">
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

export default FormContact;

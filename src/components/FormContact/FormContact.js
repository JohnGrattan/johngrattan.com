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
      id="footer-contact-form"
    >
      <input type="hidden" name="form-name" value={formname} />
      <Form.Row>
        <Form.Group as={Col} controlId="formContactFirstName">
          <Form.Label>
            First Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="firstName" type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactLastName">
          <Form.Label>
            Last Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="lastName" type="text" required />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formContactPhone">
          <Form.Label>
            Phone Number <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="phoneNumber" type="tel" />
        </Form.Group>
        <Form.Group as={Col} controlId="formContactEmail">
          <Form.Label>
            Business Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="email" type="email" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formContactCompanyName">
          <Form.Label>
            Company <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="company" type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactJobTitle">
          <Form.Label>
            Job Title <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="jobTitle" type="text" required />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formContactService">
          <Form.Label>
            Service of Interest <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="service" as="select" defaultValue={''} required>
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="0">Site Audit</option>
            <option value="1">One-Time SEO</option>
            <option value="2">Local SEO</option>
            <option value="3">Organic SEO</option>
            <option value="4">Full-Service SEO</option>
            <option value="5">Website Design & Development</option>
            <option value="6">Pay-Per-Click (PPC)</option>
            <option value="7">Social Media Marketing</option>
            <option value="8">Email Marketing</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formContactIndustry">
          <Form.Label>
            Business Industry <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control name="industry" as="select" defaultValue={''} required>
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="0">Home Services</option>
            <option value="1">Real Estate</option>
            <option value="2">Legal</option>
            <option value="3">Medical</option>
            <option value="4">Retail</option>
            <option value="5">Restaurant</option>
            <option value="6">Education</option>
            <option value="7">Non-profit</option>
            <option value="8">Other</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Text className="text-danger small mb-3">* Required</Form.Text>
      <Form.Text className="text-muted small mb-3">
        Your information will never be shared with anyone else.
      </Form.Text>

      <Button
        className="btn btn-primary btn-xl drop-shadow-dark font-weight-bold mt-3"
        variant="primary"
        type="submit"
      >
        Get More Leads
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

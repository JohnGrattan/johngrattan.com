import React, { useState } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';

const FormContactBitrix = ({ formname }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    company: '',
    jobTitle: '',
    service: '',
    budget: '',
  });

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    company,
    jobTitle,
    service,
    budget,
  } = contact;

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(
      'https://b24-u57qin.bitrix24.com/rest/1/mtja2mf3e2o0r6s9/crm.lead.add',
      {
        data: {
          fields: {
            TITLE: { firstName } + { lastName },
            NAME: { firstName } + { lastName },
            SECOND_NAME: { lastName },
            PHONE: { phoneNumber },
            EMAIL: { email },
            COMPANY_TITLE: { company },
            POSITION: { jobTitle },
          },
        },
      }
    );
  };

  return (
    <Form
      name={formname}
      method="POST"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="border border-secondary rounded shadow p-2 p-md-5 bg-texture-2"
      id="footer-contact-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formname} />
      <Form.Row>
        <Form.Group as={Col} controlId="formContactBixtrixFirstName">
          <Form.Label>
            First Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactBixtrixLastName">
          <Form.Label>
            Last Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formContactBixtrixPhone">
          <Form.Label>
            Phone Number <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formContactBixtrixEmail">
          <Form.Label>
            Business Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formContactBixtrixCompanyName">
          <Form.Label>
            Company <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="company"
            type="text"
            value={company}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactBixtrixJobTitle">
          <Form.Label>
            Job Title <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="jobTitle"
            type="text"
            value={jobTitle}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formContactBixtrixService">
          <Form.Label>
            Service of Interest <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="service"
            as="select"
            // defaultValue={''}
            value={service}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="0">SEO Site Audit</option>
            <option value="1" className="bg-light">
              Full-Service SEO
            </option>
            <option value="2">Build New Website</option>
            <option value="3" className="bg-light">
              Redesign Website
            </option>
            <option value="4">Pay-Per-Click Ads (PPC)</option>
            <option value="5" className="bg-light">
              Social Media Marketing
            </option>
            <option value="6">Email Marketing</option>
            <option value="7" className="bg-light">
              SEO + Website + Marketing
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formContactBixtrixIndustry">
          <Form.Label>
            Budget <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="budget"
            as="select"
            // defaultValue={''}
            value={budget}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="0">$500 - $1,000</option>
            <option value="1" className="bg-light">
              $1,000 - $2,000
            </option>
            <option value="2">$2,000 - $5,000</option>
            <option value="3" className="bg-light">
              $5,000 - $10,000
            </option>
            <option value="4">$10,000+</option>
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
        value="Submit"
      >
        Get More Leads
      </Button>
    </Form>
  );
};

Form.defaultProps = {
  formname: `contact-form-bitrix`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormContactBitrix;

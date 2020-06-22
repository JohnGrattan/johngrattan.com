import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';

const FormContactSheets = () => {
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
    await axios.all([
      axios.post(
        'https://www.script.google.com/macros/s/AKfycbzoXD8zaE7kbfrVTWT-_yXjwz5S44e6MQLuEzgPNLgbcvfsDf0/exec',
        {
          data: {
            firstName: { firstName },
            lastName: { lastName },
            phoneNumber: { phoneNumber },
            email: { email },
            company: { company },
            jobTitle: { jobTitle },
            service: { budget },
            budget: { budget },
          },
        }
      ),
    ]);
    navigate('/thanks/');
  };

  return (
    <Form
      name="form-contact-homepage"
      method="POST"
      // action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="border border-secondary rounded shadow p-2 p-md-5 bg-texture-2"
      id="form-contact-homepage"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="form-contact-homepage" />
      <Form.Row>
        <Form.Group as={Col} controlId="formContactSheetsFirstName">
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
        <Form.Group as={Col} controlId="formContactSheetsLastName">
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
        <Form.Group as={Col} controlId="formContactSheetsPhone">
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
        <Form.Group as={Col} controlId="formContactSheetsEmail">
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
        <Form.Group as={Col} controlId="formContactSheetsCompanyName">
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
        <Form.Group as={Col} controlId="formContactSheetsJobTitle">
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
        <Form.Group as={Col} controlId="formContactSheetsService">
          <Form.Label>
            Service of Interest <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="service"
            as="select"
            value={service}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="SEO: Site Audit">SEO: Site Audit</option>
            <option value="SEO: Full-Service" className="bg-light">
              SEO: Full-Service
            </option>
            <option value="Website: New Build">Website: New Build</option>
            <option value="Website: Redesign" className="bg-light">
              Website: Redesign
            </option>
            <option value="Marketing: PPC Ads">Marketing: PPC Ads</option>
            <option value="Marketing: Social Media" className="bg-light">
              Marketing: Social Media
            </option>
            <option value="Marketing: Email Automation">
              Marketing: Email Automation
            </option>
            <option value="SEO + Website + Marketing" className="bg-light">
              SEO + Website + Marketing
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formContactSheetsIndustry">
          <Form.Label>
            Budget <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="budget"
            as="select"
            value={budget}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Choose One...
            </option>
            <option value="500.00">$500 - $1,000</option>
            <option value="1000.00" className="bg-light">
              $1,000 - $2,000
            </option>
            <option value="2000.00">$2,000 - $5,000</option>
            <option value="5000.00" className="bg-light">
              $5,000 - $10,000
            </option>
            <option value="10000.00">$10,000+</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Text className="text-danger small mb-3">* Required</Form.Text>
      <Form.Text className="text-muted small mb-3">
        Your information will never be shared with anyone else.
      </Form.Text>
      <div className="text-center">
        <Button
          className="btn btn-primary btn-xl drop-shadow-dark font-weight-bold mt-4"
          variant="primary"
          type="submit"
          value="Submit"
        >
          Get More Leads
        </Button>
      </div>
    </Form>
  );
};

Form.defaultProps = {
  formname: `form-contact-homepage`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormContactSheets;

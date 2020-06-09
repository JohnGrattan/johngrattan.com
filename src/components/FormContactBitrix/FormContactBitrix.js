import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';

const FormContactBitrix = () => {
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
        'https://b24-u57qin.bitrix24.com/rest/1/mtja2mf3e2o0r6s9/crm.lead.add',
        {
          fields: {
            TITLE: `${company} - ${service}`,
            NAME: `${firstName}`,
            LAST_NAME: `${lastName}`,
            SECOND_NAME: `${firstName}`,
            PHONE: [{ VALUE: `${phoneNumber}`, VALUE_TYPE: 'WORK' }],
            EMAIL: [{ VALUE: `${email}`, VALUE_TYPE: 'WORK' }],
            COMPANY_TITLE: `${company}`,
            POST: `${jobTitle}`,
            CURRENCY_ID: 'USD',
            OPPORTUNITY: `${budget}`,
            COMMENTS: `
            This lead came from my contact form.<br/><br/>
            <strong>Name</strong>: ${firstName} ${lastName}<br/>
            <strong>Phone</strong>: ${phoneNumber}<br/>
            <strong>Email</strong>: ${email}<br/>
            <strong>Company</strong>: ${company}<br/>
            <strong>Job Title</strong>: ${jobTitle}<br/>
            <strong>Service</strong>: ${service}<br/>
            <strong>Budget</strong>: ${budget}<br/><br/><br/>
            <strong>Budget Ranges</strong>:<br/><br/>
            $500 - $1,000<br/>
            $1,000 - $2,000<br/>
            $2,000 - $5,000<br/>
            $5,000 - $10,000<br/>
            $10,000+<br/>
            `,
          },
        }
      ),
    ]);
    navigate('/thanks/');
  };

  return (
    <Form
      name="form-contact-bitrix"
      method="POST"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="border border-secondary rounded shadow p-2 p-md-5 bg-texture-2"
      id="form-contact-bitrix"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="form-contact-bitrix" />
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

        <Form.Group as={Col} controlId="formContactBixtrixIndustry">
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
  formname: `form-contact-bitrix`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormContactBitrix;

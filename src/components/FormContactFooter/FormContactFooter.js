import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';

const FormContactFooter = ({ formname }) => {
  const SPREADSHEET_ID = '10o2IdQb0kwQ3JCeU7PnVdokEj_1D8j9pcuvMCmqwfek';
  const CLIENT_ID =
    '406088468654-h36damsf2nopfec0bcjbisgpm8kceeck.apps.googleusercontent.com';
  // const CLIENT_SECRET = '0WbieTj7pGPr3hLJwByI9AqK';
  const API_KEY = 'AIzaSyCRRYZ-1G13CVjeaR3dOSCPXfk0nfn4_I8';
  const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
  // const DISCOVERY_DOCS =
  //   'https://sheets.googleapis.com/$discovery/rest?version=v4';
  // const SCRIPT_URL =
  //   'https://script.google.com/macros/s/AKfycbxR9dIuMrJw0bFIkehc7yk-_ZhUENwUy0CvbfxGVnja_k4PNgY/exec';

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
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  // const values = [
  //   { firstName },
  //   { lastName },
  //   { phoneNumber },
  //   { email },
  //   { company },
  //   { jobTitle },
  //   { service },
  //   { budget },
  // ];

  useEffect(() => {
    handleClientLoad();
  });

  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  };

  const initClient = () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
      discoveryDocs: [
        'https://sheets.googleapis.com/$discovery/rest?version=v4',
      ],
    });
    // .then(() => {
    //   gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
    //   this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    // });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: SPREADSHEET_ID,
      // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
      range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
      // How the input data should be interpreted.
      valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      majorDimension: 'ROWS', //log each entry as a new row (vs column)
      values: [contact], //convert the object's values to an array
    };

    let request = gapi.client.sheets.spreadsheets.values.append(
      params,
      valueRangeBody
    );
    request.then(
      function(response) {
        // TODO: Insert desired response behaviour on submission
        console.log(response.result);
      },
      function(reason) {
        console.error('error: ' + reason.result.error.message);
      }
    );
  };

  return (
    <Form
      name="contact-form-footer"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="border border-secondary rounded shadow p-2 p-md-5 bg-texture-2"
      id="footer-contact-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formname} />
      <Form.Row>
        <Form.Group as={Col} controlId="formContactFooterFirstName">
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
        <Form.Group as={Col} controlId="formContactFooterLastName">
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
        <Form.Group as={Col} controlId="formContactFooterPhone">
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
        <Form.Group as={Col} controlId="formContactFooterEmail">
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
        <Form.Group as={Col} controlId="formContactFooterCompanyName">
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
        <Form.Group as={Col} controlId="formContactFooterJobTitle">
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
        <Form.Group as={Col} controlId="formContactFooterService">
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

        <Form.Group as={Col} controlId="formContactFooterIndustry">
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
  formname: `contact-form-footer`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormContactFooter;

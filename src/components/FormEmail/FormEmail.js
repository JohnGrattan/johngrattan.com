import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

const FormEmail = ({ formname }) => {
  return (
    <Form
      name={formname}
      method="POST"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="border border-secondary rounded shadow p-3 bg-texture-2"
    >
      <input type="hidden" name="form-name" value={formname} />
      <Form.Text className="mb-4 text-center">
        <span className="lead">
          Receive your{' '}
          <strong className="text-info text-uppercase">
            <u>FREE SEO Checklist</u>
          </strong>{' '}
          for business owners!
        </span>
      </Form.Text>
      <Form.Row>
        <Col sm="12" md="6" className="mb-2 mb-md-0">
          <Form.Control name="name" type="text" placeholder="Name" required />
        </Col>
        <Col sm="12" md="6">
          <Form.Control
            name="email"
            type="email"
            placeholder="Business Email"
            required
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col sm="12">
          <Button
            className="text-uppercase mt-3 w-100 font-weight-bold"
            variant="primary"
            type="submit"
          >
            Send Free Tips to Rank My Business
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

Form.defaultProps = {
  formname: `contact-form`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormEmail;

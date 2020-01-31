import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

const FormEmail = ({ formname }) => {
  return (
    <Form
      name={formname}
      method="POST"
      data-netlify="true"
      className="border border-secondary rounded shadow p-3 bg-texture-2"
    >
      <Form.Text className="mb-4 text-center">
        <span className="lead">
          Receive your{' '}
          <strong className="text-secondary text-uppercase">
            <u>FREE SEO Checklist</u>
          </strong>{' '}
          for business owners!
        </span>
      </Form.Text>
      <Form.Row>
        <Form.Group as={Col} controlId="formEmailBusinessEmail">
          <Col sm="12">
            <Form.Control type="email" placeholder="Business Email" required />
          </Col>
          <Col sm="12">
            <Button className="mt-3 w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Group>
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

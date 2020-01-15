import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({ btnlink, btnlabel, btnsolid }) => {
  const solid = 'btn btn-primary btn-xl shadow';
  const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <Link to={btnlink} className={btnsolid ? solid : outline}>
      <span>{btnlabel}</span>
    </Link>
  );
};

Button.defaultProps = {
  btnlink: `/`,
  btnlabel: `Click Here`,
  btnsolid: true,
};

Button.propTypes = {
  btnlink: PropTypes.string,
  btnlabel: PropTypes.string,
  btnsolid: PropTypes.bool,
};

export default Button;

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Card = ({ bg, icon, title, body, btnlabel }) => {
  // const solid = 'btn btn-primary btn-xl shadow';
  // const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <div className={`my-5 border shadow p-3 ${bg}`}>
      <i className={`fas fa-4x ${icon} text-primary mb-4 drop-shadow`}></i>
      <h3 className="h4 mb-2">{title}</h3>
      <hr className="light" />
      <div className="text-muted mb-0 text-left my-3">
        {body}
        <div className="my-3">
          <Button btnlabel={btnlabel} />
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  bg: `bg-texture-2`,
  icon: `fa-chess`,
  title: `This is a Title`,
  body: `This is a body`,
};

Card.propTypes = {
  bg: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.func,
};

export default Card;

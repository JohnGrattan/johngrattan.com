import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'gatsby';

// BG Query
const BodyNavBox__IconLink = ({ linkTo, icon, label }) => {
  return (
    <Link
      to={linkTo}
      className="col-6 col-md-3 mb-3 text-center drop-shadow pointer"
    >
      <i className={`${icon} mb-3 text-primary wiggle`}></i>
      <br />
      <span className="text-white-link">{label}</span>
    </Link>
  );
};

export default BodyNavBox__IconLink;

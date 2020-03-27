import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

// BG Query
const BodyNavBox__Icon = ({ scrollTo, icon, label }) => {
  return (
    <Link
      to={scrollTo}
      className="col-6 col-md-3 mb-3 text-center drop-shadow pointer"
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
      offset={-75}
    >
      <i className={`${icon} mb-3 text-primary wiggle`}></i>
      <br />
      <span className="text-white-link">{label}</span>
    </Link>
  );
};

export default BodyNavBox__Icon;

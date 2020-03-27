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
import BodyNavBox__IconLink from '../BodyNavBox__IconLink/BodyNavBox__IconLink';

// BG Query
const BodyNavBox = ({ text, linkTo, icon, label }) => {
  return (
    <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
      <p className="m-3 mb-5 text-center drop-shadow">{text}</p>
      <div className="row justify-content-around align-items-end mt-4">
        <BodyNavBox__IconLink linkTo={linkTo} icon={icon} label={label} />
      </div>
    </div>
  );
};

export default BodyNavBox;

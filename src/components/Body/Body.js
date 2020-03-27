import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import BodyNavBox from '../BodyNavBox/BodyNavBox';

import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const Body = ({
  className,
  fluid,
  hTwo,
  alt,
  text,
  linkTo,
  scrollTo,
  icon,
  label,
}) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
      backgroundColor={`#fff`}
      alt={alt}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container pt-3 pb-5">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">{hTwo}</h2>
              <hr className="divider my-4" />
            </div>
            <BodyNavBox
              text={text}
              linkTo={linkTo}
              scrollTo={scrollTo}
              icon={icon}
              label={label}
            />
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Body;

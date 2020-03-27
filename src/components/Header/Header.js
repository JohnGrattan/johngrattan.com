import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const Header = ({ className, fluid, hOne, alt }) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
      hOne={hOne}
      alt={alt}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-items-center justify-content-center">
            <h1 className="text-white font-weight-bold border border-primary rounded p-md-5 p-3 drop-shadow-dark text-lg">
              {hOne}
            </h1>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;

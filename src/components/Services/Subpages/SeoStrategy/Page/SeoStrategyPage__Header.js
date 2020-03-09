import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const SeoStrategyPage__Header = ({ className, hOne }) => {
  const data = useStaticQuery(graphql`
    query SeoStrategyPage__HeaderQ {
      masthead: file(relativePath: { eq: "images/bg-img-seo-strategy.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      hOne={hOne}
      alt="John Grattan SEO & Web Design SEO Strategy section background - chess board and pieces"
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

export default SeoStrategyPage__Header;

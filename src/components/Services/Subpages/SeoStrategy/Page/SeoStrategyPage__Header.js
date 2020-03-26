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
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h2 className="text-white font-weight-bold border border-primary rounded p-sm-5 p-3 drop-shadow-dark text-lg">
              Rank your website.
              <span className="d-block">
                Beat your <span className="text-break">competitors.</span>
              </span>
            </h2>
          </div>
          <div className="col-lg-8 align-self-baseline mt-3 drop-shadow-dark">
            <p className="text-white font-weight-light mb-4">
              Showcase your industry expertise to{' '}
              <strong className="text-secondary">build an audience</strong> and{' '}
              <strong className="text-secondary">drive traffic</strong>.
              <span className="d-block mt-3">
                Establish trust as a valuable source and{' '}
                <strong className="text-secondary">convert leads</strong> to{' '}
                <strong className="text-secondary">paying customers</strong>.
              </span>
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default SeoStrategyPage__Header;

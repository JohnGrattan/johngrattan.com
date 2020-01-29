import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import BackgroundImage from 'gatsby-background-image';
import FormEmail from '../FormEmail/FormEmail';

const BgImgHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query BgImgHomeQ {
      masthead: file(relativePath: { eq: "images/bg-masthead.jpg" }) {
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
      alt="john grattan seo and web design homepage background"
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

export default BgImgHome;

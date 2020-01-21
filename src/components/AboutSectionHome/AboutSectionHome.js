import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import ImgJgGreen from '../ImageComps/image-jg-headshot-green';
import Button from '../Button/Button';

const AboutSectionHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutSectionHomeQ {
      texture: file(
        relativePath: { eq: "images/textures/gradient-squares.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.texture.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
      alt="about John Grattan background"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center neg-margin-top">
          <div className="col-lg-5 col-md-6 order-md-2">
            <div className="container-md">
              <ImgJgGreen />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 text-center order-md-1 mt-5">
            <h1 className="text-dark mt-0">
              Hi, I'm John Grattan
              <span className="d-block mt-3">Your one man </span>
              <span className="d-block text-secondary">Digital Marketing</span>
              <span className="d-block text-secondary">Agency</span>
            </h1>
            <hr className="divider-long primary my-4" />
            <p className="text-dark mb-5 text-left px-3 px-md-0">
              I help businesses adapt to the latest technologies by
              personalizing digital marketing strategies —{' '}
              <strong className="text-secondary">
                centered on custom, responsive websites
              </strong>{' '}
              — to help generate leads and improve customer experience.
            </p>
            <Button btnlink="/" btnlabel="See My Process" btnsolid={true} />
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default AboutSectionHome;

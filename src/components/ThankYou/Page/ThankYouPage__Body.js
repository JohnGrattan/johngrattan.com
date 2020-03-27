import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

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
const ThankYouPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ThankYouPage__BodyQ {
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
      alt="John Grattan SEO & Web Design Thank You background section"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container pt-3 pb-5">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">I appreciate your interest!</h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-5 my-2 text-center text-white bg-info rounded drop-shadow">
              <i className="fas fa-3x fa-envelope mb-1 text-primary wiggle"></i>
              <p className="drop-shadow">You will receive an email shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ThankYouPage__Body;

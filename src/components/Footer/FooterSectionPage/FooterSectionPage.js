import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Footer from '../Footer';

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
const FooterSectionPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query FooterSectionPageQ {
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
      Tag="footer"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
      alt="footer contact John Grattan background"
    >
      <Footer />
    </BackgroundImage>
  );
};

export default FooterSectionPage;

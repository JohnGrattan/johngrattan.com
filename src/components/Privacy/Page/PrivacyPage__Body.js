import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PrivacyPage__Section from './Sections/PrivacyPage__Section';
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
const PrivacyPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PrivacyPage__BodyQ {
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
      alt="John Grattan SEO & Web Design Privacy Policy background section"
    >
      <PrivacyPage__Section className="container border rounded shadow bg-img-full-service-seo" />
    </BackgroundImage>
  );
};

export default PrivacyPage__Body;

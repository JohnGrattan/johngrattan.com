import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgJohnGrattanLogoGmb = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgJohnGrattanLogoGmbQ {
      image: file(relativePath: { eq: "images/john-grattan-logo-gmb.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="John Grattan SEO & Web Design Square Logo"
      className={className}
    />
  );
};

export default ImgJohnGrattanLogoGmb;

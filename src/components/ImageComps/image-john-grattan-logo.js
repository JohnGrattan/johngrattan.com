import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgJohnGrattanLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgJohnGrattanLogoQ {
      image: file(relativePath: { eq: "images/john-grattan-logo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="John Grattan Logo"
      className={className}
    />
  );
};

export default ImgJohnGrattanLogo;

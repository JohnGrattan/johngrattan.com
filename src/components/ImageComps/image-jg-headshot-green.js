import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgJGHeadshotGreen = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgJGHeadshotGreenQ {
      image: file(
        relativePath: { eq: "images/john-grattan-circle-headshot-green.png" }
      ) {
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
      alt="John Grattan picture"
      className={className}
    />
  );
};

export default ImgJGHeadshotGreen;

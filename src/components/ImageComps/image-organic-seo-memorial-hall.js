import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgOrganicSeoMemHall = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgOrganicSeoMemHallQ {
      image: file(
        relativePath: { eq: "images/organic-seo-memorial-hall-plymouth-ma.jpg" }
      ) {
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
      alt="organic seo results for memorial hall in plymouth ma"
      className={className}
    />
  );
};

export default ImgOrganicSeoMemHall;

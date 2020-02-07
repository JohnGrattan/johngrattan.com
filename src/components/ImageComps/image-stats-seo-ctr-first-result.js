import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgStatsSeoCtr = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgStatsSeoCtrQ {
      image: file(
        relativePath: { eq: "images/stats-seo-ctr-first-result.jpg" }
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

export default ImgStatsSeoCtr;

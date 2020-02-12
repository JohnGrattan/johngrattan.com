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
      alt="The first position on Google search results has a 34.36% clickthrough rate for desktop and 35% for mobile - Source: HubSpot"
      className={className}
    />
  );
};

export default ImgStatsSeoCtr;

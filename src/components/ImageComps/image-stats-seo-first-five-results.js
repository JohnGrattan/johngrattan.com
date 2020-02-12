import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgStatsSeoFirstFive = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgStatsSeoFirstFiveQ {
      image: file(
        relativePath: { eq: "images/stats-seo-first-five-organic.jpg" }
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
      alt="On the first page alone, the first five organic search results account for 67.60% of all the clicks - Source: Zero Limit Web"
      className={className}
    />
  );
};

export default ImgStatsSeoFirstFive;

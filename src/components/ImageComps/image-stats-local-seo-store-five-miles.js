import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLocalStorePage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLocalStorePageQ {
      image: file(
        relativePath: { eq: "images/stats-local-seo-store-five-miles.jpg" }
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
      alt="72% of consumers who did a local search visited a store within five miles - Source: WordStream"
      className={className}
    />
  );
};

export default ImgLocalStorePage;

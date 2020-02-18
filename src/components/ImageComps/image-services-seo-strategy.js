import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgSeoStrategy = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgSeoStrategyQ {
      image: file(relativePath: { eq: "images/services-seo-strategy.jpg" }) {
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
      alt="seo & web design digital marketing services - seo strategy"
      className={className}
    />
  );
};

export default ImgSeoStrategy;

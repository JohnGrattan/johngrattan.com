import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLocalSeoMapPack = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLocalSeoMapPackQ {
      image: file(relativePath: { eq: "images/local-3-pack-seo-results.jpg" }) {
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
      alt="google local map pack results for electricians plymouth ma search query"
      className={className}
    />
  );
};

export default ImgLocalSeoMapPack;

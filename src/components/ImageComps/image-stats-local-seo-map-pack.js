import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLocalMapPackPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLocalMapPackPageQ {
      image: file(relativePath: { eq: "images/stats-local-seo-map-pack.jpg" }) {
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
      alt="The Google local pack appears in the top spot of 93% of searches with local intent - Source: Hubspot"
      className={className}
    />
  );
};

export default ImgLocalMapPackPage;

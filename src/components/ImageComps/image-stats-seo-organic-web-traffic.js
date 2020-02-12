import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgOrganicTrafficPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgOrganicTrafficPageQ {
      image: file(
        relativePath: { eq: "images/stats-seo-organic-web-traffic.jpg" }
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
      alt="51% of all web traffic comes from organic search and only 10% comes from paid search - Source: BrightEdge"
      className={className}
    />
  );
};

export default ImgOrganicTrafficPage;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLocalGMBPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLocalGMBPageQ {
      image: file(
        relativePath: { eq: "images/stats-local-seo-google-my-business.jpg" }
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
      alt="64% of consumers have used Google My Business to find contact details for local businesses - Source: Brightlocal"
      className={className}
    />
  );
};

export default ImgLocalGMBPage;

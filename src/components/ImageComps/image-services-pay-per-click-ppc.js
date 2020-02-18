import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgPpc = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgPpcQ {
      image: file(
        relativePath: { eq: "images/services-pay-per-click-ppc.jpg" }
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
      alt="seo & web design digital marketing services - pay-per-click ppc"
      className={className}
    />
  );
};

export default ImgPpc;

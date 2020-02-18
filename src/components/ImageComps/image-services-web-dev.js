import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgWebDev = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgWebDevQ {
      image: file(relativePath: { eq: "images/services-web-development.jpg" }) {
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
      alt="seo & web design digital marketing services - web development"
      className={className}
    />
  );
};

export default ImgWebDev;

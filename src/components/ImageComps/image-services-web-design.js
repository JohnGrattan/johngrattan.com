import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgWebDesign = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgWebDesignQ {
      image: file(relativePath: { eq: "images/services-web-design.jpg" }) {
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
      alt="seo & web design digital marketing services - web design"
      className={className}
    />
  );
};

export default ImgWebDesign;

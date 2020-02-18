import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLocalSeo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLocalSeoQ {
      image: file(relativePath: { eq: "images/services-local-seo.jpg" }) {
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
      alt="seo & web design digital marketing services - local seo"
      className={className}
    />
  );
};

export default ImgLocalSeo;

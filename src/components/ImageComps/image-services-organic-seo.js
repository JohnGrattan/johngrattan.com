import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgOrganicSeo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgOrganicSeoQ {
      image: file(relativePath: { eq: "images/services-organic-seo.jpg" }) {
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
      alt="seo & web design digital marketing services - organic seo"
      className={className}
    />
  );
};

export default ImgOrganicSeo;

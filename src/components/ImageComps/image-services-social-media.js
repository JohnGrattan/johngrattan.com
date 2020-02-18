import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgSocialMedia = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgSocialMediaQ {
      image: file(relativePath: { eq: "images/services-social-media.jpg" }) {
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
      alt="seo & web design digital marketing services - social media"
      className={className}
    />
  );
};

export default ImgSocialMedia;

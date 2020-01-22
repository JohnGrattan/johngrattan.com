import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgJgBlogPic = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgJgBlogPicQ {
      image: file(
        relativePath: { eq: "images/john-grattan-circle-headshot-green.png" }
      ) {
        id
        childImageSharp {
          fixed (width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="John Grattan picture"
      className={className}
    />
  );
};

export default ImgJgBlogPic;

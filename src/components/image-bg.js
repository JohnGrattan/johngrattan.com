import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImgBg = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query ImgBgQ {
      placeholderImage: allFile(
        filter: { sourceInstanceName: { eq: "images" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 2480, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const image = data.placeholderImage.edges.find(
    ({ node }) => node.relativePath === fileName
  ).node;
  if (!image) {
    return null;
  }

  return (
    <BackgroundImage
      fluid={image.childImageSharp.fluid}
      style={{
        height: `100vh`,
        width: `100vw`,
        backgroundColor: `transparent`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
        display: `flex`,
        alignItems: `center`,
      }}
    />
  );
};

export default ImgBg;

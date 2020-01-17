import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = () => {
  const data = useStaticQuery(graphql`
    query ImageQ {
      image: file(relativePath: { eq: "responsive-devices-sp.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.image.childImageSharp.fluid} />;
};

Image.defaultProps = {
  imgpath: `gatsby-icon.png`,
};

Image.propTypes = {
  imgpath: PropTypes.string,
};

export default Image;

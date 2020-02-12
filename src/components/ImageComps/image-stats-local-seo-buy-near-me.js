import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLocalBuyNearMePage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLocalBuyNearMePageQ {
      image: file(
        relativePath: { eq: "images/stats-local-seo-buy-near-me.jpg" }
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
      alt="“Where to buy” + “near me” mobile queries have grown by over 200% in the last two years - Source: Google"
      className={className}
    />
  );
};

export default ImgLocalBuyNearMePage;

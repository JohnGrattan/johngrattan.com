import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import BlogSectionHome from './Home__BlogSection';

const Home__BlogSectionBg = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__BlogSectionBgQ {
      masthead: file(relativePath: { eq: "images/bg-img-blog.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              path
              date
              title
              author
              image {
                id
                relativePath
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="John Grattan SEO & Web Design Blog background section on homepage - open notebook with cup of coffee"
    >
      <BlogSectionHome />
    </BackgroundImage>
  );
};

export default Home__BlogSectionBg;

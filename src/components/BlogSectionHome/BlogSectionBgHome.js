import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import BlogSectionHome from './BlogSectionHome';

const BlogSectionBgHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query BlogSectionBgHomeQ {
      masthead: file(relativePath: { eq: "images/bg-img-blog.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
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
      alt="seo services background"
    >
      <BlogSectionHome />
    </BackgroundImage>
  );
};

export default BlogSectionBgHome;

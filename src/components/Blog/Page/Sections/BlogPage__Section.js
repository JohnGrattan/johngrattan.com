import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../../Button/Button';
import ImgJgBlogPic from '../../../ImageComps/image-jg-blog-pic';

const BlogPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query BlogPage__SectionQ {
      masthead: file(relativePath: { eq: "images/bg-img-blog-section.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
      alt="seo & web design blog insights for small business owners"
    >
      <div className="container">
        <h2 className="text-center mt-0 text-white">Latest Posts</h2>
        <hr className="divider mt-4 mb-5" />
        <div className="row justify-content-center align-items-baseline">
          {data.allMarkdownRemark.edges.map(post => (
            <div className="col-md-6 col-lg-3" key={post.node.id}>
              <div className="container seo-blog mb-5 p-2 border rounded bg-white drop-shadow-dark">
                <Img
                  className="mb-2"
                  fluid={post.node.frontmatter.image.childImageSharp.fluid}
                />
                <div>
                  <div>
                    <h3>{post.node.frontmatter.title}</h3>
                  </div>
                  <div className="row text-muted ml-1">
                    <ImgJgBlogPic className="mr-2" />
                    <small>
                      {post.node.frontmatter.author} •{' '}
                      {post.node.frontmatter.date}
                    </small>
                  </div>
                  <div className="row text-muted ml-3">
                    <small className="col">
                      {post.node.timeToRead} min read
                    </small>
                  </div>
                  <div className="my-3">
                    <Link className="text-info" to={post.node.frontmatter.path}>
                      Read More{' '}
                      <i className="fas fa-long-arrow-alt-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default BlogPage__Section;

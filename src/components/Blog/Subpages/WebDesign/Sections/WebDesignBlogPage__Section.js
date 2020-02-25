import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import ImgJgBlogPic from '../../../../ImageComps/image-jg-blog-pic';

const WebDesignBlogPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query WebDesignBlogPage__SectionQ {
      masthead: file(relativePath: { eq: "images/bg-img-blog-section.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tag: { eq: "web-design" } } }
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
              tag
              alt
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
      alt="seo & web design blog - web design articles background image"
    >
      <div className="container">
        <h2 className="text-center mt-0 text-white">Latest Web Design Posts</h2>
        <hr className="divider mt-4 mb-5" />
        <div className="row justify-content-center align-items-baseline">
          {data.allMdx.edges.map(post => (
            <div className="col-12" key={post.node.id}>
              <div className="container seo-blog mb-5 p-2 border rounded bg-white drop-shadow-dark">
                <Link to={post.node.frontmatter.path}>
                  <Img
                    className="mb-2"
                    fluid={post.node.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
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

export default WebDesignBlogPage__Section;

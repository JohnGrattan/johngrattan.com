import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderBlog from '../components/HeaderBlog/HeaderBlog';
import ImgJgBlogPic from '../components/ImageComps/image-jg-blog-pic';

const SeoBlog = ({ data }) => (
  <Layout>
    <SEO title="SEO Blog" />
    <HeaderBlog
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO Blog"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container">
        {/* <h2 className="text-center mt-0 text-dark">Featured Post</h2>
        <hr className="divider mt-4 mb-5" /> */}
        <h2 className="text-center mt-0 text-dark">Latest Posts</h2>
        <hr className="divider mt-4 mb-5" />
        <div className="row justify-content-center align-items-center">
          {data.allMarkdownRemark.edges.map(post => (
            <div
              className="container seo-blog p-2 mx-1 my-3 border rounded col-md-48 col-lg-24 flex-shrink-1 bg-white"
              key={post.node.id}
            >
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
                  <small className="col">{post.node.timeToRead} min read</small>
                </div>
                <div className="my-3">
                  <Link
                    className="text-secondary"
                    to={post.node.frontmatter.path}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
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
`;

export default SeoBlog;

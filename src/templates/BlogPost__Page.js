import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import LayoutBody from '../components/layout-body';
import SEO from '../components/seo';
import HeaderBlogPost from '../components/HeaderBlogPost/HeaderBlogPost';
import ImgJgBlogPostPic from '../components/ImageComps/image-jg-headshot-green';
import Button from '../components/Button/Button';

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <LayoutBody>
      <SEO
        title="John Grattan: Freelance Digital Marketing - Offering SEO, SEM, Web Design, Web Development Services | Boston, MA & Plymouth, MA"
        description="Hi, I'm John Grattan. I offer affordable freelance Digital Marketing services such as SEO, SEM, Web Design & Development to local businesses in Massachusetts."
      />
      <HeaderBlogPost
        Tag="header"
        className="bg-img-page-top"
        hOne={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 px-lg-5">
              <Img
                className="container col-8 mb-5 drop-shadow-dark"
                fluid={post.frontmatter.image.childImageSharp.fluid}
                alt={post.frontmatter.alt}
              />
              {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
              <MDXRenderer>{post.body}</MDXRenderer>
            </div>
            <div className="col-lg-3 p-3 bg-dark border rounded shadow">
              <p className="lead mb-4 text-white bg-info drop-shadow text-center">
                <strong>About the author</strong>
              </p>
              <ImgJgBlogPostPic />
              <div className="text-center text-white mt-3">
                <strong className="">John Grattan</strong>
                <small className="d-block mt-0">
                  SEO Manager & Lead Developer
                </small>
              </div>
              <hr className="light" />
              <p className="text-left text-white">
                John Grattan is a one-man digital marketing agency from
                Plymouth, MA. He helps small businesses adapt to the latest
                technologies by personalizing digital marketing strategies —
                centered on custom, responsive websites — to help generate leads
                and improve customer experience.
              </p>
              <div className="text-center mb-3 mt-4">
                <Button
                  btnlabel="Learn More"
                  btnlink="/about"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutBody>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      timeToRead
      frontmatter {
        path
        date
        title
        author
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
`;

export default BlogPostTemplate;

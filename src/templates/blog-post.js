import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderBlogPost from '../components/HeaderBlogPost/HeaderBlogPost';
import ImgJgBlogPic from '../components/ImageComps/image-jg-blog-pic';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
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
          <div>
            <Img
              className="container col-8 mb-2"
              fluid={post.frontmatter.image.childImageSharp.fluid}
            />
            <Link to="/seo-blog">Go Back</Link>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`;

export default BlogPostTemplate;

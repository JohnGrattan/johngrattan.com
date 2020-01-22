import React from 'react';
import { Link, graphql } from 'gatsby';
import ImgJgBlogPic from '../components/ImageComps/image-jg-blog-pic';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <Link to="/seo-blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div className="row text-muted ml-1">
        <ImgJgBlogPic className="mr-2" />
        <small>
          {post.frontmatter.author} • {post.frontmatter.date} •{' '}
          {post.timeToRead} min read
        </small>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ImgJgBlogPic from '../../ImageComps/image-jg-blog-pic';
import Button from '../../Button/Button';

const Home__BlogSection = () => {
  const data = useStaticQuery(graphql`
    query Home__BlogSectionQ {
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

  return (
    <div className="container">
      <h2 className="text-center mt-0 text-light drop-shadow-dark">
        SEO & Web Design Insights <br />
        for Business Owners
      </h2>
      <hr className="divider mt-4 mb-5 drop-shadow-dark" />
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
                  {post.node.frontmatter.author} • {post.node.frontmatter.date}
                </small>
              </div>
              <div className="row text-muted ml-3">
                <small className="col">{post.node.timeToRead} min read</small>
              </div>
              <div className="my-3">
                <Link className="text-info" to={post.node.frontmatter.path}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row my-5 justify-content-center align-items-center">
        <Button btnlink="/blog" btnlabel="View More Posts" btnsolid={true} />
      </div>
    </div>
  );
};

export default Home__BlogSection;

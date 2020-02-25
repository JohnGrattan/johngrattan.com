import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import MarketingBlogPage__Section from '../Marketing/Sections/MarketingBlogPage__Section';

// BG Query
const MarketingBlogPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query MarketingBlogPage__BodyQ {
      texture: file(
        relativePath: { eq: "images/textures/gradient-squares.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.texture.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
      alt="seo & web design blog - marketing articles background image"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container pt-3 pb-5">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">
                Knowledge Center for Business Owners
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Learn about each topic:
              </p>
              <div className="row justify-content-around align-items-end mt-4">
                <Link
                  to="/blog/seo"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                >
                  <i className="fas fa-3x fa-search-location mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">SEO</span>
                </Link>
                <Link
                  to="/blog/marketing"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                >
                  <i className="fas fa-3x fa-funnel-dollar mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Marketing</span>
                </Link>
                <Link
                  to="/blog/web-design"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                >
                  <i className="fas fa-3x fa-palette mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Web Design</span>
                </Link>
                <Link
                  to="/blog/web-development"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                >
                  <i className="fas fa-3x fa-laptop-code mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Web Development</span>
                </Link>
              </div>
            </div>
          </div>
          <MarketingBlogPage__Section className="page-section border-bottom border-secondary bg-img-blog-section" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default MarketingBlogPage__Body;

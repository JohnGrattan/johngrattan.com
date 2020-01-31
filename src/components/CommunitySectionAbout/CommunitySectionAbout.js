import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const CommunitySectionAbout = ({ className }) => {
  const data = useStaticQuery(graphql`
    query CommunitySectionAboutQ {
      masthead: file(
        relativePath: { eq: "images/bg-img-community-plymouth-ma.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
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
      alt="john grattan about me background"
    >
      <div id="community" className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-university mb-3 text-primary"></i>
        <h3 className="mt-2 text-white">Community</h3>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p className="text-white">
            I'm a lifelong resident of{' '}
            <span className="text-primary">Plymouth, MA</span>, a fanatic of{' '}
            <span className="text-primary">Boston sports</span> and a strong
            believer that{' '}
            <span className="text-primary">
              success starts with helping others
            </span>
            .
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-baseline py-5 px-md-3">
        <div className="container">
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="p-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              voluptates soluta dicta debitis fugiat eos at asperiores, hic
              molestias expedita sed similique, deleniti minus aspernatur enim
              quos porro. Culpa, commodi necessitatibus? Repellat magnam fugit
              possimus, voluptate, cupiditate vero ipsum quis explicabo labore
              fugiat quam earum, cum officia voluptatibus id. Commodi.
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default CommunitySectionAbout;

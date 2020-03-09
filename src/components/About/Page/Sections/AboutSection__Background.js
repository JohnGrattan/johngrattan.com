import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const AboutSection__Background = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutSection__BackgroundQ {
      masthead: file(relativePath: { eq: "images/bg-img-fenway-park.jpg" }) {
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
      id="background"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="About John Grattan SEO & Web Design background section - Boston Red Sox World Series Champions Flags at Fenway Park, Boston, MA"
    >
      <div className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-address-card mb-3 text-primary"></i>
        <h3 className="mt-2 text-white">Background</h3>
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
              <p>
                I've always been intrigued by technology and its infinite
                possibilities.
              </p>
              <p>
                Growing up, I was introduced to coding and instantly loved it!
              </p>
              <p>
                Having the ability to create a game and actually play it or
                build a simple tool I didn't have before was enough to start my
                journey.
              </p>
              <p>
                Looking back, whether I was using a program or listening to
                music, I couldn't help but dissect it's components and think
                about what I would do differently.
              </p>
              <p className="text-info">
                It's no surprise I became a Software Engineer by day and an
                Audio Engineer by night!
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default AboutSection__Background;

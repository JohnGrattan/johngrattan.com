import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const AboutSection__Community = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutSection__CommunityQ {
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
      alt="About John Grattan SEO & Web Design community section - Town Hall in Downtown, Plymouth, MA"
    >
      <div id="community" className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-handshake mb-3 text-primary"></i>
        <h3 className="mt-2 text-white">Community</h3>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p className="text-white">
            The sense of <span className="text-primary">belonging</span> is
            pivotal to <span className="text-primary">longevity</span>. Creating
            a relationship between small businesses and the people they serve is
            the <span className="text-primary">ultimate ROI</span>.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-baseline py-5 px-md-3">
        <div className="container">
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="p-5">
              <p>
                Growing up in Plymouth, MA, I've seen many businesses come and
                go.
              </p>
              <p>
                More often than not, the deciding factor is how well they serve
                the community and contribute to the town's success.
              </p>
              <p>
                People value rapport, personal interactions and the ability to
                relate.
              </p>
              <p className="text-info">
                I hold true to putting the people's interest first by improving
                the connection between local businesses and their consumers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default AboutSection__Community;

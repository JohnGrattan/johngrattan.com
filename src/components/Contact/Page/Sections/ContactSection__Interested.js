import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ContactSection__Interested = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ContactSection__InterestedQ {
      masthead: file(relativePath: { eq: "images/bg-img-teamwork.jpg" }) {
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
      id="organic-seo"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Contact John Grattan SEO & Web Design background section - teamwork between co-workers and clients"
    >
      <div className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-hands-helping mb-3 text-primary"></i>
        <h2 className="mt-2 text-white">Working Together</h2>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p className="text-white">
            My goal is to{' '}
            <span className="text-primary">
              scale your business with inbound marketing
            </span>{' '}
            so more leads will find you via brand awareness and audience
            engagement.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-baseline py-5 px-md-3">
        <div className="container">
          <div className="container mb-3 pt-2 border border-secondary rounded drop-shadow bg-texture-2">
            <div className="p-2 p-md-5">
              <p className="display-4 text-center pb-4">Increase Your ROI</p>
              <div className="row justify-content-center">
                <p className="text-muted mb-4 text-left">
                  <span className="d-flex mb-3">
                    <i className="far fa-2x fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2 mt-1 lead">
                      Organically drive traffic to your business website
                    </span>
                  </span>
                  <span className="d-flex mb-3">
                    <i className="far fa-2x fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2 mt-1 lead">
                      Boost the quality of your leads by focusing on intent
                    </span>
                  </span>
                  <span className="d-flex mb-3">
                    <i className="far fa-2x fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2 mt-1 lead">
                      Dominate local search results for all areas you service
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="far fa-2x fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2 mt-1 lead">
                      Center your site on user experience and provided value
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ContactSection__Interested;

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import StatsSectionHome from '../../StatsSectionHome/StatsSectionHome';
import Button from '../../Button/Button';

const Home__ProcessSection = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__ProcessSectionQ {
      masthead: file(relativePath: { eq: "images/bg-img-process.jpg" }) {
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
      alt="seo process background"
    >
      <div className="container">
        <StatsSectionHome
          stat="In 2019, 52% of all worldwide online traffic comes from mobile, 45% from desktop."
          srcUrl={
            'https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide'
          }
          srcText="StatCounter"
        />
        <h2 className="display-4 text-center pt-5 text-white drop-shadow-dark">
          SEO & Web Design Process
        </h2>
        <hr className="divider mt-4 pb-5 drop-shadow-dark" />

        <div className="p-2 p-md-5 mb-5">
          <div className="row justify-content-center align-items-baseline">
            <div className="col-6 col-md-3 bg-purple pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">1</span>
              </div>
              <Link to="/process">
                <div className="text-center text-white pointer">
                  <i className="fas fa-4x fa-handshake text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Learning <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-light-gray pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">2</span>
              </div>
              <Link to="/process">
                <div className="text-center text-dark pointer">
                  <i className="fas fa-4x fa-stethoscope text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Diagnostic <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-purple-to-gray pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">3</span>
              </div>
              <Link to="/process">
                <div className="text-center text-white pointer">
                  <i className="fas fa-4x fa-pencil-ruler text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Blueprint <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-gray-to-purple pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">4</span>
              </div>
              <Link to="/process">
                <div className="text-center text-dark pointer">
                  <i className="fas fa-4x fa-palette text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Design <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-gray-to-purple pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">5</span>
              </div>
              <Link to="/process">
                <div className="text-center text-dark pointer">
                  <i className="fab fa-4x fa-react text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Development <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-purple-to-gray pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">6</span>
              </div>
              <Link to="/process">
                <div className="text-center text-white pointer">
                  <i className="fas fa-4x fa-search-dollar text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      SEO <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-light-gray pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">7</span>
              </div>
              <Link to="/process">
                <div className="text-center text-dark pointer">
                  <i className="fas fa-4x fa-funnel-dollar text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Marketing <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 bg-purple pt-4 pb-2">
              <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                <span className="font-weight-bold">8</span>
              </div>
              <Link to="/process/">
                <div className="text-center text-white pointer">
                  <i className="fas fa-4x fa-sync-alt text-secondary"></i>
                  <div className="my-3">
                    <strong>
                      Refinement <br />
                      Phase
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mx-auto mt-5 text-center text-white">
              <p className="lead mt-5 drop-shadow-dark border-bottom border-info border-size-5">
                <strong className="drop-shadow">
                  Interested in More Details?
                </strong>
              </p>
              <div className="container">
                <i className="fas fa-4x fa-long-arrow-alt-down text-info mb-4 drop-shadow-dark"></i>
              </div>
              <Button
                btnlink="/process"
                btnlabel="See My Full Process"
                btnsolid={true}
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Home__ProcessSection;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../../Button/Button';

const ProcessPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ProcessPage__SectionQ {
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
      alt="digital marketing process for small business"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 px-0 text-center justify-content-center align-items-center">
            <div className="row mx-0 px-0 container">
              <hr className="divider mt-4 drop-shadow-dark" />
              <div className="timeline container mt-5">
                <div id="learning" className="content-container left">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fas fa-handshake mr-md-3 text-info"></i>
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Learning Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      It's my job to learn and understand every aspect of your
                      business. From{' '}
                      <strong className="text-info">your brand</strong> and{' '}
                      <strong className="text-info">your personality</strong> to{' '}
                      <strong className="text-info">your services</strong> and{' '}
                      <strong className="text-info">your clients</strong>, I'll
                      need a full evaluation. This will allow me to create an{' '}
                      <strong className="text-info">
                        accurate digital representation
                      </strong>{' '}
                      of your company and identify important{' '}
                      <strong className="text-info">
                        customer demographics
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="diagnostic" className="content-container right">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fas fa-stethoscope mr-md-3 text-info"></i>
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Diagnostic Phase
                      </span>
                    </h3>

                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      This is where we focus on{' '}
                      <strong className="text-info">your goals</strong> and{' '}
                      <strong className="text-info">your challenges</strong> to
                      figure out what exactly needs to be done to{' '}
                      <strong className="text-info">
                        successfully overcome any obstacles
                      </strong>
                      . Prioritizing this phase will help{' '}
                      <strong className="text-info">
                        eliminate the waste of time and money
                      </strong>{' '}
                      on unnecessary features and functions. From defining a
                      clear call-to-action to analyzing previous website metrics
                      for patterns and trends, we'll start{' '}
                      <strong className="text-info">
                        narrowing down the correct solution
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="blueprint" className="content-container left">
                  <div className="content bg-texture-2">
                    <h3>
                      {' '}
                      <i className="fas fa-pencil-ruler mr-md-3 text-info"></i>
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Blueprint Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      Now that we know what we're working with, it's time to{' '}
                      <strong className="text-info">
                        benchmark your current metrics
                      </strong>{' '}
                      and formulate our approach. Establishing a baseline will
                      help us evaluate future success. Next, I'll{' '}
                      <strong className="text-info">
                        analyze your competition
                      </strong>
                      , strategically perform{' '}
                      <strong className="text-info">keyword research</strong>{' '}
                      and build a structured{' '}
                      <strong className="text-info">site map</strong> to
                      organize your content creation. From here, we can outline
                      a development schedule to{' '}
                      <strong className="text-info">
                        keep track of our progress
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="design" className="content-container right">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fas fa-palette mr-md-3 text-info"></i>{' '}
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Design Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      We'll figure out what{' '}
                      <strong className="text-info">
                        designs, features, and functions really stand out to you
                      </strong>
                      . We'll also take a look at your competition, see what we
                      are up against, and make sure we do better to{' '}
                      <strong className="text-info">
                        create a site you can be proud of
                      </strong>
                      . We'll discuss customer decision paths to help develop a{' '}
                      <strong className="text-info">
                        lead generating sales funnel
                      </strong>{' '}
                      and organize your information architecture. Your interface
                      will be user-centric and focus on their{' '}
                      <strong className="text-info">positive experience</strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="dev" className="content-container left">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fab fa-react mr-md-3 text-info"></i>{' '}
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Development Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      Here we start turning ideas into reality as I{' '}
                      <strong className="text-info">
                        hand code your design into a functioning website
                      </strong>
                      . Following the latest quality standards and current best
                      practices, I'll develop a{' '}
                      <strong className="text-info">
                        clean, robust, and secure
                      </strong>{' '}
                      code base. I'll handle everything regarding your{' '}
                      <strong className="text-info">
                        domain, hosting, SSL, CDN, front-end, and back-end
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="seo" className="content-container right">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fas fa-search-dollar mr-md-3 text-info"></i>{' '}
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        SEO Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      This is where the implementation of long term SEO begins
                      to{' '}
                      <strong className="text-info">
                        rank your website organically and locally
                      </strong>{' '}
                      in search engine results pages. By aggressively targeting
                      relevant{' '}
                      <strong className="text-info">
                        keywords and locations
                      </strong>{' '}
                      through ongoing content creation, local citation building,
                      and backlink generation, I will ensure you become a{' '}
                      <strong className="text-info">
                        stable domain authority within your industry
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="marketing" className="content-container left">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fas fa-funnel-dollar mr-md-3 text-info"></i>
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Marketing Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      Short term SEM strategies via pay-per-click (PPC) ads,
                      social media and email campaigns will{' '}
                      <strong className="text-info">
                        drive traffic and boost your exposure
                      </strong>{' '}
                      while we wait for SEO rankings to take effect. Continuous
                      testing will optimize your ads and{' '}
                      <strong className="text-info">
                        provide valuable data regarding your customer's
                        demographics, trends, and intentions
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div id="refinement" className="content-container right">
                  <div className="content bg-texture-2">
                    <h3>
                      <i className="fas fa-sync-alt mr-md-3 text-info"></i>
                      <span className="d-block d-md-inline mt-2 mt-md-0">
                        Refinement Phase
                      </span>
                    </h3>
                    <hr className="secondary" />
                    <p className="text-muted text-left">
                      Ongoing metrics analysis and data monitoring will often
                      result in{' '}
                      <strong className="text-info">
                        strategy adaptation and refinement
                      </strong>
                      . Tracking what needs work, while{' '}
                      <strong className="text-info">
                        capitalizing on successful benchmarks
                      </strong>{' '}
                      will further optimize our SEO plan. I'll be continuously
                      evaluating Google Analytics and Google Search Console for{' '}
                      <strong className="text-info">positive results</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ProcessPage__Section;

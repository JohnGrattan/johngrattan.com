import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const PricingSection__FullService = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingSection__FullServiceQ {
      masthead: file(relativePath: { eq: "images/bg-img-dashboard.jpg" }) {
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
      alt="full-service seo background"
    >
      <div className="container">
        <div id="full-service" className="text-center pt-5 drop-shadow-dark">
          <i className="fas fa-3x fa-rocket mb-3 text-primary"></i>
          <h3 className="mt-2 text-white">Full-Service SEO</h3>
          <hr className="divider mt-4" />
        </div>
        <div className="row justify-content-center align-items-baseline pt-5 p-3">
          <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
            <p className="text-white px-5">
              Are you looking for a long term marketing plan to drive new leads
              to your business website?
            </p>
            <p className="text-primary">This package is for you!</p>
          </div>
        </div>
        <div className="row justify-content-center align-items-baseline py-5 px-md-3">
          {/* Step 1: Website Container */}
          <div className="container col-md-4">
            <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
              <span className="text-secondary">Step 1:</span> Website
            </p>
            <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
              <div className="text-center pt-5">
                <i className="fas fa-3x fa-laptop-code text-secondary mb-4 d-block"></i>
                <h3 className="mt-2">
                  Web Design &<br />
                  Development
                </h3>
                <div className="container border mt-3 py-3">
                  <small className="d-block text-info">
                    Full-Service SEO Package
                  </small>
                  <span className="d-block text-muted lead">
                    $2,000 flat rate
                  </span>
                  <span className="d-block text-primary bg-purple mt-4">
                    Save $4,760!
                  </span>
                  <small className="d-block text-muted mt-2 px-2">
                    (Compared to{' '}
                    <a
                      className="text-info"
                      href="https://www.websitebuilderexpert.com/building-websites/how-much-should-a-website-cost/"
                    >
                      average website cost
                    </a>
                    )
                  </small>
                </div>
                <div className="container py-4 text-left">
                  <span className="d-flex my-2 mb-2">
                    <strong className="mb-3">Includes:</strong>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Setup:</strong> all the technical stuff
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Design:</strong> clean & professional
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Develop:</strong> custom hand-coded
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Testing:</strong> for quality assurance
                    </span>
                  </span>
                  <div className="text-danger mt-5">
                    <small>Additional Recurring Payments:</small>
                    <small className="d-flex ml-2 mt-3">
                      - New Domain: $15/year
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - Hosting Plan: $15/month
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - Maintenance: $30/month (optional)
                    </small>
                    <small className="d-flex mt-3">
                      <span>
                        * SEO package <u>requires</u> a new website
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 2: SEO Container */}
          <div className="container col-md-4">
            <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
              <span className="text-secondary">Step 2:</span> SEO
            </p>
            <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
              <div className="text-center pt-5">
                <i className="fas fa-3x fa-search-location text-secondary mb-4 d-block"></i>
                <h3 className="mt-2">
                  Organic &
                  <br />
                  Local SEO
                </h3>
                <div className="container border mt-3 py-3">
                  <small className="d-block text-info">
                    Full-Service SEO Package
                  </small>
                  <span className="d-block text-muted lead">$1,000/month</span>
                  <span className="d-block text-primary bg-purple mt-4">
                    Save $500!
                  </span>
                  <small className="d-block text-muted mt-2 px-2">
                    (Compared to{' '}
                    <a
                      className="text-info"
                      href="https://www.rankpay.com/seo-cost/"
                    >
                      average SEO cost
                    </a>
                    )
                  </small>
                </div>
                <div className="container py-4 text-left">
                  <span className="d-flex my-2">
                    <strong className="mb-3">Includes:</strong>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>SEO Strategy:</strong> research, plan and schedule
                      for success
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Organic SEO:</strong> rank your top keyword
                      phrases
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Local SEO:</strong> Google My Business & location
                      pages
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-secondary mt-1"></i>
                    <span className="ml-2">
                      <strong>Social Media:</strong> setup & image optimization
                    </span>
                  </span>
                  <div className="text-danger mt-5">
                    <small>Monthly SEO Plans:</small>
                    <small className="d-flex ml-2 mt-3">
                      - Contract is month-to-month
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - You decide each month to renew
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - Generally takes 4-6 months to rank
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3: Add-Ons Container */}
          <div className="container col-md-4">
            <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
              <span className="text-secondary">Step 3:</span> Marketing
            </p>
            <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
              <div className="text-center pt-5">
                <i className="fas fa-3x fa-funnel-dollar text-secondary mb-4 d-block"></i>
                <h3 className="mt-2">
                  Marketing
                  <br />
                  Services
                </h3>
                <div className="container border mt-3 py-3">
                  <small className="d-block text-info">
                    Full-Service SEO Package
                  </small>
                  <span className="d-block text-muted lead">Rates Vary</span>
                  <span className="d-block text-primary bg-purple mt-4">
                    Bundle All 3 & Save $$
                  </span>
                  <small className="d-block text-muted mt-2 px-2">
                    (Save <span className="text-secondary">5%</span> off total
                    cost)
                  </small>
                </div>
                <div className="container py-4 text-left">
                  <span className="d-flex my-2">
                    <strong className="mb-3">Options:</strong>
                  </span>
                  <span className="d-flex mb-5">
                    <i className="fas fa-chevron-circle-right text-secondary mt-1"></i>
                    <span className="ml-2">
                      Pay-Per-Click (PPC) Ads
                      <span className="mt-3 d-block">
                        <span className="text-secondary border border-primary rounded p-2">
                          <strong className="text-dark">Price</strong>: 20% of
                          Budget
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="d-flex mb-5">
                    <i className="fas fa-chevron-circle-right text-secondary mt-1"></i>
                    <span className="ml-2">
                      Facebook Ads Campaign
                      <span className="mt-3 d-block">
                        <span className="text-secondary border border-primary rounded p-2">
                          <strong className="text-dark">Price</strong>: 20% of
                          Budget
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="d-flex mb-4">
                    <i className="fas fa-chevron-circle-right text-secondary mt-1"></i>
                    <span className="ml-2">
                      Email Marketing Campaign
                      <span className="mt-3 d-block">
                        <span className="text-secondary border border-primary rounded p-2">
                          <strong className="text-dark">Price</strong>: $50/hour
                        </span>
                      </span>
                    </span>
                  </span>
                  <div className="text-danger mt-5">
                    <small>Minimum Requirements:</small>
                    <small className="d-flex ml-2 mt-3">
                      - Budgets must be at least $500
                    </small>
                    <small className="d-flex mt-3">
                      * Marketing Services are optional
                    </small>
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

export default PricingSection__FullService;

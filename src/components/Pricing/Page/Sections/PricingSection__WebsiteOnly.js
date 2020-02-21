import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const PricingSection__WebsiteOnly = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingSection__WebsiteOnlyQ {
      masthead: file(relativePath: { eq: "images/bg-img-coding-website.jpg" }) {
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
        <div id="website-only" className="text-center pt-5 drop-shadow-dark">
          <i className="fas fa-3x fa-globe mb-3 text-primary"></i>
          <h3 className="mt-2 text-white">Website Only</h3>
          <hr className="divider mt-4" />
        </div>
        <div className="row justify-content-center align-items-baseline pt-5 p-3">
          <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
            <p className="text-white px-5">
              Are you just looking for a modern, professional website to wow
              your customers and showcase your business?
            </p>
            <p className="text-primary">This package is for you!</p>
          </div>
        </div>
        <div className="row justify-content-center align-items-baseline py-5 px-md-3">
          <div className="container col-md-4">
            <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
              <span className="text-secondary">Step 1:</span> Website
            </p>
            <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
              <div className="text-center pt-5">
                <i className="fas fa-3x fa-laptop-code text-info mb-4 d-block"></i>
                <h3 className="mt-2">
                  Web Design &<br />
                  Development
                </h3>
                <div className="container border mt-3 py-3">
                  <small className="d-block text-info">
                    Website Only Package
                  </small>
                  <span className="d-block text-muted lead">
                    $2,000 base rate
                  </span>
                  <small className="d-block text-muted">+ $300 per page</small>
                  <span className="d-block text-primary bg-purple mt-4">
                    Save $3,260!
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
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Setup:</strong> all the technical stuff
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Design:</strong> clean & professional
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Develop:</strong> custom hand-coded
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container col-md-4">
            <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
              <span className="text-secondary">Step 2:</span> Maintenance
            </p>
            <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
              <div className="text-center pt-5">
                <i className="fas fa-3x fa-tools text-info mb-4 d-block"></i>
                <h3 className="mt-2">
                  Maintenance
                  <br />
                  Program
                </h3>
                <div className="container border mt-3 py-3">
                  <small className="d-block text-info">
                    Website Only Package
                  </small>
                  <span className="d-block text-muted lead">$30/month</span>
                  <small className="d-block text-muted">Cancel anytime!</small>
                  <span className="d-block text-primary bg-purple mt-4">
                    Safe & Secure!
                  </span>
                  <small className="d-block text-muted mt-2 px-2">
                    (Don't wait for a disaster!)
                  </small>
                </div>
                <div className="container py-4 text-left">
                  <span className="d-flex my-2">
                    <strong className="mb-3">Includes:</strong>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Security:</strong> scans & updates
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Backups:</strong> local & cloud
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Restore:</strong> previous states
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>Testing:</strong> pages, links, forms
                    </span>
                  </span>
                  <div className="text-danger mt-5">
                    <small>Maintenance Program Covers:</small>
                    <small className="d-flex ml-2 mt-3">
                      - Cost of new domain: $15/year
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - Cost of Hosting Plan: $15/month
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - Cancel anytime!
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container col-md-4">
            <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
              <span className="text-secondary">Step 3:</span> Add-Ons
            </p>
            <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
              <div className="text-center pt-5">
                <i className="fas fa-3x fa-concierge-bell text-info mb-4 d-block"></i>
                <h3 className="mt-2">
                  Service
                  <br />
                  Program
                </h3>
                <div className="container border mt-3 py-3">
                  <small className="d-block text-info">
                    Website Only Package
                  </small>
                  <span className="d-block text-muted lead">$75/hour</span>
                  <small className="d-block text-muted">
                    Use for anything you need!
                  </small>
                  <span className="d-block text-primary bg-purple mt-4">
                    Bundle Hours & Save $$
                  </span>
                  <small className="d-block text-muted mt-2 px-2">
                    (Save <span className="text-info">$100</span> for every 20
                    hours!)
                  </small>
                </div>
                <div className="container py-4 text-left">
                  <span className="d-flex my-2">
                    <strong className="mb-3">Options:</strong>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="fas fa-chevron-circle-right text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>New</strong> Features
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="fas fa-chevron-circle-right text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>New</strong> Functions
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="fas fa-chevron-circle-right text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>New</strong> Pages
                    </span>
                  </span>
                  <span className="d-flex mb-2">
                    <i className="fas fa-chevron-circle-right text-info mt-1"></i>
                    <span className="ml-2">
                      <strong>New</strong> Graphics
                    </span>
                  </span>
                  <div className="text-danger mt-5">
                    <small>Service Package Terms:</small>
                    <small className="d-flex ml-2 mt-3">
                      - Maximum of 40 hours per month
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - Work beyond 40 hours is a new project
                    </small>
                    <small className="d-flex ml-2 mt-1">
                      - New projects require new contracts
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

export default PricingSection__WebsiteOnly;

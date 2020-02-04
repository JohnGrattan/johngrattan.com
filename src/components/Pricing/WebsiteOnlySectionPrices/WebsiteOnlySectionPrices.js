import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const WebsiteOnlySectionPrices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query WebsiteOnlySectionPricesQ {
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
      <div className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-globe mb-3 text-primary"></i>
        <h3 className="mt-2 text-white">Website Only</h3>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p className="text-white">
            Just need a modern business website you can share across all
            devices?
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
                  Website Only Package
                </small>
                <span className="d-block text-muted lead">
                  $2,000 base rate
                </span>
                <small className="d-block text-muted">+ $300 per page</small>
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
                    <strong>Setup</strong> all the technical stuff
                  </span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    <strong>Discover</strong> exactly what you want
                  </span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    <strong>Strategy</strong> for long term success
                  </span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    <strong>Design</strong> for your users
                  </span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    <strong>Develop</strong> with the highest standards
                  </span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    <strong>Testing</strong> for quality assurance
                  </span>
                </span>
                <div className="text-danger mt-5">
                  <small>Recurring Payments:</small>
                  <small className="d-flex mt-3">- New Domain: $15/year</small>
                  <small className="d-flex mt-1">
                    - Hosting Plan: $15/month
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Step 2: Maintenance Container */}
        <div className="container col-md-4">
          <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
            <span className="text-secondary">Step 2:</span> Maintenance
          </p>
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="text-center pt-5">
              <i className="fas fa-3x fa-tools text-secondary mb-4 d-block"></i>
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
                <small className="d-block text-muted">Cancel anytime</small>
                <span className="d-block text-primary bg-purple mt-4">
                  Save $1,000!
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
              <p className="container py-4 text-left">
                <span className="d-flex my-2">
                  <strong className="mb-3">Includes:</strong>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Monthly SEO Strategy</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Competitor & Keyword Research</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Technical SEO</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">On-Page & Off-Page SEO</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Service & Location Landing Pages</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Google Map Pack Optimization</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Google My Business Optimization</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Review App Optimization</span>
                </span>
                <span className="d-flex mb-2">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Citation Building</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Step 3: Add-Ons Container */}
        <div className="container col-md-4">
          <p className="mt-2 p-3 lead text-center text-white bg-purple border border-white">
            <span className="text-secondary">Step 3:</span> Add-Ons
          </p>
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="text-center pt-5">
              <i className="fas fa-3x fa-user-plus text-secondary mb-4 d-block"></i>
              <h3 className="mt-2">
                Optional
                <br />
                Add-Ons
              </h3>
              <div className="container border mt-3 py-3">
                <small className="d-block text-info">
                  Website Only Package
                </small>
                <span className="d-block text-muted lead">
                  $1,500 flat rate
                </span>
                <span className="d-block text-primary bg-purple mt-4">
                  Save $2,000!
                </span>
                <small className="d-block text-muted mt-2 px-2">
                  (Compared to{' '}
                  <a
                    className="text-info"
                    href="https://www.websitebuilderexpert.com/building-websites/how-much-should-a-website-cost/"
                  >
                    average ?????? cost
                  </a>
                  )
                </small>
              </div>
              <p className="container py-4 text-left">
                <span className="d-flex my-2">
                  <strong className="mb-3">Options:</strong>
                </span>
                <span className="d-flex mb-4">
                  <i className="fas fa-chevron-circle-right text-secondary mt-1"></i>
                  <span className="ml-2">
                    Pay-Per-Click (PPC) Google AdWords
                    <span className="mt-1 d-block text-muted">
                      <strong className="text-secondary">Price</strong>: 20% of
                      Budget
                    </span>
                  </span>
                </span>
                <span className="d-flex mb-4">
                  <i className="fas fa-chevron-circle-right text-secondary mt-1"></i>
                  <span className="ml-2">
                    Facebook Ads Campaign
                    <span className="mt-1 d-block text-muted">
                      <strong className="text-secondary">Price</strong>: 20% of
                      Budget
                    </span>
                  </span>
                </span>
                <span className="d-flex mb-4">
                  <i className="fas fa-chevron-circle-right text-secondary mt-1"></i>
                  <span className="ml-2">
                    Email Marketing Campaign
                    <span className="mt-1 d-block text-muted">
                      <strong className="text-secondary">Price</strong>: 20% of
                      Budget
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default WebsiteOnlySectionPrices;

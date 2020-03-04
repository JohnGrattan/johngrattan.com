import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Table } from 'react-bootstrap';

const PricingSection__MarketingServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingSection__MarketingServicesQ {
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
        <div
          id="marketing-services"
          className="text-center pt-5 drop-shadow-dark"
        >
          <i className="fas fa-3x fa-funnel-dollar mb-3 text-primary"></i>
          <h3 className="mt-2 text-white">Marketing Services</h3>
          <hr className="divider mt-4" />
        </div>
        <div className="row justify-content-center align-items-baseline pt-5 p-3">
          <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
            <p className="text-white px-5">
              Are you looking to immediately drive traffic to your website with
              paid advertising solely based on your budget?
            </p>
            <p className="text-primary">These services are for you!</p>
          </div>
        </div>
        <h4 className="mt-5 bg-info py-3 drop-shadow text-white text-center">
          <span className="drop-shadow-dark">Monthly Marketing Services</span>
        </h4>
        <div className="mb-5 pb-5">
          <Table
            className="bg-white drop-shadow-dark"
            striped
            borderless
            responsive
            hover
            size="sm"
          >
            <thead>
              <tr className="text-white bg-purple">
                <th className="py-3 pl-3">Services</th>
                <th className="py-3 pl-3">
                  Price <span className="text-danger">*</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Pay-Per-Click (PPC)</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Setup:</em> Google Ads Account
                    </span>
                  </span>
                  <span className="d-flex ml-3 my-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Strategy:</em> Sales Funnel Optimization
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Research:</em> Keywords & Competitors
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Landing Pages:</em> Conversion Rate Optimized
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Testing:</em> Demographics & Copy
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Analysis:</em> Trends & Conversion Rates
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">
                  20% of budget <br />+ <br />
                  $300 / landing page
                </td>
              </tr>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Social Media (Paid Ads)</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Setup:</em> Social Ads Accounts
                    </span>
                  </span>
                  <span className="d-flex ml-3 my-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Strategy:</em> Sales Funnel Optimization
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Research:</em> Keywords & Competitors
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Landing Pages:</em> Conversion Rate Optimized
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Testing:</em> Demographics & Copy
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Analysis:</em> Trends & Conversion Rates
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">
                  20% of budget <br />+ <br />
                  $300 / landing page
                </td>
              </tr>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Social Media (Organic Reach)</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Setup:</em> Social Media Accounts
                    </span>
                  </span>
                  <span className="d-flex ml-3 my-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Optimization:</em> Profile Information
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Images:</em> Customized Per Platform
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Posts:</em> Sharable & Engaging Content
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">
                  $300 / mo <br />
                  (per platform)
                </td>
              </tr>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Email Campaign</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Setup:</em> Email Accounts
                    </span>
                  </span>
                  <span className="d-flex ml-3 my-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Integration:</em> Website & CRM
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Emails:</em> Customized Weekly
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Landing Pages:</em> Conversion Rate Optimized
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Testing:</em> Demographics & Copy
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Analysis:</em> Trends & Conversion Rates
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">
                  $300 / mo <br />+ <br />
                  $300 / landing page
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex">
            <small className="text-danger">*</small>
            <small className="text-danger ml-1 drop-shadow-dark font-weight-bold">
              Ad services require a minimum budget of $500.
            </small>
          </div>
          <div className="d-flex mt-3">
            <small className="text-danger">*</small>
            <small className="text-danger ml-1 drop-shadow-dark font-weight-bold">
              Email Campaigns require a marketing service platform such as
              Constant Contact, MailChimp, HubSpot, etc. <br />
              These monthly fees are separate and must be covered by the client,
              not my monthly price.
            </small>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PricingSection__MarketingServices;

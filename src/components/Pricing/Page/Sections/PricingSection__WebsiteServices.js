import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Table } from 'react-bootstrap';

const PricingSection__WebsiteServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingSection__WebsiteServicesQ {
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
      alt="John Grattan SEO & Web Design Pricing background section for Website services - laptop with code editor open showing web development code"
    >
      <div className="container">
        <div id="website-only" className="text-center pt-5 drop-shadow-dark">
          <i className="fas fa-3x fa-globe mb-3 text-primary"></i>
          <h3 className="mt-2 text-white">Website Services</h3>
          <hr className="divider mt-4" />
        </div>
        <div className="row justify-content-center align-items-baseline pt-5 p-3">
          <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
            <p className="text-white px-5">
              Are you just looking for a modern, professional website to impress
              your customers and showcase your business?
            </p>
            <p className="text-primary">These services are for you!</p>
          </div>
        </div>
        <h4 className="mt-5 bg-info py-3 drop-shadow text-white text-center">
          <span className="drop-shadow-dark">Single Website Services</span>
        </h4>
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
                <strong>Web Design & Development</strong>
                <span className="mt-3 mb-2 ml-2 d-flex text-info">Design:</span>
                <span className="d-flex ml-3 mt-2 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Strategy:</em> User Needs & Business Goals
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Analysis:</em> Industry & Competition
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Architecture:</em> Information & Decision Paths
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Content:</em> Strategy & Creation
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Navigation:</em> Primary & Secondary
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Marketing:</em> Call-to-Action (CTA)
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Responsive:</em> All Devices & Sizes
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Compatibility:</em> All Browsers
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Mobile-First:</em> Progressive Enhancement
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Images:</em> Custom & Premium Stock
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Integrations:</em> Social Media & Email Opt-Ins
                  </span>
                </span>

                <span className="mt-3 mb-2 ml-2 d-flex text-info">
                  Development:
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Front-End:</em> GatsbyJS + ReactJS
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Back-End:</em> Node.js + GraphQL
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Deployment:</em> Netlify
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Headless CMS:</em> NetlifyCMS
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Version Control:</em> Git + GitHub
                  </span>
                </span>

                <span className="mt-3 mb-2 ml-2 d-flex text-info">
                  SEO Ready:
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Technical SEO:</em> Speed & Security
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>On-Site SEO:</em> Basic tags & structure
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Google Analytics:</em> Setup
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Google Search Console:</em> Setup
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Robots.txt File:</em> Setup & Optimize
                  </span>
                </span>
                <span className="d-flex ml-3 mb-3">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>XML Site Map:</em> Setup & Upload
                  </span>
                </span>
              </td>
              <td className="pl-3 pt-3">
                $2000 base <br />+ <br />
                $300 / page
              </td>
            </tr>
            <tr>
              <td className="pl-3 pt-3">
                <strong>Service Retainer</strong>
                <span className="mt-3 mb-2 ml-2 d-flex text-info">
                  Options:
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Updates:</em> Website Design
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>Changes:</em> Content & Images
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>New Features:</em> Design & Develop
                  </span>
                </span>
                <span className="d-flex ml-3 mb-3">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">
                    <em>New Functions:</em> Design & Develop
                  </span>
                </span>
              </td>
              <td className="pl-3 pt-3">$50 / hour</td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex pb-5">
          <small className="text-danger">*</small>
          <small className="text-danger ml-1 drop-shadow-dark font-weight-bold">
            A professional 5-page business website (Home, About, Contact,
            Services, Blog) would cost $3,500 ($2,000 base + ($300 * 5-pages)).
          </small>
        </div>
        <h4 className="mt-5 bg-info py-3 drop-shadow text-white text-center">
          <span className="drop-shadow-dark">Monthly Website Services</span>
        </h4>
        <div className="mb-5 pb-5">
          <Table
            className="bg-white"
            striped
            borderless
            responsive
            hover
            size="sm"
          >
            <thead>
              <tr className="text-white bg-purple">
                <th className="py-3 pl-3">Services</th>
                <th className="py-3 pl-3">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Hosting</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Serverless Cloud Computing</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">400GB Bandwidth/Month</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Continuous Deployment</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Password-Protected Sites</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">7-day Log History</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Unlimited Rollbacks</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Branch Previews</span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">Global CDN</span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">99.99% Uptime SLA</span>
                  </span>
                </td>
                <td className="pl-3 pt-3">$25/mo</td>
              </tr>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Maintenance Plan</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Security:</em> Scans & Updates
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Backups:</em> Local & Cloud
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Restore:</em> Previous States
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2">
                      <em>Testing:</em> Pages, Links & Forms
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">$25/mo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PricingSection__WebsiteServices;

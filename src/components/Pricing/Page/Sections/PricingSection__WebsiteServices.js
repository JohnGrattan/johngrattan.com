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
                <span className="d-flex ml-3 mt-3 mb-1 font-weight-bold">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">Design</span>
                </span>
                <span className="d-flex ml-4 mt-1 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Strategy: User Needs & Business Goals
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Analysis: Industry & Competition
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Architecture: Information & Decision Paths
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Content: Strategy & Creation
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Navigation: Primary & Secondary
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Marketing: Call-to-Action (CTA)
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Responsive: All Devices & Sizes
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Compatibility: All Browsers
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Mobile-First: Progressive Enhancement
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Images: Custom & Premium Stock
                  </span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Integrations: Social Media & Email Opt-Ins
                  </span>
                </span>

                <span className="d-flex ml-3 mt-2 mb-1 font-weight-bold">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">Development</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Front-End: GatsbyJS + ReactJS
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Back-End: Node.js + GraphQL
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Deployment: Netlify</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Headless CMS: NetlifyCMS
                  </span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Version Control: Git + GitHub
                  </span>
                </span>

                <span className="d-flex ml-3 mt-2 mb-1 font-weight-bold">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2">SEO Ready</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Technical SEO: Speed & Security
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    On-Site SEO: Basic Tags & Structure
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Google Analytics: Setup
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Google Search Console: Setup
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Robots.txt File: Setup & Optimize
                  </span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    XML Site Map: Setup & Upload
                  </span>
                </span>
              </td>
              <td className="pl-3 pt-3">
                $1000 base <br />+ <br />
                $100 / page
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex pb-5">
          <small className="text-danger">*</small>
          <small className="text-danger ml-1 drop-shadow-dark font-weight-bold">
            A professional 5-page business website (example: Home, About,
            Contact, Services, Blog)
            <br />
            would cost $1,500 ($1,000 base + ($100 * 5-pages)).
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
                  <strong>Maintenance Plan</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      Security: Scans & Updates
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      Backups: Local & Cloud
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      Restore: Previous States
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      Testing: Pages, Links & Forms
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">$50 / mo</td>
              </tr>
              <tr>
                <td className="pl-3 pt-3">
                  <strong>Service Retainer Plan</strong>
                  <span className="d-flex ml-3 mt-2 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      Updates: Website Design
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      Changes: Content & Images
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-1">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      New Features: Design & Develop
                    </span>
                  </span>
                  <span className="d-flex ml-3 mb-3">
                    <i className="far fa-check-square text-info mt-1"></i>
                    <span className="ml-2 font-italic">
                      New Functions: Design & Develop
                    </span>
                  </span>
                </td>
                <td className="pl-3 pt-3">$50 / hr</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PricingSection__WebsiteServices;

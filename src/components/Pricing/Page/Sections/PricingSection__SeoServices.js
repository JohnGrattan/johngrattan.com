import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Table } from 'react-bootstrap';

const PricingSection__SeoServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingSection__SeoServicesQ {
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
      alt="John Grattan SEO & Web Design Pricing background section for SEO services - computer screen with SEO stats"
    >
      <div className="container">
        <div id="full-service" className="text-center pt-5 drop-shadow-dark">
          <i className="fas fa-3x fa-rocket mb-3 text-primary"></i>
          <h3 className="mt-2 text-white">SEO Services</h3>
          <hr className="divider mt-4" />
        </div>
        <div className="row justify-content-center align-items-baseline pt-5 p-3">
          <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
            <p className="text-white px-5">
              Are you looking for a long term marketing plan to boost your
              rankings and drive new leads to your business website?
            </p>
            <p className="text-primary">These services are for you!</p>
          </div>
        </div>
        <h4 className="mt-5 bg-info py-3 drop-shadow text-white text-center">
          <span className="drop-shadow-dark">Single SEO Services</span>
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
                Base Price <span className="text-danger">*</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-3 pt-3">
                <strong>SEO Site Audit</strong>
                <span className="d-flex ml-3 mt-2 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Technical SEO</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">On-Page SEO</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Off-Page SEO</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Local SEO</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Content Analysis</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">UI/UX Analysis</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Data & Analytics</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Prioritization</span>
                </span>
                <span className="d-flex ml-3 mb-3">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Consultation</span>
                </span>
              </td>
              <td className="pl-3 pt-3">$500+</td>
            </tr>
            <tr>
              <td className="pl-3 pt-3">
                <strong>Google My Business</strong>
                <span className="d-flex ml-3 mt-2 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Setup</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-italic">Optimization</span>
                </span>
              </td>
              <td className="pl-3 pt-3">$50</td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex pb-5">
          <small className="text-danger">*</small>
          <small className="text-danger ml-1 drop-shadow-dark font-weight-bold">
            Base price is determined by the required minimum amount of work to
            complete the services for a basic 1-5 page website. <br />
            Prices will increase according to the size and complexity of your
            website. Custom quotes are necessary.
          </small>
        </div>
        <h4 className="mt-5 bg-info py-3 drop-shadow text-white text-center">
          <span className="drop-shadow-dark">Monthly SEO Services</span>
        </h4>
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
              <th className="py-3 pl-3">
                Base Price <span className="text-danger">*</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-3 pt-3">
                <strong>Full-Service SEO</strong>
                <span className="d-flex ml-3 mt-2 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-weight-bold">SEO Site Audit</span>
                </span>
                <span className="d-flex ml-4 mt-1 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Technical SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">On-Page SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Off-Page SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Local SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Content Analysis</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">UI/UX Analysis</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Data & Analytics</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Prioritization</span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Consultation</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-weight-bold">SEO Strategy</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Local SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Organic SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Keyword Research</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Competitor Research</span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Content Management</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-weight-bold">Local SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">GMB Optimization</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Local Citations</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Site Localization</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Structured Data</span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Location Pages</span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-weight-bold">Organic SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Technical SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">On-Page SEO</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Off-Page SEO</span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Social Media Marketing
                  </span>
                </span>
                <span className="d-flex ml-3 mb-1">
                  <i className="far fa-check-square text-info mt-1"></i>
                  <span className="ml-2 font-weight-bold">
                    Reports & Analysis
                  </span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Site Traffic</span>
                </span>
                <span className="d-flex ml-4 mb-1">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">Site Performance</span>
                </span>
                <span className="d-flex ml-4 mb-3">
                  <i className="fas fa-long-arrow-alt-right text-info mt-1"></i>
                  <span className="ml-2 font-italic">
                    Keyword Rank Tracking
                  </span>
                </span>
              </td>
              <td className="pl-3 pt-3">$1,000+ / mo</td>
            </tr>
          </tbody>
        </Table>
        <div className="mb-5 pb-5 d-flex">
          <small className="text-danger">*</small>
          <small className="text-danger ml-1 drop-shadow-dark font-weight-bold">
            Base price is determined by the required minimum amount of work to
            complete the services for a basic 1-5 page website. <br />
            Prices will increase according to the size and complexity of your
            website. Custom quotes are necessary.
          </small>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PricingSection__SeoServices;

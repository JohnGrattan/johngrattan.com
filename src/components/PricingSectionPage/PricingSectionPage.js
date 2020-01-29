import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import FullServiceSeoSectionPrices from '../FullServiceSeoSectionPrices/FullServiceSeoSectionPrices';
import WebsiteOnlySectionPrices from '../WebsiteOnlySectionPrices/WebsiteOnlySectionPrices';

import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

// BG Query
const PricingSectionPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingSectionPageQ {
      texture: file(
        relativePath: { eq: "images/textures/gradient-squares.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.texture.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
      alt="about John Grattan background"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          {/* Pricing Structures Container */}
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">Pricing Structures</h2>
              <hr className="divider my-4" />
            </div>
            {/* Options Overview Container */}
            <div className="container col-md-8 py-3 my-2 text-white bg-info drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Get more leads with these options:
              </p>
              <div className="row justify-content-around align-items-end my-4">
                <div className="col-md-4 mb-5 mb-md-0 text-center drop-shadow">
                  <i className="fas fa-3x fa-rocket mb-3 text-primary"></i>
                  <br />
                  <span>Full-Service SEO</span>
                </div>
                <div className="col-md-4 mb-5 mb-md-0 text-center drop-shadow">
                  <i className="fas fa-3x fa-globe mb-3 text-primary"></i>
                  <br />
                  <span>Website Only</span>
                </div>
                <div className="col-md-4 text-center drop-shadow">
                  <i className="fas fa-3x fa-thumbs-up mb-3 text-primary"></i>
                  <br />
                  <span>One-Time Services</span>
                </div>
              </div>
            </div>
          </div>
          {/* Full-Service SEO Container */}
          <FullServiceSeoSectionPrices className="container my-5 mx-3 border rounded shadow bg-img-full-service-seo" />
          {/* Website Only Container */}
          <WebsiteOnlySectionPrices className="container my-5 mx-3 border rounded shadow bg-img-full-service-seo" />
          <div className="container bg-texture-2 m-5 border rounded shadow">
            <div className="text-center pt-5">
              <i className="fas fa-3x fa-thumbs-up mb-3 text-primary"></i>
              <h2 className="mt-2">One-Time Services</h2>
              <hr className="divider mt-4" />
            </div>
            <div className="pt-5">
              <h3 className="mt-2 ml-5">
                <i className="far fa-comment text-secondary"></i> Social Media
              </h3>
            </div>
            <div className="container pb-5 px-5">
              <Table responsive striped borderless>
                <thead className="lead">
                  <tr className="text-muted">
                    <th>Service</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Social Media Optimization</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td>Social Media Posts</td>
                    <td>$50</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <h3 className="mt-2 ml-5">
              <i className="far fa-envelope text-secondary"></i> Email
            </h3>
            <div className="container pb-5 px-5">
              <Table responsive striped borderless>
                <thead className="lead">
                  <tr className="text-muted">
                    <th>Service</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email Marketing</td>
                    <td>$50/campaign</td>
                  </tr>
                  <tr>
                    <td>Business Email Setup</td>
                    <td>$50</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PricingSectionPage;

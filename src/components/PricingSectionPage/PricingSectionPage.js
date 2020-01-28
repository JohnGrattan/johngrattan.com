import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

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
        <div className="row justify-content-center align-items-center border bg-white shadow rounded">
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">Pricing Structures</h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Get more clients with these options:
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
              {/* <p className="m-3">
                Every business is unique and must meet their customers' needs
                accordingly. Therefore, no two packages are the same.
              </p>
              <p className="m-3">
                This makes it difficult to pinpoint an exact number without
                going through the proper quoting process.
              </p>
              <p className="m-3">
                In order to be as transparent as possible, here is a general
                pricing guide to give you an idea of the costs.
              </p> */}
            </div>
          </div>
          <div className="container bg-dark my-5 mx-3 border rounded shadow">
            <div className="text-center pt-5 drop-shadow-dark">
              <h3 className="mt-2 text-white">Full-Service SEO</h3>
              <hr className="divider mt-4" />
            </div>
            <div className="row justify-content-center align-items-baseline py-3 py-md-5">
              <div className="container">
                <p className="text-white text-center">
                  This option is a complete digital optimization for your
                  business!
                </p>
              </div>
              <div className="text-center pt-md-5 col-md-3 drop-shadow">
                <p className="mt-2 p-3 lead text-white bg-purple border border-white">
                  <span className="text-secondary">Step 1:</span> Website
                </p>
              </div>
              <div className="text-center pt-md-5 col-md-3 drop-shadow">
                <p className="mt-2 p-3 lead text-white bg-purple border border-white">
                  <span className="text-secondary">Step 2:</span> SEO
                </p>
              </div>
              <div className="text-center pt-md-5 col-md-3 drop-shadow">
                <p className="mt-2 p-3 lead text-white bg-purple border border-white">
                  <span className="text-secondary">Step 3:</span> Results
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-baseline py-5">
              <div className="container col-md-10 mx-3 mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center pt-5">
                  <i className="fas fa-3x fa-award text-secondary mb-4 d-block"></i>
                  <h3 className="mt-2">Web Design & Development</h3>
                  <div className="container col-md-8 border mx-auto mt-3 py-3">
                    <small className="d-block text-secondary">
                      SEO Package
                    </small>
                    <span className="d-block text-muted lead">
                      $1,500 flat rate
                    </span>
                    <span className="d-block text-primary bg-purple mt-4">
                      Save $2,000!
                    </span>
                    <small className="d-block text-muted mt-2 px-2">
                      (Compared to the Website 'Gold Package' with 5-pages)
                    </small>
                  </div>
                  <p className="container py-4 text-left">
                    <span className="d-flex my-2 mb-2">
                      <strong className="mb-3">
                        Includes Everything in the Website 'Gold Package':
                      </strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Setup</strong>: Domain
                        <span className="text-danger">*</span>, Hosting
                        <span className="text-danger">**</span>, Staging, DNS,
                        SSL, CDN, Git, Headless CMS
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Discovery</strong>: User Needs & Experience,
                        Features, Functions, Branding, Color Palette, Content,
                        Images
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Strategy</strong>: Sales Funnel, Clear
                        Call-to-Action, Information Architecture, Conversion
                        Rate Optimization
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Design</strong>: Bespoke Layouts, 100%
                        Responsive, Universal Design Principles, Consistency
                        Across Pages, Engaging Animations
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Development</strong>: Efficiently Hand Coded,
                        Built Mobile First, High Performance Front-End, Secure
                        Back-End, Server Side Rendering, Maintainable, Scalable,
                        Accessibility
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Testing</strong>: Efficiently Hand Coded, Built
                        Mobile First, High Performance Front-End, Secure
                        Back-End, Server Side Rendering, Maintainable, Scalable,
                        Accessibility
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
                    </span>
                    <div className="text-danger mt-5">
                      <p>
                        * Purchasing a new domain comes with a recurring payment
                        of $10/month
                      </p>
                      <p>
                        ** Hosting comes with a recurring payment of $10/month
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center pt-5">
              <p className="mt-2 p-3 lead text-white bg-purple border border-white">
                Choose a Marketing Package:
              </p>
            </div>
            <div className="row justify-content-center align-items-baseline py-5">
              <div className="container col-md-3 mx-3 mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center pt-5">
                  <i className="fas fa-2x fa-award text-bronze mb-4 d-block"></i>
                  <h3 className="mt-2">Local SEO</h3>
                  <div className="border mx-3 mt-3 py-1">
                    <small className="d-block text-bronze">
                      Bronze Package
                    </small>
                    <span className="d-block text-muted lead">$500/month</span>
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
                      <span className="ml-2">
                        Competitor & Keyword Research
                      </span>
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
                      <span className="ml-2">
                        Service & Location Landing Pages
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
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
              <div className="container col-md-3 mx-3 mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center pt-5">
                  <i className="fas fa-2x fa-award text-silver mb-4 d-block"></i>
                  <h3 className="mt-2">SEO + PPC</h3>
                  <div className="border mx-3 mt-3 py-1">
                    <small className="d-block text-muted">Silver Package</small>
                    <span className="d-block text-muted lead">
                      $1,000/month
                    </span>
                  </div>
                  <p className="container py-4 text-left">
                    <span className="d-flex my-2">
                      <strong className="mb-3">Includes Bronze Plus:</strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Monthly SEO Strategy</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Competitor & Keyword Research
                      </span>
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
                      <span className="ml-2">
                        Service & Location Landing Pages
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="container col-md-3 mx-3 mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center pt-5">
                  <i className="fas fa-2x fa-award text-gold mb-4 d-block"></i>
                  <h3 className="mt-2">Plus Social Media</h3>
                  <div className="border mx-3 mt-3 py-1">
                    <small className="d-block text-gold">Gold Package</small>
                    <span className="d-block text-muted lead">
                      $1,500/month
                    </span>
                  </div>
                  <p className="container py-4 text-left">
                    <span className="d-flex my-2">
                      <strong className="mb-3">Bronze & Silver Plus:</strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Monthly SEO Strategy</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Competitor & Keyword Research
                      </span>
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
                      <span className="ml-2">
                        Service & Location Landing Pages
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-dark my-5 mx-3 border rounded shadow">
            <div className="text-center pt-5 drop-shadow-dark">
              <h3 className="mt-2 text-white">Website Packages</h3>
              <hr className="divider mt-4" />
            </div>
            <div className="row justify-content-center align-items-baseline py-5">
              <div className="container col-md-3 mx-2 mb-3 p-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center pt-5">
                  <i className="fas fa-2x fa-award text-bronze mb-4 d-block"></i>
                  <h3 className="mt-2">Web Design & Development</h3>
                  <div className="border mx-3 mt-3 py-1">
                    <small className="d-block text-bronze">
                      Bronze Package
                    </small>
                    <span className="d-block text-muted lead">$1,000 base</span>
                    <span className="d-block text-muted">+ $300/page</span>
                    <small className="d-block text-muted mt-2 px-2">
                      Example: 5 page website (Home, About, Services, Blog,
                      Contact) would cost $2,500
                    </small>
                  </div>
                  <p className="container py-4 text-left">
                    <span className="d-flex my-2">
                      <strong className="mb-3">Includes:</strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Setup</strong>: domain, hosting, DNS, SSL, CDN,
                        Git, staging site
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Discovery</strong>: user needs & experience,
                        features, functions, branding, color palette, content,
                        images
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        <strong>Design</strong>: responsive layouts for all
                        devices, adheres to universal design principles, clear
                        call-to-actions and navigation to optimize conversions
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">On-Page & Off-Page SEO</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Service & Location Landing Pages
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="container col-md-3 mx-2 mb-3 p-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center py-5">
                  <i className="fas fa-2x fa-award text-silver mb-4 d-block"></i>
                  <h3 className="mt-2">Web Design & Development</h3>
                  <div className="border mx-3 mt-3 py-1">
                    <small className="d-block text-muted">Silver Package</small>
                    <span className="d-block text-muted lead">$1,500 base</span>
                    <span className="d-block text-muted">+ $300/page</span>
                    <small className="d-block text-muted mt-2 px-2">
                      Example: 5 page website (Home, About, Services, Blog,
                      Contact) would cost $3,000
                    </small>
                  </div>
                  <p className="container py-4 text-left">
                    <span className="d-flex my-2">
                      <strong className="mb-3">Includes Bronze Plus:</strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Monthly SEO Strategy</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Competitor & Keyword Research
                      </span>
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
                      <span className="ml-2">
                        Service & Location Landing Pages
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="container col-md-3 mx-2 mb-3 p-2 border border-secondary drop-shadow bg-texture-2">
                <div className="text-center py-5">
                  <i className="fas fa-2x fa-award text-gold mb-4 d-block"></i>
                  <h3 className="mt-2">Web Design & Development</h3>
                  <div className="border mx-3 mt-3 py-1">
                    <small className="d-block text-gold">Gold Package</small>
                    <span className="d-block text-muted lead">$2,000 base</span>
                    <span className="d-block text-muted">+ $300/page</span>
                    <small className="d-block text-muted mt-2 px-2">
                      Example: 5 page website (Home, About, Services, Blog,
                      Contact) would cost $3,500
                    </small>
                  </div>
                  <p className="container py-4 text-left">
                    <span className="d-flex my-2">
                      <strong className="mb-3">Bronze & Silver Plus:</strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Monthly SEO Strategy</span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Competitor & Keyword Research
                      </span>
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
                      <span className="ml-2">
                        Service & Location Landing Pages
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Google Map Pack Optimization</span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Google My Business Optimization
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-texture-2 m-5 border rounded shadow">
            <div className="text-center pt-5">
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

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Button from '../Button/Button';

const ServicesSectionHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ServicesSectionHomeQ {
      masthead: file(relativePath: { eq: "images/bg-img-services.jpg" }) {
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
      alt="digital marketing services background"
    >
      <div className="container">
        <h2 className="text-center mt-0 text-white drop-shadow-dark">
          Digital Marketing Services
        </h2>
        <hr className="divider mt-4" />
        <div className="row">
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-chess text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Strategy & Planning</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  We'll work together to diagnose your unique challenges and
                  formulate viable solutions to establish{' '}
                  <strong className="text-secondary">
                    domain authority within your industry
                  </strong>
                  .
                </p>
                <p>
                  I will upgrade your website from a simple brochure to a{' '}
                  <strong className="text-secondary">
                    trusted resource of value and information
                  </strong>{' '}
                  for your customers.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">SEO content site map</span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Service & location landing pages</span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Plan adaptation to analytics</span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services/strategy-and-planning"
                  btnlabel="See My Strategy"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="my-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-drafting-compass text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Professional Design</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  Users instantly judge your credibility the second they see
                  your design. This{' '}
                  <strong className="text-secondary">
                    first impression is critical to user engagement
                  </strong>{' '}
                  and can easily sabotage a conversion.
                </p>
                <p>
                  If your website is{' '}
                  <strong className="text-secondary">
                    outdated, malfunctioning or disorganized
                  </strong>
                  , I can help upgrade your design.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Responsive on all devices</span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Conversion rate optimization</span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">UI/UX focused layouts</span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services/web-design"
                  btnlabel="How I Design"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="mt-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">Custom Development</h3>
              <hr className="light" />
              <div className="text-muted mb-3 text-left my-3">
                <p>
                  Utilizing the latest web technologies will{' '}
                  <strong className="text-secondary">
                    prevent unwanted bloat, maintain clean code and result in
                    blazing speeds
                  </strong>{' '}
                  with ability to scale.
                </p>
                <p>
                  Let's{' '}
                  <strong className="text-secondary">
                    move past WordPress and cumbersome page builders
                  </strong>{' '}
                  to harness the power of modern development tools.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    Rank 90-100 on Google Pagespeed Insights
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    No servers, no database to get hacked
                  </span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Scalable for max ROI</span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services/web-development"
                  btnlabel="Modern Benefits"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center justify-content-center align-items-center">
            <div className="mt-5 border shadow p-3 bg-texture-2">
              <i className="fas fa-4x fa-chart-line text-primary mb-4 drop-shadow"></i>
              <h3 className="h4 mb-2">SEO & SEM Marketing</h3>
              <hr className="light" />
              <div className="text-muted mb-0 text-left my-3">
                <p>
                  It's imperative your business appears high on search engine
                  results pages. Let's make your site{' '}
                  <strong className="text-secondary">
                    visible and increase the amount of organic visitors
                  </strong>
                  .
                </p>
                <p>
                  With long term SEO and short term SEM, I can{' '}
                  <strong className="text-secondary">
                    drive traffic, generate quality leads to sales funnels
                  </strong>{' '}
                  and{' '}
                  <strong className="text-secondary">increase your ROI</strong>.
                </p>
              </div>
              <p className="text-muted mb-4 text-left">
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Leverage local SEO</span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">Competitor & keyword research</span>
                </span>
                <span className="d-flex">
                  <i className="far fa-check-square text-secondary mt-1"></i>
                  <span className="ml-2">
                    On-page and off-page optimization
                  </span>
                </span>
              </p>
              <div className="my-3">
                <Button
                  btnlink="/services/seo"
                  btnlabel="SEO & SEM Tips"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ServicesSectionHome;

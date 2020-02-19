import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PricingSection__FullService from './Sections/PricingSection__FullService';
import PricingSection__WebsiteOnly from './Sections/PricingSection__WebsiteOnly';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

// BG Query
const PricingPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingPage__BodyQ {
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
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">
                Digital Marketing Pricing Packages
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Get more leads with these options:
              </p>
              <div className="row justify-content-around align-items-end mt-4">
                <Link
                  to="full-service"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-rocket mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Full-Service SEO</span>
                </Link>
                <Link
                  to="website-only"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-globe mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Website Only</span>
                </Link>
                <Link
                  to="marketing-services"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-funnel-dollar mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Marketing Services</span>
                </Link>
              </div>
            </div>
          </div>
          <PricingSection__FullService className="container my-5 mx-3 border rounded shadow bg-img-full-service-seo" />
          <PricingSection__WebsiteOnly className="container my-5 mx-3 border rounded shadow bg-img-full-service-seo" />
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

export default PricingPage__Body;

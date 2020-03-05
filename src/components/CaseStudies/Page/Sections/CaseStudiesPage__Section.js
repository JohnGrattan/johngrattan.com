import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ImgJohnGrattanLogoGmb from '../../../ImageComps/image-john-grattan-logo-gmb';
import BackgroundImage from 'gatsby-background-image';
import { Table } from 'react-bootstrap';

const CaseStudiesPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query CaseStudiesPage__SectionQ {
      masthead: file(
        relativePath: { eq: "images/bg-img-case-studies-section.jpg" }
      ) {
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
      alt="John Grattan SEO & Web Design Case Studies Background"
    >
      <div className="container">
        <div
          id="case-studies"
          className="text-center pt-5 pb-4 drop-shadow-dark"
        >
          <i className="fas fa-3x fa-chart-line mb-3 text-primary"></i>
          <h3 className="mt-2 text-white">My Case Studies</h3>
          <hr className="divider mt-4 mb-5" />
        </div>
        <div className="container text-center border border-secondary col-md-7 pt-3 mb-5 drop-shadow">
          <p className="text-white px-5">Everyone loves to see results!</p>
          <p className="text-white px-5">
            However, in SEO it's very important how they were achieved.
          </p>
          <p className="text-white px-5">
            Shortcuts and false promises will often lead to more harm than good.
            Always take the time to analyze in-depth case studies to determine
            if an SEO is following ethical guidelines.
          </p>
          <p className="text-primary">View my case studies below!</p>
        </div>
        <div className="row justify-content-center align-items-baseline py-5 p-3">
          <div className="col-md-6 col-lg-6">
            <ImgJohnGrattanLogoGmb />
            <p className="text-white text-center mt-3">
              <strong className="text-secondary">Business:</strong> John Grattan
              SEO & Web Design
              <br />
              (Coming Soon)
            </p>
          </div>
          {/* <div className="col-md-6 col-lg-3">
            <ImgJohnGrattanLogoGmb />
            <p className="text-white mt-3">
              <strong className="text-secondary">Business:</strong> John Grattan
              SEO & Web Design
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <ImgJohnGrattanLogoGmb />
            <p className="text-white mt-3">
              <strong className="text-secondary">Business:</strong> John Grattan
              SEO & Web Design
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <ImgJohnGrattanLogoGmb />
            <p className="text-white mt-3">
              <strong className="text-secondary">Business:</strong> John Grattan
              SEO & Web Design
            </p>
          </div> */}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default CaseStudiesPage__Section;

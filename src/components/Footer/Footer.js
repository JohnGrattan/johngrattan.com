import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ContactSectionHome from '../ContactSectionHome/ContactSectionHome';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query AuthorQ {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer>
      <section className="page-section">
        <ContactSectionHome className="container bg-img-contact-section rounded shadow p-5" />
      </section>
      <section className="bg-purple">
        <div className="container p-5">
          <div className="row justify-content-around align-items-baseline">
            <div className="col-md-6 col-lg-3 text-center text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Company</h5>
              <Link className="d-flex footer-link" to="/about">
                About
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Contact
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Process
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Pricing
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Case Studies
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Testimonials
              </Link>
              <Link className="d-flex footer-link" to="/about">
                FAQs
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Partners
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 text-center text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Services</h5>
              <Link className="d-flex footer-link" to="/about">
                Organic SEO
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Local SEO
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Pay-Per-Click Ads
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Website Design
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Web Development
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Social Media
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Email Marketing
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 text-center text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Resources</h5>
              <Link className="d-flex footer-link" to="/about">
                SEO Checklist
              </Link>
              <Link className="d-flex footer-link" to="/about">
                SEO Blog
              </Link>
              <Link className="d-flex footer-link" to="/about">
                Glossary of Terms
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 text-center text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">
                John Grattan
              </h5>
              <p className="text-white text-sans-serif text-justify pt-2">
                John Grattan SEO & Web Design provides an affordable Digital
                Marketing solution for small businesses throughout Massachusetts
                to help them generate leads, increase sales and establish a
                their domain authority on search engines.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="secondary" />
        </div>
        <div className="container py-3 text-sans-serif">
          <div className="row justify-content-between align-items-baseline">
            <div className="col-md-4 small text-center text-white">
              <p>
                Copyright &copy; 2020{' '}
                <Link to="/">{data.site.siteMetadata.author}</Link>
              </p>
            </div>
            <div className="col-md-4 small text-center text-white">
              <p>
                Designed & Developed by{' '}
                <Link to="/">{data.site.siteMetadata.author}</Link>
              </p>
            </div>
            <div className="col-md-4 text-center text-white">
              <i className="fab fa-2x fa-facebook px-2"></i>
              <i className="fab fa-2x fa-instagram px-2"></i>
              <i className="fab fa-2x fa-twitter px-2"></i>
              <i className="fab fa-2x fa-youtube px-2"></i>
              <i className="fab fa-2x fa-linkedin px-2"></i>
              <i className="fab fa-2x fa-github px-2"></i>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

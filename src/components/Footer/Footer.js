import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ContactSectionHome from '../Contact/ContactSectionHome/ContactSectionHome';

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
    <section>
      <section className="page-section">
        <ContactSectionHome className="container bg-img-contact-section rounded shadow p-5" />
      </section>
      <section className="bg-purple">
        <div className="container p-5">
          <div className="row justify-content-around align-items-baseline">
            <div className="col-md-6 col-lg-3 text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Company</h5>
              <Link className="d-flex footer-link" to="/about">
                About
              </Link>
              <Link className="d-flex footer-link" to="/contact">
                Contact
              </Link>
              <Link className="d-flex footer-link" to="/process">
                Process
              </Link>
              <Link className="d-flex footer-link" to="/pricing">
                Pricing
              </Link>
              <Link className="d-flex footer-link" to="/case-studies">
                Case Studies
              </Link>
              <Link className="d-flex footer-link" to="/">
                Testimonials
              </Link>
              <Link className="d-flex footer-link" to="/">
                FAQs
              </Link>
              <Link className="d-flex footer-link" to="/">
                Partners
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Services</h5>
              <Link className="d-flex footer-link" to="/services/seo-strategy">
                SEO Strategy
              </Link>
              <Link className="d-flex footer-link" to="/services/organic-seo">
                Organic SEO
              </Link>
              <Link className="d-flex footer-link" to="/services/local-seo">
                Local SEO
              </Link>
              <Link
                className="d-flex footer-link"
                to="/services/pay-per-click-ppc"
              >
                Pay-Per-Click Ads
              </Link>
              <Link
                className="d-flex footer-link"
                to="/services/website-design"
              >
                Website Design
              </Link>
              <Link
                className="d-flex footer-link"
                to="/services/web-development"
              >
                Web Development
              </Link>
              <Link
                className="d-flex footer-link"
                to="/services/social-media-marketing"
              >
                Social Media
              </Link>
              <Link
                className="d-flex footer-link"
                to="/services/email-marketing"
              >
                Email Marketing
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Resources</h5>
              <Link className="d-flex footer-link" to="/">
                SEO Checklist
              </Link>
              <Link className="d-flex footer-link" to="/blog">
                SEO & Web Design Blog
              </Link>
              <Link className="d-flex footer-link" to="/">
                Glossary of Terms
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark">
              <h5 className="text-uppercase text-secondary mb-4">Info</h5>
              <div className="text-white text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-address-card mt-1"></i>
                <Link to="/" className="ml-3">
                  John Grattan SEO & Web Design
                </Link>
              </div>
              <div className="text-white text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-phone mt-1"></i>
                <a className="ml-3" href="tel:+14012169868">
                  (401) 216-9868
                </a>
              </div>
              <div className="text-white text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-envelope mt-1"></i>
                <a
                  className="ml-3"
                  href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                >
                  contact@johngrattan.com
                </a>
              </div>
              <div className="text-white text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <a
                  className="ml-1-25"
                  href="https://g.page/john-grattan-seo-web-design?share"
                  target="_blank"
                >
                  30 Roosevelt Road,
                  <br />
                  Plymouth, MA 02360
                </a>
              </div>
              <div className="text-white text-sans-serif pt-2 d-flex mb-2">
                <i className="far fa-clock mt-1"></i>
                <span className="text-primary ml-3">
                  Monday - Friday
                  <br />
                  9:00 am - 5:00 pm
                </span>
              </div>
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
              <a href="#">
                <i className="fab fa-2x fa-facebook px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-instagram px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-twitter px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-youtube px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-linkedin px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-github px-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;

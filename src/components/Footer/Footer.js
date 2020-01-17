import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ContactForm from '../ContactForm/ContactForm';

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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Talk Today</h2>
              <hr className="divider my-4" />
              <div className="text-muted mb-5">
                <p>Have any questions or concerns?</p>
                <p>
                  Feel free to call, email or fill out this form and you will be
                  contacted shortly!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div itemScope itemType="http://schema.org/LocalBusiness">
                <p>Phone:</p>
                <span itemProp="telephone">
                  <a href="tel:+17742693758">774-269-3758</a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <p>Email:</p>
              <a
                className="d-block"
                href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
                target="_blank"
              >
                contact@johngrattan.com
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="container col-md-8 my-5">
              <ContactForm formname="contact-form-homepage" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple">
        <div className=" container py-5">
          <div className="small text-center text-white">
            <p>Copyright &copy; 2020 {data.site.siteMetadata.author}</p>
            <p>
              Designed & Developed by{' '}
              <Link to="/">{data.site.siteMetadata.author}</Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

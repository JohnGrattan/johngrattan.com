import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import FormContact from '../FormContact/FormContact';
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

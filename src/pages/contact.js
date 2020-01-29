import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderContact from '../components/HeaderContact/HeaderContact';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <HeaderContact Tag="header" className="bg-img-page-top" hOne="Contact Me" />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default ContactPage;

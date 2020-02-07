import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderContact from '../components/HeaderContact/HeaderContact';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" description="Have any questions about SEO & Web Design? Not quite sure how I can help your business grow online and want to talk first? If you're ready to start working together today, call me at (401) 216-9868!" />
    <HeaderContact Tag="header" className="bg-img-page-top" hOne="Contact Me" />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default ContactPage;

import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderAbout from '../components/HeaderAbout/HeaderAbout';

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <HeaderAbout
      Tag="header"
      className="bg-img-page-top"
      hOne="About Me"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default AboutPage;

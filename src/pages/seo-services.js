import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderServices from '../components/HeaderServices/HeaderServices';

const SeoServices = () => (
  <Layout>
    <SEO title="SEO Services" />
    <HeaderServices
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO Services"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default SeoServices;

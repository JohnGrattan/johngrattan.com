import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderSolutions from '../components/HeaderSolutions/HeaderSolutions';

const SolutionsPage = () => (
  <Layout>
    <SEO title="SEO & Web Design Solutions" />
    <HeaderSolutions
      Tag="header"
      className="bg-img-page-top"
      hOne="Solutions for Your Business"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default SolutionsPage;

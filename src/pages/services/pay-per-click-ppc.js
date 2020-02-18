import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import HeaderPayPerClickPpc from '../../components/HeaderPayPerClickPpc/HeaderPayPerClickPpc';

const PayPerClickPpcPage = () => (
  <Layout>
    <SEO
      title="Pay-Per-Click (PPC) Ads"
      description="Pay-Per-Click (PPC) Ads"
    />
    <HeaderPayPerClickPpc
      Tag="header"
      className="bg-img-page-top"
      hOne="Pay-Per-Click (PPC) Ads"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default PayPerClickPpcPage;

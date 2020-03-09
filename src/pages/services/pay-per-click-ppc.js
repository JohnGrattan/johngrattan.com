import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import HeaderPayPerClickPpc from '../../components/HeaderPayPerClickPpc/HeaderPayPerClickPpc';

const PayPerClickPpcPage = () => (
  <Layout>
    <SEO
      title="Pay-Per-Click (PPC) Ads"
      description="Pay-Per-Click (PPC) Ads"
      canonicalLink="https://johngrattan.com/services/pay-per-click-ppc/"
    />
    <HeaderPayPerClickPpc
      Tag="header"
      className="bg-img-page-top"
      hOne="Pay-Per-Click (PPC) Ads"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default PayPerClickPpcPage;

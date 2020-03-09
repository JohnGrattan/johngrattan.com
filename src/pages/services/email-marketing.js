import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import HeaderEmailMarketing from '../../components/HeaderEmailMarketing/HeaderEmailMarketing';

const EmailMarketingPage = () => (
  <Layout>
    <SEO
      title="Email Marketing Services"
      description="Email Marketing"
      canonicalLink="https://johngrattan.com/services/email-marketing/"
    />
    <HeaderEmailMarketing
      Tag="header"
      className="bg-img-page-top"
      hOne="Email Marketing"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default EmailMarketingPage;

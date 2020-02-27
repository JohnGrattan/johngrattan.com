import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PricingPage__Header from '../components/Pricing/Page/PricingPage__Header';
import PricingPage__Body from '../components/Pricing/Page/PricingPage__Body';

const PricingPage = () => (
  <Layout>
    <SEO
      title="SEO & Web Design Pricing"
      description="Take a look at my pricing structures for all monthly and one-time services."
      canonicalLink="https://johngrattan.com/pricing/"
    />
    <PricingPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Affordable Investments for Business Growth"
      pText="This is a test"
    />
    <PricingPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default PricingPage;

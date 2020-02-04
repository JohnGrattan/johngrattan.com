import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderPricing from '../components/Pricing/HeaderPricing/HeaderPricing';
import PricingSectionPage from '../components/Pricing/PricingSectionPage/PricingSectionPage';

const PricingPage = () => (
  <Layout>
    <SEO
      title="SEO & Web Design Pricing"
      description="Take a look at my pricing structures for all monthly and one-time services."
    />
    <HeaderPricing
      Tag="header"
      className="bg-img-page-top"
      hOne="Affordable Investments for Business Growth"
      pText="This is a test"
    />
    <PricingSectionPage className="py-md-5 bg-texture-1" />
  </Layout>
);

export default PricingPage;

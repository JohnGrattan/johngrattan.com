import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PricingPage__Header from '../components/Pricing/Page/PricingPage__Header';
import PricingPage__Body from '../components/Pricing/Page/PricingPage__Body';

const PricingPage = () => (
  <Layout>
    <SEO
      title="Pricing for Single/Monthly SEO & Web Design Services"
      description="I offer affordable investments for long-term business growth. My pricing structure offers single services and monthly options to boost your website rankings."
      canonicalLink="https://johngrattan.com/pricing/"
    />
    <PricingPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Affordable Investments for Business Growth"
    />
    <PricingPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default PricingPage;

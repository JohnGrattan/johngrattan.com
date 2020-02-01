import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderServices from '../components/HeaderServices/HeaderServices';
import ServicesSectionPage from '../components/ServicesSectionPage/ServicesSectionPage';

const ServicesPage = () => (
  <Layout>
    <SEO title="SEO & Web Design Services" />
    <HeaderServices
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO & Web Design Services"
    />
    <ServicesSectionPage className="py-md-5 bg-texture-1" />
  </Layout>
);

export default ServicesPage;

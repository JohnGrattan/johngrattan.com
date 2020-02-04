import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderServices from '../components/Services/HeaderServices/HeaderServices';
import ServicesSectionPage from '../components/Services/ServicesSectionPage/ServicesSectionPage';

const ServicesPage = () => (
  <Layout>
    <SEO title="Digital Marketing Services" />
    <HeaderServices
      Tag="header"
      className="bg-img-page-top"
      hOne="Digital Marketing Services"
    />
    <ServicesSectionPage className="py-md-5 bg-texture-1" />
  </Layout>
);

export default ServicesPage;

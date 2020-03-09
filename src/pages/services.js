import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ServicesPage__Header from '../components/Services/Page/ServicesPage__Header';
import ServicesPage__Body from '../components/Services/Page/ServicesPage__Body';

const ServicesPage = () => (
  <Layout>
    <SEO
      title="SEO, Web Design, PPC, SMM, Email Marketing"
      description="John Grattan SEO & Web Design offers full-service Digital Marketing options - SEO, Web Design, PPC, Social Media & Email Marketing. Call (401) 216-9868!"
      canonicalLink="https://johngrattan.com/services/"
    />
    <ServicesPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Digital Marketing Services"
    />
    <ServicesPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default ServicesPage;

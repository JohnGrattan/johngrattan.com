import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderServices from '../components/Services/HeaderServices/HeaderServices';
import ServicesSectionPage from '../components/Services/ServicesSectionPage/ServicesSectionPage';

const ServicesPage = () => (
  <Layout>
    <SEO title="Digital Marketing Services - SEO, PPC, Website Design, Web Development, Social Media, Email Marketing" description="John Grattan SEO & Web Design offers several Digital Marketing services to small businesses throughout Massachusetts. I will help boost your ranks in search engines for keywords relevant to your business in order to drive traffic to your website. More traffic means more potential sales. I can help you with Organic SEO, Local SEO, website design, web development, social media and email marketing. Contact (401) 216-9868 to get started today!" />
    <HeaderServices
      Tag="header"
      className="bg-img-page-top"
      hOne="Digital Marketing Services"
    />
    <ServicesSectionPage className="py-md-5 bg-texture-1" />
  </Layout>
);

export default ServicesPage;

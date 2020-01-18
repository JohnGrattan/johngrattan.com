import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import AboutSectionHome from '../components/AboutSectionHome/AboutSectionHome';
import ServicesSectionHome from '../components/ServicesSectionHome/ServicesSectionHome';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="John Grattan: Freelance Digital Marketing - Offering SEO, SEM, Web Design, Web Development Services | Boston, MA & Plymouth, MA"
        description="Hi, I'm John Grattan. I offer affordable freelance Digital Marketing services such as SEO, SEM, Web Design & Development to local businesses in Massachusetts."
      />
      <HeaderHome Tag="header" className="bg-img-home" />
      <AboutSectionHome className="page-section bg-texture-1 pb-md-5" />
      <ServicesSectionHome className="page-section bg-img-services" />
    </Layout>
  );
};

export default IndexPage;

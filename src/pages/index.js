import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import AboutSectionHome from '../components/About/AboutSectionHome/AboutSectionHome';
import BlogSectionBgHome from '../components/BlogSectionHome/BlogSectionBgHome';
import Home__ServicesSection from '../components/Services/Home/Home__ServicesSection';
import ProcessSectionHome from '../components/Process/ProcessSectionHome/ProcessSectionHome';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Digital Marketing Services - SEO, PPC, Website Design, Web Development | Boston & Plymouth, Massachusetts"
        description="Hi, I'm John Grattan. I offer affordable Digital Marketing services such as SEO, PPC, Website Design & Web Development to local businesses in Massachusetts, from Boston to Plymouth."
      />
      <HeaderHome className="bg-img-home border-bottom border-secondary" />
      <AboutSectionHome className="page-section bg-texture-1" />
      <Home__ServicesSection className="page-section border-bottom border-secondary bg-img-services" />
      <ProcessSectionHome className="page-section bg-img-process" />
      <BlogSectionBgHome className="page-section border-bottom border-secondary bg-img-blog" />
    </Layout>
  );
};

export default IndexPage;

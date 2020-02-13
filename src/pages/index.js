import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import AboutSectionHome from '../components/About/AboutSectionHome/AboutSectionHome';
import BlogSectionBgHome from '../components/BlogSectionHome/BlogSectionBgHome';
import ServicesSectionHome from '../components/Services/ServicesSectionHome/ServicesSectionHome';
import ProcessSectionHome from '../components/Process/ProcessSectionHome/ProcessSectionHome';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Digital Marketing Services - SEO, PPC, Website Design, Web Development | Boston & Plymouth, Massachusetts"
        description="Hi, I'm John Grattan. I offer affordable Digital Marketing services such as SEO, PPC, Website Design & Web Development to local businesses in Massachusetts, from Boston to Plymouth."
      />
      <HeaderHome className="bg-img-home border-bottom border-secondary" />
      <AboutSectionHome className="page-section bg-texture-1 pb-md-5" />
      <BlogSectionBgHome className="page-section border-bottom border-secondary bg-img-blog" />
      <ServicesSectionHome className="page-section border-bottom border-secondary bg-img-services" />
      <ProcessSectionHome className="page-section bg-img-process" />
    </Layout>
  );
};

export default IndexPage;

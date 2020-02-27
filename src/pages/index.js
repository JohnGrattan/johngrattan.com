import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import AboutSectionHome from '../components/About/AboutSectionHome/AboutSectionHome';
import Home__BlogSectionBG from '../components/Blog/Home/Home__BlogSectionBg';
import Home__ServicesSection from '../components/Services/Home/Home__ServicesSection';
import Home__ProcessSection from '../components/Process/Home/Home__ProcessSection';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Digital Marketing Services - SEO, PPC, Website Design, Web Development | Boston & Plymouth, Massachusetts"
        description="Hi, I'm John Grattan. I offer affordable Digital Marketing services such as SEO, PPC, Website Design & Web Development to local businesses in Massachusetts, from Boston to Plymouth."
        canonicalLink="https://johngrattan.com/"
      />
      <HeaderHome className="bg-img-home border-bottom border-secondary" />
      <AboutSectionHome className="page-section border-bottom border-secondary bg-texture-1" />
      <Home__ServicesSection className="page-section border-bottom border-secondary bg-img-services" />
      <Home__ProcessSection className="page-section border-bottom border-secondary bg-img-process" />
      <Home__BlogSectionBG className="page-section border-bottom border-secondary bg-img-blog" />
    </Layout>
  );
};

export default IndexPage;

import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderAbout from '../components/HeaderAbout/HeaderAbout';
import AboutSectionPage from '../components/AboutSectionPage/AboutSectionPage';

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <HeaderAbout
      Tag="header"
      className="bg-img-page-top"
      hOne="About Me"
      pText="This is a test"
    />
    <AboutSectionPage className="py-md-5 bg-texture-1" />
  </Layout>
);

export default AboutPage;

import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderAbout from '../components/About/HeaderAbout/HeaderAbout';
import AboutSectionPage from '../components/About/AboutSectionPage/AboutSectionPage';

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Me"
      description="Who is John Grattan? Well, I'm a lifelong resident of Plymouth, MA, a fanatic of Boston sports and a strong believer that success starts with helping others. Visit my site to learn more about my background, education and work in the community. If you're interested in SEO & Web Design, give me a call at (401) 216-9868 and we'll figure out how to optimize your business website."
      canonicalLink="https://johngrattan.com/about/"
    />
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

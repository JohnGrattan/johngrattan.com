import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutPage__Header from '../components/About/Page/AboutPage__Header';
import AboutPage__Body from '../components/About/Page/AboutPage__Body';

const AboutPage = () => (
  <Layout>
    <SEO
      title="About John Grattan"
      description="Who is John Grattan? Well, I'm a lifelong resident of Plymouth, MA, a fanatic of Boston sports and a strong believer that success starts with helping others. Visit my site to learn more about my background, education and work in the community. If you're interested in SEO & Web Design, give me a call at (401) 216-9868 and we'll figure out how to optimize your business website."
      canonicalLink="https://johngrattan.com/about/"
    />
    <AboutPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="About Me"
    />
    <AboutPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default AboutPage;

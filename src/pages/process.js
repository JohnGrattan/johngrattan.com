import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProcessPage__Header from '../components/Process/Page/ProcessPage__Header';
import ProcessPage__Body from '../components/Process/Page/ProcessPage__Body';

const ProcessPage = () => (
  <Layout>
    <SEO
      title="SEO & Web Design Process"
      description="SEO & Web Design Process"
      canonicalLink="https://johngrattan.com/process/"
    />
    <ProcessPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Proven Process for Success"
    />
    <ProcessPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default ProcessPage;

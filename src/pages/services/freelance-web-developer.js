import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const FreelanceWebDeveloperPage = () => (
  <Layout>
    <SEO title="Freelance Web Developer" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Freelance Web Developer"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default FreelanceWebDeveloperPage;

import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const FreelanceWebDesign = () => (
  <Layout>
    <SEO title="Freelance Web Design" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Freelance Web Design"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default FreelanceWebDesign;

import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const CaseStudiesPage = () => (
  <Layout>
    <SEO title="SEO & Web Design Case Studies" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Case Studies"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default CaseStudiesPage;

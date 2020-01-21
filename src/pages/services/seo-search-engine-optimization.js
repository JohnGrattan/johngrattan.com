import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const SeoSearchEngineOptimization = () => (
  <Layout>
    <SEO title="SEO - Search Engine Optimization" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO - Search Engine Optimization"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default SeoSearchEngineOptimization;

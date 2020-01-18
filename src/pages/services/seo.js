import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const SeoPage = () => (
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

export default SeoPage;

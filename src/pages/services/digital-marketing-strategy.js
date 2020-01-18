import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const DigitalMarketingStrategy = () => (
  <Layout>
    <SEO title="Digital Marketing Strategy" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Digital Marketing Strategy"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default DigitalMarketingStrategy;

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BgImgPageTop from '../../components/BgImgPageTop/BgImgPageTop';

const WebDesign = () => (
  <Layout>
    <SEO title="Web Design" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Web Design"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default WebDesign;

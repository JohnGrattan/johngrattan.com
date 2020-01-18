import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const Portfolio = () => (
  <Layout>
    <SEO title="Digital Marketing Portfolio" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="Digital Marketing Portfolio"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default Portfolio;

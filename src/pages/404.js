import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BgImgPageTop from '../components/BgImgPageTop/BgImgPageTop';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <BgImgPageTop
      Tag="header"
      className="bg-img-page-top"
      hOne="404: Not Found"
      pText="This is a test"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default NotFoundPage;

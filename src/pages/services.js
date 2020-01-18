import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderServices from '../components/HeaderServices/HeaderServices';

const Services = () => (
  <Layout>
    <SEO title="Digital Marketing Services" />
    <HeaderServices
      Tag="header"
      className="bg-img-page-top"
      hOne="Digital Marketing Services"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default Services;

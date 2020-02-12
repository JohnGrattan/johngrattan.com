import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderProcess from '../components/Process/HeaderProcess/HeaderProcess';

const ProcessPage = () => (
  <Layout>
    <SEO title="SEO & Web Design Process" />
    <HeaderProcess
      Tag="header"
      className="bg-img-page-top"
      hOne="A Process Proven for Success"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default ProcessPage;

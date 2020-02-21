import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderCaseStudies from '../components/HeaderCaseStudies/HeaderCaseStudies';

const CaseStudiesPage = () => (
  <Layout>
    <SEO
      title="SEO & Web Design Case Studies"
      description="SEO & Web Design Case Studies"
      canonicalLink="https://johngrattan.com/case-studies"
    />
    <HeaderCaseStudies
      Tag="header"
      className="bg-img-page-top"
      hOne="Case Studies"
    />
    <section className="page-section">
      <div className="container"></div>
    </section>
  </Layout>
);

export default CaseStudiesPage;

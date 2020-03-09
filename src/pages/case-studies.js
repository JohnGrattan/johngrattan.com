import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CaseStudiesPage__Header from '../components/CaseStudies/Page/CaseStudiesPage__Header';
import CaseStudiesPage__Body from '../components/CaseStudies/Page/CaseStudiesPage__Body';

const CaseStudiesPage = () => (
  <Layout>
    <SEO
      title="SEO & Web Design Case Studies"
      description="Always take the time to analyze in-depth case studies to see how results for your business will be achieved."
      canonicalLink="https://johngrattan.com/case-studies/"
    />
    <CaseStudiesPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Case Studies"
    />
    <CaseStudiesPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default CaseStudiesPage;

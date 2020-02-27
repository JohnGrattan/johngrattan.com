import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import SeoBlogPage__Header from '../../components/Blog/Subpages/Seo/SeoBlogPage__Header';
import SeoBlogPage__Body from '../../components/Blog/Subpages/Seo/SeoBlogPage__Body';

const SeoCategoryBlogPage = () => (
  <Layout>
    <SEO
      title="SEO Blog Articles"
      description="SEO Blog Articles"
      canonicalLink="https://johngrattan.com/blog/seo/"
    />
    <SeoBlogPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO Blog Articles"
    />
    <SeoBlogPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default SeoCategoryBlogPage;

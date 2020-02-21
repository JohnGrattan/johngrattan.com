import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPage__Header from '../components/Blog/Page/BlogPage__Header';
import BlogPage__Body from '../components/Blog/Page/BlogPage__Body';

const SeoBlogPage = ({ data }) => (
  <Layout>
    <SEO
      title="SEO Blog"
      description="SEO Blog"
      canonicalLink="https://johngrattan.com/blog"
    />
    <BlogPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="SEO & Web Design Insights"
    />
    <BlogPage__Body className="py-md-5 bg-texture-1" />
  </Layout>
);

export default SeoBlogPage;

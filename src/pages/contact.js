import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactPage__Header from '../components/Contact/Page/ContactPage__Header';
import ContactPage__Body from '../components/Contact/Page/ContactPage__Body';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Me for SEO & Web Design Services"
      description="Have questions about SEO & Web Design? Not sure how I can help your business growth? Let's talk first! If you're ready to start working together today, call me at (401) 216-9868!"
      canonicalLink="https://johngrattan.com/contact/"
    />
    <ContactPage__Header
      Tag="header"
      className="bg-img-page-top"
      hOne="Contact Me"
    />
    <ContactPage__Body className="pt-md-5 bg-texture-1" />
  </Layout>
);

export default ContactPage;

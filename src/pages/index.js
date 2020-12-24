import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import Home__AboutSection from '../components/About/Home/Home__AboutSection';
import Home__BlogSectionBG from '../components/Blog/Home/Home__BlogSectionBg';
import Home__ServicesSection from '../components/Services/Home/Home__ServicesSection';
import Home__ProcessSection from '../components/Process/Home/Home__ProcessSection';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Digital Marketing Services - SEO, Web Design, PPC, SMM, Email Marketing | Massachusetts, from Boston, MA to Plymouth, MA"
        description="Hi, I'm John Grattan. I offer affordable Digital Marketing services - SEO, Web Design, PPC to local businesses in Massachusetts, from Boston, MA to Plymouth, MA"
        canonicalLink="https://johngrattan.com/"
      />
      <Helmet>
      {/* Clarity tracking code for https://johngrattan.com/ */}
        <script>
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "4od239r181");
        </script>
      </Helmet>
      <HeaderHome className="bg-img-home border-bottom border-secondary" />
      <Home__AboutSection className="page-section border-bottom border-secondary bg-texture-1" />
      <Home__ServicesSection className="page-section border-bottom border-secondary bg-img-services" />
      <Home__ProcessSection className="page-section border-bottom border-secondary bg-img-process" />
      <Home__BlogSectionBG className="page-section border-bottom border-secondary bg-img-blog" />
    </Layout>
  );
};

export default IndexPage;

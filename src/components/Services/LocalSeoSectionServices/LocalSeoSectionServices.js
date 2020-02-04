import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';

const LocalSeoSectionServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query LocalSeoSectionServicesQ {
      masthead: file(
        relativePath: { eq: "images/bg-img-services-local-seo.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      id="local-seo"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="local seo digital marketing services background"
    >
      <div className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-address-card mb-3 text-primary"></i>
        <h2 className="mt-2 text-white">Local SEO</h2>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p className="text-white">
            I'll localize your website and Google My Business account to{' '}
            <span className="text-primary">rank locally on the first page</span>{' '}
            for all the towns/cities your business services.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-baseline py-5 px-md-3">
        <div className="container">
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="p-5">
              <h3 className="mb-3">What is Local SEO?</h3>
              <p>
                Local SEO (Local Search Engine Optimization) is the process of
                localizing your website by naturally including your town/city,
                county or region of service throughout{' '}
                <Link className="text-link-on-white" to="/glossary">
                  meta data
                </Link>
                , headings, content and{' '}
                <Link className="text-link-on-white" to="/glossary">
                  structured data/schema markup
                </Link>{' '}
                in order to be ranked on the first page of local intent
                searches. Local SEO also includes the optimization of{' '}
                <Link className="text-link-on-white" to="/glossary">
                  Google My Business (GMB)
                </Link>
                , managing customer reviews and building{' '}
                <Link className="text-link-on-white" to="/glossary">
                  local citations
                </Link>{' '}
                to boost your chances of ranking within Google Map's{' '}
                <Link className="text-link-on-white" to="/glossary">
                  Local 3-Pack
                </Link>
                .
              </p>
              <h3 className="mb-3 mt-5">What are the benefits of Local SEO?</h3>
              <p>
                Organic SEO has become very important for your business because
                new technology is allowing search engines to accurately modify
                search results based on user intent. This means, when someone
                has the intention to buy, the results will be reflected
                accordingly. Now, this will greatly increase the chances of your
                business making a sale, provided it's listed on the first page
                for buyer intent keywords.{' '}
                <strong className="text-info">
                  In short, ranking first means more{' '}
                  <Link className="text-link-on-white" to="/glossary">
                    quality leads
                  </Link>{' '}
                  you can convert to paying customers.
                </strong>
              </p>
              <h3 className="mb-3 mt-5">What is the Google Local Pack?</h3>
              <p>
                Organic SEO and Local SEO both utilize the same strategies, such
                as keyword and competitor research and on-page, off-page and
                technical SEO. The difference lies within the focus on a
                geographical component.
              </p>
              <p>
                Organic SEO concentrates on ranking a website on a global scale,
                while Local SEO concentrates on generating business website
                awareness within targeted towns and cities. Local SEO also takes
                it a step further by connecting{' '}
                <Link className="text-link-on-white" to="/glossary">
                  Google My Business (GMB)
                </Link>
                , customer reviews and{' '}
                <Link className="text-link-on-white" to="/glossary">
                  structured data/schema markup
                </Link>{' '}
                to boost your business into Google Map's{' '}
                <Link className="text-link-on-white" to="/glossary">
                  Local 3-Pack
                </Link>
                .
              </p>
              <p>
                Although Local SEO is especially important for brick-and-mortar
                businesses and companies that serve specific local areas,{' '}
                <strong className="text-info">
                  Organic SEO is essential to creating an audience that's built
                  on trust from the informational value you provide, thus
                  solidifying your website as a{' '}
                  <Link className="text-link-on-white" to="/glossary">
                    domain authority
                  </Link>{' '}
                  within your industry.
                </strong>
              </p>
              <h3 className="mb-3 mt-5">
                Google My Business & Local Citations
              </h3>
              <p>
                Organic SEO is a long term strategy to drive traffic to your
                website via organic user searches based on targeted keywords,
                while{' '}
                <Link className="text-link-on-white" to="/glossary">
                  Pay-Per-Click (PPC)
                </Link>{' '}
                is a short term strategy to drive traffic to your website via
                Google Ads placed above organic search results.{' '}
                <strong className="text-info">
                  Organic SEO is often preferred over PPC because it will pay
                  dividends year after year, whereas PPC will immediately cease
                  extra traffic the moment your ad campaign is complete
                </strong>
                .
              </p>
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <Button
                  className="mr-4"
                  btnlabel="Contact Me Today"
                  btnlink="/contact"
                  btnsolid={true}
                />
                <Link
                  className="text-link-on-white ml-4"
                  to="/services/organic-seo"
                >
                  Dive Deeper Into Organic SEO{' '}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default LocalSeoSectionServices;

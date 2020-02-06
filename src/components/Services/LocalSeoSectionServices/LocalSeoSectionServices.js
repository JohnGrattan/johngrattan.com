import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';
import { Popover, OverlayTrigger } from 'react-bootstrap';

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

  const SERPS = (
    <Popover id="serps">
      <Popover.Title className="text-info" as="h4">
        <strong>SERPs</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Stands for 'search engine results page', which is the page following a
          search query.
        </p>
      </Popover.Content>
    </Popover>
  );

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
                in order to be ranked on the first page of local intent keyword
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
                Every business can benefit from Local SEO because it provides a
                chance to rank within your industry and not necessarily have to
                worry about competing with major corporations. Google has
                numerous local ranking factors that are specific to geographical
                'near me' search phrases.
              </p>
              <p>
                By locally optimizing your business website, you will increase
                visibility on{' '}
                <OverlayTrigger
                  trigger={['click', 'hover']}
                  placement="bottom"
                  overlay={SERPS}
                >
                  <span className="text-link-on-white pointer">
                    SERPs <i className="fas fa-info-circle text-info"></i>
                  </span>
                </OverlayTrigger>{' '}
                via Google Map's Local 3-Pack. Since these 3 business listings
                get the most clicks, your traffic will increase and in turn
                boost your potential sales.
              </p>
              <h3 className="mb-3 mt-5">What is the Google Local Pack?</h3>
              <p></p>
              <h3 className="mb-3 mt-5">
                Google My Business & Local Citations
              </h3>
              <p></p>
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <Button
                  className="mr-4"
                  btnlabel="Contact Me Today"
                  btnlink="/contact"
                  btnsolid={true}
                />
                <Link
                  className="text-link-on-white ml-4"
                  to="/services/local-seo"
                >
                  Dive Deeper Into Local SEO{' '}
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

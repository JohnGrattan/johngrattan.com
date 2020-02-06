import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const OrganicSeoSectionServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query OrganicSeoSectionServicesQ {
      masthead: file(
        relativePath: { eq: "images/bg-img-services-organic-seo.jpg" }
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

  const organicSEO = (
    <Popover id="organic-seo">
      <Popover.Title className="text-info" as="h4">
        <strong>Organic SEO</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Naturally earning your website's rank placement within search results,
          as opposed to paid advertisements.
        </p>
      </Popover.Content>
    </Popover>
  );

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

  const buyerIntentKeywords = (
    <Popover id="buyer-intent-keywords">
      <Popover.Title className="text-info" as="h4">
        <strong>Buyer Intent Keywords</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Buyer intent keywords refer to particular phrases people search for
          when they're ready to buy a product or service. The intent behind
          these phrases signal that they've done their research, identified
          their need, and now they're actively in the buying cycle and
          considering the solution they want to purchase.
        </p>
      </Popover.Content>
    </Popover>
  );

  const qualityLeads = (
    <Popover id="quality-leads">
      <Popover.Title className="text-info" as="h4">
        <strong>Quality Leads</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          The quality of a lead refers to the likeliness that the prospect is
          willing to buy. When a person's search phrase uses buyer intent
          keywords, they are more likely to click a link and become a paying
          customer.
        </p>
        <p>
          On the other hand, if a person's search phrase uses informational
          intent keywords, they are simply doing research and less likely to
          buy.
        </p>
      </Popover.Content>
    </Popover>
  );

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      id="organic-seo"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="organic seo digital marketing services background"
    >
      <div className="text-center pt-5 drop-shadow-dark">
        <i className="fas fa-3x fa-address-card mb-3 text-primary"></i>
        <h2 className="mt-2 text-white">Organic SEO</h2>
        <hr className="divider mt-4" />
      </div>
      <div className="row justify-content-center align-items-baseline pt-5 p-3">
        <div className="container text-center border border-secondary col-md-7 pt-3 drop-shadow">
          <p className="text-white">
            I'll optimize your website to{' '}
            <span className="text-primary">
              organically rank on the first page
            </span>{' '}
            for targeted keywords related to your business, your industry and
            your services.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-baseline py-5 px-md-3">
        <div className="container">
          <div className="container mb-3 pt-2 border border-secondary drop-shadow bg-texture-2">
            <div className="p-5">
              <h3 className="mb-3">What is Organic SEO?</h3>
              <p>
                <OverlayTrigger
                  trigger={['click', 'hover']}
                  placement="bottom"
                  overlay={organicSEO}
                >
                  <span className="text-link-on-white pointer">
                    Organic SEO <i className="fas fa-info-circle text-info"></i>
                  </span>
                </OverlayTrigger>{' '}
                (Organic Search Engine Optimization) is the process of improving
                your website's visibility to search engines, such as Google and
                Bing. The ultimate goal is to strike a balance between
                optimizing your website for search engine algorithms, while
                maximizing your user's experience.{' '}
                <strong className="text-info">
                  Together, these enhancements will boost your website's ranking
                  on{' '}
                  <OverlayTrigger
                    trigger={['click', 'hover']}
                    placement="bottom"
                    overlay={SERPS}
                  >
                    <span className="text-link-on-white pointer">
                      SERPs <i className="fas fa-info-circle text-info"></i>
                    </span>
                  </OverlayTrigger>{' '}
                  to the coveted top spots within the first page.
                </strong>
              </p>
              <h3 className="mb-3 mt-5">Why is Organic SEO important?</h3>
              <p>
                Organic SEO has become very important for your business because
                new technology is allowing search engines to accurately modify
                search results based on user intent. This means, when someone
                has the intention to buy, the results will be reflected
                accordingly. This greatly increases the chances of your business
                making a sale, provided it's ranked on the first page for{' '}
                <OverlayTrigger
                  trigger={['click', 'hover']}
                  placement="bottom"
                  overlay={buyerIntentKeywords}
                >
                  <span className="text-link-on-white pointer">
                    buyer intent keywords{' '}
                    <i className="fas fa-info-circle text-info"></i>
                  </span>
                </OverlayTrigger>
                .{' '}
                <strong className="text-info">
                  In short, ranking on the first page means more{' '}
                  <OverlayTrigger
                    trigger={['click', 'hover']}
                    placement="bottom"
                    overlay={qualityLeads}
                  >
                    <span className="text-link-on-white pointer">
                      quality leads{' '}
                      <i className="fas fa-info-circle text-info"></i>
                    </span>
                  </OverlayTrigger>{' '}
                  you can convert to paying customers.
                </strong>
              </p>
              <h3 className="mb-3 mt-5">Organic SEO vs Local SEO</h3>
              <p>
                Organic SEO and Local SEO both utilize the same strategies, such
                as keyword and competitor research, on-page and off-page SEO,
                technical SEO and valuable content creation. The difference lies
                within the focus on a geographical component.
              </p>
              <p>
                Organic SEO concentrates on ranking a website for certain
                keywords globally, while Local SEO concentrates on generating
                awareness of your business website within targeted towns and
                cities. Local SEO also takes it a step further by connecting{' '}
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
              <h3 className="mb-3 mt-5">Organic SEO vs Pay-Per-Click (PPC)</h3>
              <p>
                Organic SEO is a long term strategy to drive traffic to your
                website via organic user searches based on targeted keywords,
                while{' '}
                <Link className="text-link-on-white" to="/glossary">
                  Pay-Per-Click (PPC)
                </Link>{' '}
                is a short term paid strategy to drive traffic to your website
                via Google Ads. These paid advertisements are placed above the
                organic search results.{' '}
                <strong className="text-info">
                  Organic SEO is often preferred over PPC because it will pay
                  dividends year after year through natural traffic, whereas PPC
                  will immediately cease any extra traffic the moment your ad
                  campaign is complete
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

export default OrganicSeoSectionServices;

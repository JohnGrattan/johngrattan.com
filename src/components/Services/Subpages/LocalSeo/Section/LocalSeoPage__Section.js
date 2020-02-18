import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Button from '../../../../Button/Button';
import ImgLocalBuyNearMe from '../../../../ImageComps/image-stats-local-seo-buy-near-me';
import ImgLocalStore from '../../../../ImageComps/image-stats-local-seo-store-five-miles';
import ImgLocalGMB from '../../../../ImageComps/image-stats-local-seo-google-my-business';
import ImgLocalMapPack from '../../../../ImageComps/image-stats-local-seo-map-pack';
import ImgLocalSeoMapPack from '../../../../ImageComps/image-local-3-pack-seo-results';

const LocalSeoPage__Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query LocalSeoPage__SectionQ {
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

  const localSEO = (
    <Popover id="local-seo">
      <Popover.Title className="text-info" as="h4">
        <strong>Local SEO</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Local SEO is a digital marketing strategy for local businesses to help
          them promote their products and services to local customers at the
          exact moment they’re searching for them online.
        </p>
        <p>
          Local results appear in a map during particular searches, such as
          "near me". These local results are displayed in-between the Google Ads
          and the organic search results.
        </p>
      </Popover.Content>
    </Popover>
  );

  const googleMyBusiness = (
    <Popover id="google-my-business">
      <Popover.Title className="text-info" as="h4">
        <strong>Google My Business (GMB)</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Google My Business is a free and easy tool offered by Google. It's
          purpose is to help verify your business listing so it's included
          within Google Search and Maps, manage your information, interact with
          customers and understand analytics.
        </p>
      </Popover.Content>
    </Popover>
  );

  const localCitations = (
    <Popover id="local-citations">
      <Popover.Title className="text-info" as="h4">
        <strong>Local Citations</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Local citations are any mentions of your business information online,
          including the name, address and phone number (NAP).
        </p>
        <p>
          There are two types of Local Citations, structured and unstructured.
        </p>
        <p>
          Structured citations include business directory listings such as Yelp,
          Yellowpages,Facebook, MapQuest, etc.
        </p>
        <p>
          Unstructed citations include any mention of your business on blogs,
          magazines, newspapers, wikis, etc.
        </p>
      </Popover.Content>
    </Popover>
  );

  const structuredData = (
    <Popover id="structured-data">
      <Popover.Title className="text-info" as="h4">
        <strong>Structured Data</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Structured Data is JSON-LD formatted code that Google uses to
          understand the content of a website's page. Web developers include
          these code snippets within the HTML to provide explicit clues and
          meaning, such as contact information, business reviews, social events,
          etc.
        </p>
        <p>
          Google Search uses structured data to enable special search result
          features and enhancements.
        </p>
      </Popover.Content>
    </Popover>
  );

  const localPack = (
    <Popover id="local-pack">
      <Popover.Title className="text-info" as="h4">
        <strong>Local 3-Pack</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Google Map's Local 3-Pack is the top listing of relevant local
          businesses for particular search results. This map only appears during
          local searches and is displayed in-between the Google Ads and the
          organic search results.
        </p>
      </Popover.Content>
    </Popover>
  );

  const domainAuthority = (
    <Popover id="domain-authority">
      <Popover.Title className="text-info" as="h4">
        <strong>Domain Authority</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Domain Authority (DA) is a ranking score developed by Moz to predict
          how well a website ranks within search engines. DA scores range from
          one to 100, with higher scores corresponding to a greater ability to
          rank.
        </p>
      </Popover.Content>
    </Popover>
  );

  const metadata = (
    <Popover id="metadata">
      <Popover.Title className="text-info" as="h4">
        <strong>Metadata</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Metadata is essentially data that describes data. In terms of an HTML,
          metadata is placed within the head element to describe the document.
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
          <div className="container mb-3 pt-2 border border-secondary rounded drop-shadow bg-texture-2">
            <div className="p-2 p-md-5">
              <p className="display-4 text-center">8-Steps to Local Success</p>
              <div className="p-2 p-md-5 mb-5">
                <div className="row justify-content-center align-items-baseline">
                  <div className="col-6 col-md-3 bg-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">1</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="fab fa-4x fa-google text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Google My <br />
                          Business (GMB)
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-light-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">2</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-address-card text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Local <br />
                          Citations
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-purple-to-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">3</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="far fa-4x fa-newspaper text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Press <br />
                          Releases
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-gray-to-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">4</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-star text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Review <br />
                          Management
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-gray-to-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">5</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-link text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Link <br />
                          Building
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-purple-to-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">6</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="fas fa-4x fa-code text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Structured <br />
                          Data
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-light-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">7</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-map-marked-alt text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Location <br />
                          Landing Pages
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">8</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="fas fa-4x fa-newspaper text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Content <br />
                          Creation
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-5">
                <div className="col-md-8 order-1 order-md-0">
                  <h3 className="mb-4">What is Local SEO?</h3>

                  <div className="mb-3">
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={localSEO}
                    >
                      <span className="text-link-on-white pointer">
                        Local SEO{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>{' '}
                    (Local Search Engine Optimization) is the process of
                    localizing your website by naturally including your
                    town/city, county or region of service throughout:
                    <ul className="my-3">
                      <li>
                        <OverlayTrigger
                          trigger={['click', 'hover']}
                          placement="bottom"
                          overlay={structuredData}
                        >
                          <span className="text-link-on-white pointer">
                            structured data{' '}
                            <i className="fas fa-info-circle text-info"></i>
                          </span>
                        </OverlayTrigger>
                      </li>
                      <li>
                        {' '}
                        <OverlayTrigger
                          trigger={['click', 'hover']}
                          placement="bottom"
                          overlay={metadata}
                        >
                          <span className="text-link-on-white pointer">
                            metadata{' '}
                            <i className="fas fa-info-circle text-info"></i>
                          </span>
                        </OverlayTrigger>
                      </li>
                      <li>title tags</li>
                      <li>description tags</li>
                      <li>headings</li>
                      <li>content</li>
                      <li>landing pages</li>
                    </ul>
                    This localization must be done in order to be ranked on the
                    first page for local intent keyword searches.
                  </div>
                  <p>
                    Local SEO also includes the optimization of{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={googleMyBusiness}
                    >
                      <span className="text-link-on-white pointer">
                        Google My Business (GMB){' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>
                    ,{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={localCitations}
                    >
                      <span className="text-link-on-white pointer">
                        local citations{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>{' '}
                    and customer reviews to help boost your chances of ranking
                    within Google Map's{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={localPack}
                    >
                      <span className="text-link-on-white pointer">
                        Local 3-Pack{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>
                    .
                  </p>
                  <p>
                    <strong className="text-info">
                      The higher you rank locally, the more likely customers
                      within your service area will find your business during
                      'near me' searches.
                    </strong>
                  </p>
                </div>
                <div className="col-md-4 order-0 order-md-1 mb-4 mb-md-0 px-2">
                  <ImgLocalBuyNearMe className="border border-secondary rounded mx-auto mt-1 mt-md-0 drop-shadow" />
                </div>
              </div>
              <div className="row justify-content-center py-5">
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgLocalStore className="border border-secondary rounded drop-shadow" />
                </div>
                <div className="col-md-8">
                  <h3 className="mb-4">What are the benefits of Local SEO?</h3>
                  <p>
                    Every business can benefit from Local SEO because it
                    ultimately leads to more customers and more sales by:
                  </p>
                  <ul>
                    <li>
                      Increasing visibility on Google Maps and local SERPs
                    </li>
                    <li>
                      Driving quality leads to your business from targeted
                      keywords
                    </li>
                    <li>
                      Allowing you to rank within your industry and not compete
                      against major corporations
                    </li>
                    <li>
                      Building positive reviews and trust within your service
                      areas
                    </li>
                  </ul>
                  <p>
                    <strong className="text-info">
                      Google My Business also provides valuable insights about
                      your customers to help you understand where they are
                      coming from, how they found you and what works best.
                    </strong>
                  </p>
                </div>
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-md-8">
                  <h3 className="mb-4">What is the Google Local Pack?</h3>
                  <p>
                    The Google Local Pack, often referred to as the 'Local
                    3-Pack', is Google's way of listing the top local search
                    results for a given query.
                  </p>
                  <p>
                    It's important to note, this listing appears at the top of
                    the results page, above the organic search results.
                  </p>
                  <p>
                    Google wants to place a particular focus on local business
                    listings, which works out great for the top 3 visible
                    results!
                  </p>
                  <p>
                    <strong className="text-info">
                      Reaching the coveted Local 3-Pack results will plaster
                      your business, hours of operation and reviews on the first
                      page, while the rest of the listings can only be accessed
                      by following a link to see more.
                    </strong>
                  </p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgLocalMapPack className="border border-secondary rounded drop-shadow" />
                </div>
              </div>
              <div className="container col-md-8 py-3">
                <ImgLocalSeoMapPack className="border rounded drop-shadow" />
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgLocalGMB className="border border-secondary rounded drop-shadow" />
                </div>
                <div className="col-md-8">
                  <h3 className="mb-4">Google My Business & Local Citations</h3>

                  <p>
                    I will analyze your sites technical performance, SEO factors
                    and user interface. Most importantly, I'll examine your
                    Google Analytics and Search Console statistics.
                  </p>
                  <p>
                    From here I can pinpoint your sites' strengths and
                    weaknesses to formulate an SEO strategy that's unique to
                    your business goals and needs.
                  </p>
                  <p>
                    The actual implementation is a long term process that
                    generally takes at least 4 months to see significant
                    results. SEO can be an ongoing procedure since your
                    competition is constantly attempting to outrank you.
                  </p>
                  <p>
                    It's possible to see rank changes within a month for certain
                    keywords with low difficulty, especially for sites that are
                    well established with strong{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={domainAuthority}
                    >
                      <span className="text-link-on-white pointer">
                        domain authority{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>{' '}
                    .
                  </p>
                  <p>
                    For a new site, expect about 35 weeks for every new page to
                    reach about 90% of the traffic it will provide for the long
                    term.{' '}
                  </p>
                  <p>
                    <strong className="text-info">
                      Anyone that tells you they can provide instant SEO results
                      is misleading you and potentially using techniques. These
                      methods are malicious, harmful to your website and will
                      result in your business being penalized by Google.
                    </strong>
                  </p>
                </div>
              </div>
              <div className="row justify-content-center py-5">
                <div className="col-md-8">
                  <h3 className="mb-4">Organic SEO vs Local SEO</h3>
                  <p>
                    Organic SEO and{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={localSEO}
                    >
                      <span className="text-link-on-white pointer">
                        Local SEO{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>{' '}
                    both utilize the same strategies, such as keyword and
                    competitor research, on-page and off-page SEO, technical SEO
                    and valuable content creation.
                  </p>
                  <p>
                    The difference lies within the focus on a geographical
                    component.
                  </p>
                  <p>
                    Organic SEO concentrates on ranking a website for certain
                    keywords globally, while Local SEO concentrates on
                    generating awareness of your business website within
                    targeted towns and cities.
                  </p>
                  <p>
                    Local SEO also takes it a step further by making connections
                    between:
                  </p>
                  <ul>
                    <li>
                      <OverlayTrigger
                        trigger={['click', 'hover']}
                        placement="bottom"
                        overlay={googleMyBusiness}
                      >
                        <span className="text-link-on-white pointer">
                          Google My Business (GMB){' '}
                          <i className="fas fa-info-circle text-info"></i>
                        </span>
                      </OverlayTrigger>
                    </li>
                    <li>
                      <OverlayTrigger
                        trigger={['click', 'hover']}
                        placement="bottom"
                        overlay={localCitations}
                      >
                        <span className="text-link-on-white pointer">
                          local citations{' '}
                          <i className="fas fa-info-circle text-info"></i>
                        </span>
                      </OverlayTrigger>
                    </li>
                    <li>
                      <OverlayTrigger
                        trigger={['click', 'hover']}
                        placement="bottom"
                        overlay={structuredData}
                      >
                        <span className="text-link-on-white pointer">
                          structured data{' '}
                          <i className="fas fa-info-circle text-info"></i>
                        </span>
                      </OverlayTrigger>
                    </li>
                    <li>customer reviews</li>
                  </ul>
                  <p>
                    These connections are used to boost your business into
                    Google Map's{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={localPack}
                    >
                      <span className="text-link-on-white pointer">
                        Local 3-Pack{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>
                    .
                  </p>
                  <p>
                    Although Local SEO is especially important for
                    brick-and-mortar businesses and companies that serve
                    specific local areas,{' '}
                    <strong className="text-info">
                      Organic SEO is essential to creating an audience that's
                      built on trust from the informational value you provide.
                      This value will solidify your website as a domain
                      authority within your industry.
                    </strong>
                  </p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgLocalBuyNearMe className="border border-secondary rounded drop-shadow" />
                </div>
              </div>
              <div className="container d-flex justify-content-center align-items-center">
                <Button
                  btnlabel="Rank My Website Locally"
                  btnlink="/contact"
                  btnsolid={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default LocalSeoPage__Section;

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import ImgStatsSeoFirstPage from '../../ImageComps/image-stats-seo-first-page-results';
import ImgStatsSeoCtr from '../../ImageComps/image-stats-seo-ctr-first-result';
import ImgStatsSeoFirstFive from '../../ImageComps/image-stats-seo-first-five-results';
import ImgStatsSeoOrganicTraffic from '../../ImageComps/image-stats-seo-organic-web-traffic';

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

  const transactionalIntentKeywords = (
    <Popover id="transactional-intent-keywords">
      <Popover.Title className="text-info" as="h4">
        <strong>Transactional Intent Keywords</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Transactional intent keywords refer to particular phrases people
          search for when they're ready to buy a product or service.
        </p>
        <p>
          The intent behind these phrases will signal that they've done their
          research, identified their need, and now they're actively in the
          buying cycle, considering the solution they want to purchase.
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
          willing to buy. When their search phrase uses buyer intent keywords,
          they are more likely to click a link and become a paying customer.
        </p>
        <p>
          On the other hand, if a person's search phrase uses informational
          intent keywords, they are simply doing research and less likely to
          buy.
        </p>
      </Popover.Content>
    </Popover>
  );

  const seoAudit = (
    <Popover id="seo-audit">
      <Popover.Title className="text-info" as="h4">
        <strong>SEO Audit</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          An SEO audit consists of examining your website to determine where you
          perform well in terms of SEO and where you need improvement.
        </p>
        <p>
          This can be done by referencing all the current ranking factors
          recommended by Google and comparing them with each component of your
          website.
        </p>
      </Popover.Content>
    </Popover>
  );

  const blackHatSEO = (
    <Popover id="black-hat-seo">
      <Popover.Title className="text-info" as="h4">
        <strong>Black Hat SEO</strong>
      </Popover.Title>
      <Popover.Content>
        <p>
          Black hat SEO is an unethical practice that violates search engine
          guidelines and terms of service, using hacks and loopholes to game the
          system in order to rank a website higher.
        </p>
        <p>
          Black hat techniques include keyword stuffing, hidden text or links,
          cloaking, using private link networks, and many more. All of these
          techniques can lead to your website being banned from search engines.
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
          <div className="container mb-3 pt-2 border border-secondary rounded drop-shadow bg-texture-2">
            <div className="p-2 p-md-5">
              <p className="display-4 text-center">
                8-Steps to Organic Success
              </p>
              <div className="p-2 p-md-5 mb-5">
                <div className="row justify-content-center align-items-baseline">
                  <div className="col-6 col-md-3 bg-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">1</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="fas fa-4x fa-clipboard-list text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Website <br />
                          Audit
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-light-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">2</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-chart-bar text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Data & <br />
                          Analytics
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-purple-to-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">3</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="fab fa-4x fa-searchengin text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Competitor <br />
                          Research
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-gray-to-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">4</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-key text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Keyword <br />
                          Research
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-gray-to-purple pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">5</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-file-alt text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          On-Page <br />
                          SEO
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-purple-to-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">6</span>
                    </div>
                    <div className="text-center text-white">
                      <i className="fas fa-4x fa-link text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Off-Page <br />
                          SEO
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 bg-light-gray pt-4 pb-2">
                    <div className="bg-white drop-shadow border border-secondary text-info rounded-circle position-absolute top-0 left-0 px-2">
                      <span className="font-weight-bold">7</span>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-4x fa-cogs text-secondary"></i>
                      <div className="my-3">
                        <strong>
                          Technical <br />
                          SEO
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
                  <h3 className="mb-4">
                    Every Business Owner Knows They Need a Website in 2020...
                  </h3>

                  <p>
                    What most people are{' '}
                    <strong className="text-info">unaware</strong> of is what a
                    search engine's algorithm looks for when deciding who ranks
                    first and for what.
                  </p>
                  <p>
                    Fortunately, there are a number of{' '}
                    <strong className="text-info">known ranking factors</strong>{' '}
                    that can be implemented on a website to help it become more
                    visible to Google.
                  </p>
                  <p>
                    Some are quick and simple, like adding a descriptive,
                    relevant and unique title to each page of your website. Now
                    Google can{' '}
                    <strong className="text-info">
                      understand what your pages are all about
                    </strong>
                    .
                  </p>
                  <p>
                    Unfortunately, it gets{' '}
                    <strong className="text-info">
                      a lot more complicated
                    </strong>{' '}
                    and can be quite time consuming. Business owners are busy
                    and with only so many hours in a day, most would rather
                    focus their time on the{' '}
                    <strong className="text-info">
                      work that keeps their doors open
                    </strong>
                    .
                  </p>
                  <p>That's where I come in!</p>
                  <p>
                    I can{' '}
                    <strong className="text-info">
                      help your business thrive online
                    </strong>{' '}
                    by converting it from a lonely island floating in digital
                    space to a complex web of connected bridges, reaching out to
                    potential customers.
                  </p>
                </div>
                <div className="col-md-4 order-0 order-md-1 mb-4 mb-md-0 px-2">
                  <ImgStatsSeoFirstPage className="border border-secondary rounded mx-auto mt-1 mt-md-0 drop-shadow" />
                </div>
              </div>
              <div className="row justify-content-center py-5">
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgStatsSeoCtr className="border border-secondary rounded drop-shadow" />
                </div>
                <div className="col-md-8">
                  <h3 className="mb-4">What is Organic SEO?</h3>
                  <p>
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={organicSEO}
                    >
                      <span className="text-link-on-white pointer">
                        Organic SEO{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>{' '}
                    (Organic Search Engine Optimization) is the process of
                    improving your website's visibility to search engines, such
                    as Google and Bing.
                  </p>
                  <p>
                    The ultimate goal is to strike a balance between optimizing
                    your website for search engine algorithms, while maximizing
                    your user's experience.
                  </p>
                  <p>Important factors reign supreme, such as:</p>
                  <ul>
                    <li>accuracy of the information you provide</li>
                    <li>format in which you deliver valuable content</li>
                    <li>
                      popularity of your website among established domains
                    </li>
                  </ul>
                  <p>
                    <strong className="text-info">
                      Together, the balance between serving people and
                      computers, while abiding to important factors and
                      guidelines will boost your website's ranking on{' '}
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
                </div>
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-md-8">
                  <h3 className="mb-4">Why is Organic SEO Important?</h3>
                  <p>
                    Organic SEO has become very important for your business
                    because new technology is allowing search engines to
                    accurately modify search results based on semantics and user
                    intent.
                  </p>
                  <p>
                    This means when someone has the intention to buy, the
                    results will be reflected accordingly.
                  </p>
                  <p>
                    Now the chances of your business making a sale have greatly
                    increased, provided it's ranked on the first page for{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={transactionalIntentKeywords}
                    >
                      <span className="text-link-on-white pointer">
                        transactional intent keywords{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>
                    .{' '}
                  </p>
                  <p>
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
                </div>
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgStatsSeoFirstFive className="border border-secondary rounded drop-shadow" />
                </div>
              </div>
              <div className="py-3">
                <div className="text-center lead my-5 p-2 border rounded border-primary border-size-5">
                  More Visibility{' '}
                  <i className="fas fa-long-arrow-alt-right text-info"></i> More
                  Clicks{' '}
                  <i className="fas fa-long-arrow-alt-right text-info"></i> More
                  Quality Leads{' '}
                  <i className="fas fa-long-arrow-alt-right text-info"></i> More
                  Paying Customers
                </div>
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-md-4 mb-4 mb-md-0 px-2">
                  <ImgStatsSeoOrganicTraffic className="border border-secondary rounded drop-shadow" />
                </div>
                <div className="col-md-8">
                  <h3 className="mb-4">Implementing Organic SEO</h3>
                  <p>
                    The implementation of Organic SEO all starts with an{' '}
                    <OverlayTrigger
                      trigger={['click', 'hover']}
                      placement="bottom"
                      overlay={seoAudit}
                    >
                      <span className="text-link-on-white pointer">
                        SEO audit{' '}
                        <i className="fas fa-info-circle text-info"></i>
                      </span>
                    </OverlayTrigger>{' '}
                    of your current website.
                  </p>
                  <p>
                    I will analyze your sites technical performance, SEO factors
                    and user interface. Most importantly, I'll examine your
                    Google Analytics and Search Console statistics.
                  </p>
                  <p>
                    From here, I can pinpoint your sites' strengths and
                    weaknesses in order to formulate an SEO strategy that's
                    unique to your business goals and needs.
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
                      is misleading you and potentially using{' '}
                      <OverlayTrigger
                        trigger={['click', 'hover']}
                        placement="bottom"
                        overlay={blackHatSEO}
                      >
                        <span className="text-link-on-white pointer">
                          black hat SEO{' '}
                          <i className="fas fa-info-circle text-info"></i>
                        </span>
                      </OverlayTrigger>{' '}
                      techniques. These methods are malicious, harmful to your
                      website and will result in your business being penalized
                      by Google.
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
                  <ImgStatsSeoOrganicTraffic className="border border-secondary rounded drop-shadow" />
                </div>
              </div>
              {/* <h3 className="mb-4 mt-5">Organic SEO vs Pay-Per-Click (PPC)</h3>
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
              </p> */}
              <div className="container d-flex justify-content-center align-items-center">
                <Button
                  btnlabel="Rank My Website Organically"
                  btnlink="/contact"
                  btnsolid={true}
                />
                {/* <Link
                  className="text-link-on-white ml-4"
                  to="/services/organic-seo"
                >
                  Dive Deeper Into Organic SEO{' '}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default OrganicSeoSectionServices;

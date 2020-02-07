import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import ImgOrganicSeoMemHall from '../../ImageComps/image-organic-seo-memorial-hall';
import ImgStatsSeoFirstPage from '../../ImageComps/image-stats-seo-first-page-results';
import ImgStatsSeoCtr from '../../ImageComps/image-stats-seo-ctr-first-result';

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
              <p className="display-4 text-center">Target Quality Traffic</p>
              <div className="p-2 p-md-5">
                <div className="row justify-content-center align-items-baseline mb-md-5">
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-clipboard-list text-secondary"></i>
                      <div className="my-3">
                        <strong>Website Audit</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-chart-bar text-secondary"></i>
                      <div className="my-3">
                        <strong>Analytics</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-key text-secondary"></i>
                      <div className="my-3">
                        <strong>Keyword Research</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fab fa-4x fa-searchengin text-secondary"></i>
                      <div className="my-3">
                        <strong>Competitor Research</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center align-items-baseline mb-md-5">
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-file-alt text-secondary"></i>
                      <div className="my-3">
                        <strong>On-Page SEO</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-link text-secondary"></i>
                      <div className="my-3">
                        <strong>Off-Page SEO</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-cogs text-secondary"></i>
                      <div className="my-3">
                        <strong>Technical SEO</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <i className="fas fa-4x fa-newspaper text-secondary"></i>
                      <div className="my-3">
                        <strong>Content Creation</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-5">
                <div className="col-md-8 order-1 order-md-0">
                  <p>
                    Every business owner{' '}
                    <strong className="text-info">
                      knows they need a website
                    </strong>
                    , but what most people are unaware of is how a search
                    engine's algorithm <em>actually</em> works when deciding who
                    ranks first and for what.
                  </p>
                  <p>
                    Fortunately, there are a number of{' '}
                    <strong className="text-info">known ranking factors</strong>{' '}
                    that can be implemented on a website to help it become more
                    visible to Google.
                  </p>
                  <p>
                    Some are quick and simple, like adding a descriptive,
                    relevant and unique page title to each page of your website.
                    Now Google can{' '}
                    <strong className="text-info">
                      understand what that page is all about
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
                      work that keeps their business' doors open
                    </strong>
                    .
                  </p>
                  <p>
                    That's where I come in! I can{' '}
                    <strong className="text-info">
                      help your business thrive online
                    </strong>{' '}
                    by converting it from a lonely island floating in digital
                    space to a complex web of connected bridges, reaching out to
                    the masses.
                  </p>
                </div>
                <div className="col-md-4 order-0 order-md-1 mb-4 mb-md-0">
                  <ImgStatsSeoFirstPage className="border border-secondary rounded mx-auto mt-1 mt-md-0 drop-shadow" />
                </div>
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-md-4 mb-4 mb-md-0">
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
                  <div>
                    Important factors reign supreme, such as:
                    <ul>
                      <li>accuracy of the information your provide</li>
                      <li>format in which you deliver valuable content</li>
                      <li>
                        popularity of your website among established domains
                      </li>
                    </ul>
                  </div>
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
                  <h3 className="mb-4">Why is Organic SEO important?</h3>
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
                <div className="col-md-4 mb-4 mb-md-0">
                  <ImgStatsSeoCtr className="border border-secondary rounded drop-shadow" />
                </div>
              </div>
              <div className="text-center lead my-5 p-2 border rounded border-primary border-size-5">
                More Visibility{' '}
                <i className="fas fa-long-arrow-alt-right text-info"></i> More
                Clicks <i className="fas fa-long-arrow-alt-right text-info"></i>{' '}
                More Quality Leads{' '}
                <i className="fas fa-long-arrow-alt-right text-info"></i> More
                Paying Customers
              </div>
              <div className="row justify-content-center my-5">
                <div className="col-md-4 mb-4 mb-md-0">
                  <ImgStatsSeoCtr className="border border-secondary rounded drop-shadow" />
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
                    From here I can pinpoint your sites' strengths and
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
                    well established with strong domain authority.
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
              <div className="row justify-content-center my-5">
                <div className="col-md-8">
                  <h3 className="mb-4">Organic SEO vs Local SEO</h3>
                  <p>
                    Organic SEO and Local SEO both utilize the same strategies,
                    such as keyword and competitor research, on-page and
                    off-page SEO, technical SEO and valuable content creation.
                    The difference lies within the focus on a geographical
                    component.
                  </p>
                  <p>
                    Organic SEO concentrates on ranking a website for certain
                    keywords globally, while Local SEO concentrates on
                    generating awareness of your business website within
                    targeted towns and cities. Local SEO also takes it a step
                    further by connecting{' '}
                    <Link className="text-link-on-white" to="/glossary">
                      Google My Business (GMB)
                    </Link>
                    , customer reviews, local citations and{' '}
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
                    Although Local SEO is especially important for
                    brick-and-mortar businesses and companies that serve
                    specific local areas,{' '}
                    <strong className="text-info">
                      Organic SEO is essential to creating an audience that's
                      built on trust from the informational value you provide.
                      This value will solidify your website as a{' '}
                      <Link className="text-link-on-white" to="/glossary">
                        domain authority
                      </Link>{' '}
                      within your industry.
                    </strong>
                  </p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <ImgStatsSeoCtr className="border border-secondary rounded drop-shadow" />
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
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <Button
                  className="mr-4"
                  btnlabel="Get Organic SEO"
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

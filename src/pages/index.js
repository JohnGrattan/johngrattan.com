import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Scroller from '../components/scroller';
import PortfolioModal from '../components/portfolio/modal';
import PortfolioCarousel from '../components/portfolio/carousel';

import ImgJgGreen from '../components/image-jg-headshot-green';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    };
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    });
  }

  render() {
    return (
      <Layout>
        <SEO 
        title="John Grattan: Freelance Digital Marketing - Offering SEO, SEM, Web Design, Web Development Services | Boston, MA & Plymouth, MA"
        description="Hi, I'm John Grattan. I offer affordable freelance Digital Marketing services such as SEO, SEM, Web Design & Development to local businesses in Massachusetts." 
        />
        <section className="page-section bg-texture-1" id="about">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-md-6 order-md-2 drop-shadow-dark">
                <div className="container-md">
                  <ImgJgGreen className="border border-primary" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 text-center order-md-1 mt-5">
                <h1 className="text-dark mt-0">
                  Hi, I'm John Grattan
                  <span className="d-block mt-3">Your one man </span>
                  <span className="d-block text-secondary">
                    Digital Marketing
                  </span>
                  <span className="d-block text-secondary">Agency</span>
                </h1>
                <hr className="divider-long primary my-4" />
                <p className="text-dark mb-4 text-left px-3 px-md-0">
                  I help businesses adapt to the latest technologies by
                  personalizing digital marketing strategies —{' '}
                  <strong className="text-secondary">
                    centered on custom, responsive websites
                  </strong>{' '}
                  — to help generate leads and improve customer experience.
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger shadow mt-3"
                  href="#process"
                  onClick={Scroller.handleAnchorScroll}
                >
                  See My Process
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-img-process" id="process">
          <div className="container">
            <h2 className="text-center mt-0 text-white drop-shadow-dark">
              Digital Marketing Process
            </h2>
            <hr className="divider mt-4" />
            <div className="row">
              <div className="col-md-6 text-center justify-content-center align-items-center">
                <div className="my-5 border shadow p-3 bg-texture-2">
                  <i className="fas fa-4x fa-chess text-primary mb-4 drop-shadow"></i>
                  <h3 className="h4 mb-2">Strategy & Planning</h3>
                  <hr className="light" />
                  <div className="text-muted mb-0 text-left my-3">
                    <p>
                      We'll work together to diagnose your unique challenges and
                      formulate viable solutions to establish{' '}
                      <strong className="text-secondary">
                        domain authority within your industry
                      </strong>
                      .
                    </p>
                    <p>
                      I will upgrade your website from a simple brochure to a{' '}
                      <strong className="text-secondary">
                        trusted resource of value and information
                      </strong>{' '}
                      for your customers.
                    </p>
                  </div>
                  <p className="text-muted mb-3 text-left">
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">SEO content site map</span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Service & location landing pages
                      </span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Plan adaptation to analytics</span>
                    </span>
                  </p>
                  <Link
                    to="/strategy-and-planning"
                    className="btn btn-primary btn-xl js-scroll-trigger shadow my-2"
                  >
                    See My Strategy
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-center justify-content-center align-items-center">
                <div className="my-5 border shadow p-3 bg-texture-2">
                  <i className="fas fa-4x fa-drafting-compass text-primary mb-4 drop-shadow"></i>
                  <h3 className="h4 mb-2">Professional Design</h3>
                  <hr className="light" />
                  <div className="text-muted mb-0 text-left my-3">
                    <p>
                      Users instantly judge your credibility the second they see
                      your design. This{' '}
                      <strong className="text-secondary">
                        first impression is critical to user engagement
                      </strong>{' '}
                      and can easily sabotage a conversion.
                    </p>
                    <p>
                      If your website is{' '}
                      <strong className="text-secondary">
                        outdated, malfunctioning or disorganized
                      </strong>
                      , I can help upgrade your design.
                    </p>
                  </div>
                  <p className="text-muted mb-3 text-left">
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Responsive on all devices</span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Conversion rate optimization</span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">UI/UX focused layouts</span>
                    </span>
                  </p>
                  <a
                    className="btn btn-primary btn-xl js-scroll-trigger shadow my-2"
                    href="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    How I design
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center justify-content-center align-items-center">
                <div className="mt-5 border shadow p-3 bg-texture-2">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4 drop-shadow"></i>
                  <h3 className="h4 mb-2">Custom Development</h3>
                  <hr className="light" />
                  <div className="text-muted mb-3 text-left my-3">
                    <p>
                      Utilizing the latest web technologies will{' '}
                      <strong className="text-secondary">
                        prevent unwanted bloat, maintain clean code and result
                        in blazing speeds
                      </strong>{' '}
                      with ability to scale.
                    </p>
                    <p>
                      Let's{' '}
                      <strong className="text-secondary">
                        move past WordPress and cumbersome page builders
                      </strong>{' '}
                      to harness the power of modern development tools.
                    </p>
                  </div>
                  <p className="text-muted mb-3 text-left">
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Rank 90-100 on Google Pagespeed Insights
                      </span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        No servers, no database to get hacked
                      </span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Scalable for max ROI</span>
                    </span>
                  </p>
                  <a
                    className="btn btn-primary btn-xl js-scroll-trigger shadow my-2"
                    href="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    Modern Benefits
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center justify-content-center align-items-center">
                <div className="mt-5 border shadow p-3 bg-texture-2">
                  <i className="fas fa-4x fa-chart-line text-primary mb-4 drop-shadow"></i>
                  <h3 className="h4 mb-2">SEO & SEM Marketing</h3>
                  <hr className="light" />
                  <div className="text-muted mb-0 text-left my-3">
                    <p>
                      It's imperative your business appears high on search
                      engine results pages. Let's make your site{' '}
                      <strong className="text-secondary">
                        visible and increase the amount of organic visitors
                      </strong>
                      .
                    </p>
                    <p>
                      With long term SEO and short term SEM, I can{' '}
                      <strong className="text-secondary">
                        drive traffic, generate quality leads to sales funnels
                      </strong>{' '}
                      and{' '}
                      <strong className="text-secondary">
                        increase your ROI
                      </strong>
                      .
                    </p>
                  </div>
                  <p className="text-muted mb-3 text-left">
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">Leverage local SEO</span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        Competitor & keyword research
                      </span>
                    </span>
                    <span className="d-flex">
                      <i className="far fa-check-square text-secondary mt-1"></i>
                      <span className="ml-2">
                        On-page and off-page optimization
                      </span>
                    </span>
                  </p>
                  <a
                    className="btn btn-primary btn-xl js-scroll-trigger shadow my-2"
                    href="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    SEO & SEM Tips
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 0)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 1)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 2)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="images/portfolio/fullsize/4.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 3)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/5.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 4)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/6.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 5)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a
              className="btn btn-light btn-xl"
              href="https://startbootstrap.com/themes/creative/"
            >
              Download Now!
            </a>
          </div>
        </section>

        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    );
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

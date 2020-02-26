import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import FooterSectionPage from './Footer/FooterSectionPage/FooterSectionPage';
import './layout.scss';

const getScrollNode = element => {
  return (
    element.ownerDocument.scrollingElement ||
    element.ownerDocument.documentElement
  );
};

const isScrolled = element => {
  const scrollNode = getScrollNode(element);
  return scrollNode.scrollTop > 0;
};

export default class LayoutBody extends React.Component {
  constructor(props) {
    super(props);
    this.siteContainer = React.createRef();
    this.state = {
      scrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const element = this.siteContainer.current;
    this.setState({
      scrolled: isScrolled(element),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const element = this.siteContainer.current;
    this.setState({
      scrolled: isScrolled(element),
    });
  }

  render() {
    let className = 'site-container';
    if (this.props.className) className += ` ${this.props.className}`;
    if (this.state.scrolled) className += ' navbar-scrolled';

    return (
      <div className={className} ref={this.siteContainer} id="page-top">
        <Navbar />
        <main>{this.props.children}</main>
        <FooterSectionPage className="bg-texture-1" />
      </div>
    );
  }
}

LayoutBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
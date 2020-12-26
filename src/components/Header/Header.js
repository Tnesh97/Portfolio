import React, { Component } from 'react';
import { Link } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown, faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook, faTwitter, faLinkedinIn, faInstagram, faSkype
} from "@fortawesome/free-brands-svg-icons";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "scrolled") {
          this.setState({ status: "scrolled" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (

      <React.Fragment>
        <section id="Header">
       <Navbar expand="md" fixed="top" style={{
          backgroundColor: this.state.status === "top" ? "transparent" : "rgba(0, 0, 0, 0.5)"
        }}>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <FontAwesomeIcon className="bars" icon={faBars} />
              </button>
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mx-auto">
                <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" activeClass="active" to="Header" spy={true} smooth={true} duration={1000}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" to="Resume" spy={true} smooth={true} duration={1000}>Resume</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" activeClass="active" to="Works" spy={true} smooth={true} duration={1000}>Works</Link>
                </li>
              </ul>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
	  
	    <div className="jumbotron text-center mb-0">
            <div className="intro">
              
              <h1 className="responsive-headline">I'm Thinesh Nagindran..</h1>
               <h3>Hello.My name is Thinesh, and I'm an <span>IT fresh graduate</span> from <span>SEGi University</span> who is actively looking for an opportunity to work as a Web Developer. Let's <a className="smoothscroll" href="#about">start scrolling </a>
               and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
               <hr />
               <div className="social">
                 <a href="https://web.facebook.com/T.Nesh.97" onClick="window.open('https://web.facebook.com/T.Nesh.97', '_blank');"><FontAwesomeIcon icon={faFacebook} /></a>
                 <a href="https://twitter.com/thineshnagindr1?s=08" onClick="window.open('https://twitter.com/thineshnagindr1?s=08', '_blank');"><FontAwesomeIcon icon={faTwitter} /></a>
                 <a href="https://www.linkedin.com/" onClick="window.open('https://www.linkedin.com/', '_blank');"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                 <a href="https://www.instagram.com/thinesh1908/" onClick="window.open('https://www.instagram.com/thinesh1908/', '_blank');"><FontAwesomeIcon icon={faInstagram} /></a>
                 <a href="https://www.skype.com/en/" onClick="window.open('https://www.skype.com/en/', '_blank');"><FontAwesomeIcon icon={faSkype} /></a>
              </div>
            </div>
            <div className="scrolldown">
              <p>
                <Link className="smoothscroll" to="about" smooth={true} duration={1000}><FontAwesomeIcon icon={faArrowAltCircleDown} /></Link>
              </p>
            </div>
      </div>
      </section>
      
      </React.Fragment>
      
    );
  }
}

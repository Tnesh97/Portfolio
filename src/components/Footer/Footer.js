import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
    faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
 

export default class Footer extends Component {
  render() {
    return (
        <React.Fragment>
        <section id="footer">
        <Container>
        
        <div className="scrollUp">
              <p>
                <Link className="smoothscroll" to="Header" smooth={true} duration={1000}><FontAwesomeIcon icon={faArrowAltCircleUp} /></Link>
              </p>
        </div>

        <Row>
            <Col>
            <div className="socialList">
                 <a href="https://web.facebook.com/T.Nesh.97" target="_blank" rel="noopener noreferrer" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                 <a href="https://twitter.com/thineshnagindr1?s=08" target="_blank" rel="noopener noreferrer" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                 <a href="https://www.instagram.com/thinesh1908/" target="_blank" rel="noopener noreferrer" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                 <a href="https://github.com/Tnesh97" target="_blank" rel="noopener noreferrer" className="github"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
            <ul className="copyright">
                <li>&copy; Copyright 2020 Thinesh</li>   
            </ul>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
            <ul className="name">
                <li>Design by Thinesh Nagindran</li>
            </ul>
            </Col>
        </Row>
        </Container>
        </section>
        </React.Fragment>
        );
  }
}
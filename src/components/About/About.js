import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload
} from "@fortawesome/free-solid-svg-icons";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">

      <Container>
  <Row>
    <Col xs={12} sm={12} md={4} lg={4}  className="text-center">
      <img className="profile-pic" src="images/profilepic.jpg" alt="" />
    </Col>
    <Col xs={12} sm={12} md={8} lg={8} >
            <h2>About Me</h2>
            <p className="about_me">
              My Name is Thinesh, an IT fresh graduate from <span >SEGi University</span> who is actively looking 
              for an opportunity to work as a Web Developer.I want to be a part of company that indulges professional growth which provides challenging and
              rewarding career while allowing me to utilize my knowledge and skills.I am a person fueled with passion and hunger for deeper knowledge related to Web Development.
            </p>

    <Row>
    <Col xs={12} sm={12} md={5} lg={5} className="text-left">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p className="address">
          <span>Thinesh Nagindran</span><br />
          <span>No 99, Jalan Taman Indah,<br />
            Taman Indah, 28400 Mentakab, <br />
            Pahang
          </span><br />
          <span>013-2639234</span><br />
          <span>thineshnagindran@gmail.com</span>
        </p>
      </div>
    </Col>
    <Col xs={12} sm={12} md={7} lg={7} className="text-right">
      <div className="download">
        <p>
          <a href="www.download.com" className="button"><FontAwesomeIcon className="download-icon" icon={faDownload} />Download Resume</a>
          </p>
      </div>
    </Col>
  </Row> 
    </Col> 
  </Row>
</Container>
      
      </section>  
      </React.Fragment>
    );
  }
}
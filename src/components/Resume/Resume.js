import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

const style = { height: "30px" };

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
          <section id="Resume">
            <div>
            <Container>
                <Row className="education">
                    <Col xs={12} sm={12} md={3} lg={3} className="text-center">
                        <div className="title">
                            <h1><span>Education</span></h1>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="content">
                                <h3>SEGi University Kota Damansara</h3>
                                <p className="info">Bachelor's Degree in Information Technology (Software Engineering) <span>&bull;</span> <em className="date">February 2018-February 2020</em></p>
                                <p className="info-paragraph">
                                 Second Class Honours,Upper Division<br/>
                                 CGPA = 3.25
                                </p>
                            </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="content">
                                <h3>SEGi College Kota Damansara</h3>
                                <p className="info">Diploma in Information Technology <span>&bull;</span> <em className="date">September 2015-December 2017</em></p>
                                <p className="info-paragraph">
                                 CGPA = 3.58
                                </p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="work">
                    <Col xs={12} sm={12} md={3} lg={3} className="text-center">
                        <div className="title">
                            <h1><span>Work</span></h1>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9} >
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="content">
                            <h3>Kollect System Sdn Bhd | <span>Petaling Jaya,Malaysia</span></h3>
                            <p className="info">Internship <span>&bull;</span> <em className="date">June 2019-Aug 2019</em></p>
                            <div>
                            <p className="info-paragraph">
                            KOLLECT SYSTEMS SDN BHD is an Award Winning MSC-Status Revenue Collections &amp; Debt
                            Recovery Systems specialist company. KOLLECT SYSTEMS SDN BHD is a dynamic and fast growing
                            technology company focussing on the Revenue Collections, Debt Recovery, 3rd party Agency
                            Management, Legal Management, Behaviour Scoring, and Analytics.<br/>
                            <br /> I was assigned to do :
                            </p>
                            <ul>
                                <li>
                                     Generating reports using Jaspersoft and Spring tool
                                </li>
                                <li>
                                    Powerapp development (Company software)
                                </li>
                                <li>
                                    Web Development
                                </li>
                            </ul>
                            
                            </div>
                            </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="content">
                            <h3>Technosys Sdn Bhd | <span>Kuala Lumpur,Malaysia</span></h3>
                            <p className="info">Internship <span>&bull;</span> <em className="date">Sep 2017-Nov 2017</em></p>
                            <div>
                            <p className="info-paragraph">
                            Technosys is one of the leading providers of IT services and consulting solutions.
                            Technosys provides IT professionals on a project/ full-time basis for initiatives ranging from web
                            development, software development, game development and systems integration to network security
                            and technical support.<br />
                            <br /> I was assigned to do :
                            </p>    
                            <ul>
                                <li>
                                    Networking on D-Link & Assembling; Tp-Link router
                                </li>
                                <li>
                                    PC & Assembling; notebook repair, services, Installing operating system
                                </li>
                                <li>
                                    Maintain company website.
                                </li>
                            </ul>
                            </div>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="skills">
                    <Col xs={12} sm={12} md={3} lg={3} className="text-center">
                        <div className="title">
                            <h1><span>Skills</span></h1>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9} >
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                
                                <div className="progressBars">
                                    <div className="bars">
                                        <h1>HTML</h1>
                                        <ProgressBar striped variant="info" now={75} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>CSS</h1>
                                    <ProgressBar striped variant="info" now={70} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>JAVASCRIPT</h1>
                                    <ProgressBar striped variant="info" now={60} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>PHP</h1>
                                    <ProgressBar striped variant="info" now={60} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>C#</h1>
                                    <ProgressBar striped variant="info" now={60} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>VB.NET</h1>
                                    <ProgressBar striped variant="info" now={80} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>MySQL</h1>
                                    <ProgressBar striped variant="info" now={80} style={style} />
                                   </div>
                                   <div className="bars">
                                        <h1>REACT JS</h1>
                                    <ProgressBar striped variant="info" now={50} style={style} />
                                   </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
            
          </section>
      </React.Fragment>
    );
  }
}
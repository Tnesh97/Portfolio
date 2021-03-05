import React, { Component } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const style = { width: "200px", height: "200px" };

export default class Works extends Component {
  state = {
    isOpen: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  openModal2 = () => this.setState({ isOpen2: true });
  closeModal2 = () => this.setState({ isOpen2: false });
  openModal3 = () => this.setState({ isOpen3: true });
  closeModal3 = () => this.setState({ isOpen3: false });
  openModal4 = () => this.setState({ isOpen4: true });
  closeModal4 = () => this.setState({ isOpen4: false });
  openModal5 = () => this.setState({ isOpen5: true });
  closeModal5 = () => this.setState({ isOpen5: false });
  openModal6 = () => this.setState({ isOpen6: true });
  closeModal6 = () => this.setState({ isOpen6: false });
  

  render() {
    return (
      <React.Fragment>
        <section id="Works">
          <Container className="p-5">
            <Row>
              <Col className="heading text-center"><h1>Check Out Some of My Works.</h1></Col>
            </Row>
            <Row>
              <Col xs={12} md={6} sm={6} lg={3} className="text-center mt-5">
                <div className="box mx-auto" style={style}>
                  <div className="imgBx">
                    <Image src="images/works/aspnet.png" alt="" fluid rounded style={style} block="true"/>
                  </div>
                  <div className="content">
                    <div>
                      <h2>asp.net</h2>
                      <p>
                        <Link to="/#" onClick={this.openModal}><FontAwesomeIcon icon={faPlus} /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} sm={6} lg={3} className="text-center mt-5">
                <div className="box mx-auto" style={style}>
                  <div className="imgBx">
                    <Image src="images/works/html.png" alt="" fluid rounded  style={style} />
                  </div>
                  <div className="content">
                    <div>
                      <h2>html</h2>
                      <p>
                        <Link to="/#" onClick={this.openModal2}><FontAwesomeIcon icon={faPlus} /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} sm={6} lg={3} className="text-center mt-5">
                <div className="box mx-auto" style={style}>
                  <div className="imgBx">
                    <Image src="images/works/react.jpg" alt="" fluid rounded  style={style} />
                  </div>
                  <div className="content">
                    <div>
                      <h2>react</h2>
                      <p>
                        <Link to="/#" onClick={this.openModal3}><FontAwesomeIcon icon={faPlus} /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} sm={6} lg={3} className="text-center mt-5">
                <div className="box mx-auto" style={style}>
                  <div className="imgBx">
                    <Image src="images/works/php.png" alt="" fluid rounded  style={style} />
                  </div>
                  <div className="content">
                    <div>
                      <h2>php</h2>
                      <p>
                        <Link to="/#" onClick={this.openModal4}><FontAwesomeIcon icon={faPlus} /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} sm={6} lg={3} className="text-center mt-5">
                <div className="box mx-auto" style={style}>
                  <div className="imgBx">
                    <Image src="images/works/c_sharp.jpg" alt="" fluid rounded  style={style} />
                  </div>
                  <div className="content">
                    <div>
                      <h2>c#</h2>
                      <p>
                        <Link to="/#" onClick={this.openModal5}><FontAwesomeIcon icon={faPlus} /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} sm={6} lg={3} className="text-center mt-5">
                <div className="box mx-auto" style={style}>
                  <div className="imgBx">
                    <Image src="images/works/cPlus.png" alt="" fluid rounded  style={style} />
                  </div>
                  <div className="content">
                    <div>
                      <h2>C++</h2>
                      <p>
                        <Link to="/#" onClick={this.openModal6}><FontAwesomeIcon icon={faPlus} /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          {/*modal 1 */}

          <Modal show={this.state.isOpen} onHide={this.closeModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton >
              <Modal.Title><span>ASP.NET</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <div className="modal-explanation">
                    <p>
                      Simple ASP.NET MVC practice.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div ><Image src="images/works/aspnet.png" alt="" fluid rounded style={style} /></div>
                </Col>
              </Row>

          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
          </Button>
              <Button variant="primary"><a href="https://github.com/Tnesh97/BookListMVC/" target="_blank" style={{ textDecoration: 'none', color:'white' }}>View</a></Button>
            </Modal.Footer>
          </Modal>  

          {/*modal 2 */}

          <Modal show={this.state.isOpen2} onHide={this.closeModal2} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>HTML/CSS/JS/BOOTSRAP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <div>
                    <p>
                      Simple html,css,javascript and bootsrap practices.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div ><Image src="images/works/html.png" alt="" fluid rounded style={style} /></div>
                </Col>
              </Row>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal2}>
                Close
          </Button>
              <Button variant="primary"><a href="files/html/index.html" target="_blank" style={{ textDecoration: 'none', color:'white' }}>View</a></Button>
            </Modal.Footer>
          </Modal>
         
         {/*modal 3 */}

         <Modal show={this.state.isOpen3} onHide={this.closeModal3} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>REACT.JS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <div>
                    TODO app using REACT.JS
                  </div>
                </Col>
                <Col>
                  <div><Image src="images/works/react.jpg" alt="" fluid rounded  style={style} /></div>
                </Col>
              </Row>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal3}>
                Close
          </Button>
              <Button variant="primary"><a href="https://tnesh97.github.io/todo-app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white' }}>View</a></Button>
            </Modal.Footer>
          </Modal>

          {/*modal 4 */}

          <Modal show={this.state.isOpen4} onHide={this.closeModal4} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>PHP&MYSQL</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <div>
                     CRUD application with PHP and MySQL.
                  </div>
                </Col>
                <Col>
                  <div><Image src="images/works/php.png" alt="" fluid rounded  style={style} /></div>
                </Col>
              </Row>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal4}>
                Close
          </Button>
              <Button variant="primary"><a href="https://github.com/Tnesh97/php_mysql.git" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white' }}>View</a></Button>
            </Modal.Footer>
          </Modal>

          {/*modal 5 */}

          <Modal show={this.state.isOpen5} onHide={this.closeModal5} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>C#</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <div>C# practices
                  </div>
                </Col>
                <Col>
                  <div><Image src="images/works/c_sharp.jpg" alt="" fluid rounded  style={style} /></div>
                </Col>
              </Row>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal5}>
                Close
          </Button>
              <Button variant="primary"><a href="https://github.com/Tnesh97/RazorPages.git" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white' }}>View</a></Button>
            </Modal.Footer>
          </Modal>

          {/*modal 6 */}

          <Modal show={this.state.isOpen6} onHide={this.closeModal6} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>C++</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <div>C++ Calculator
                  </div>
                </Col>
                <Col>
                  <div><Image src="images/works/cPlus.png" alt="" fluid rounded  style={style} /></div>
                </Col>
              </Row>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal6}>
                Close
            </Button>
            <Button variant="primary"><a href="https://github.com/Tnesh97/CplusplusCalculator.git" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white' }}>View</a></Button>
            </Modal.Footer>
          </Modal>
          
        </section>
      </React.Fragment>
    );
  }
}

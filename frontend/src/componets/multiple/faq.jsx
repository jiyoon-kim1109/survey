import React from "react";
import {Container, Row, Col, Tab, Nav, Accordion} from 'react-bootstrap';

class Faq extends React.Component {
  render() {
    return (
      <section className="faq-section section-gap">
        <Container>
          <Row className="justify-content-center section-title-wrap">
            <Col lg="12">
              <h1>Simplistic Pricing helps to choose from</h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Tab.Container id="left-tabs-example" defaultActiveKey="General">

            <div className="nav-center pb-40 accordian-tab-menu">
              <Nav as="ul"
                className=" nav-pills col-lg-12"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="General">
                    General Issues
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Support">
                    Support Issues
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Refund">
                    Refund Issues
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            
            <Tab.Content className="col-lg-8">
              <Tab.Pane eventKey="General" className="fade">
                <Accordion  defaultActiveKey="0">
                  <dt>
                    <Accordion.Toggle as="a" eventKey="0">Dude You Re Getting A Telescope</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="0" as="dd">
                  <dd>
                    Nunc placerat mi id nisi interdum mollis. Praesent pharetra,
                    justo ut scelerisque mattis, leo quam aliquet diam, congue
                    laoreet elit metus eget diam. Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="1">The Basics Of Buying A Telescope</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="1" as="dd">
                  <dd>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis. leo quam aliquet diam, congue laoreet
                    elit metus eget diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="2">Astronomy Binoculars A Great alt=""ernative</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="2" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="3">Do Your Self Realizations Quickly Fade</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="3" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="4">Success Steps For Your Personal Or Business Life</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="4" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="Support" className="fade">
                <Accordion  defaultActiveKey="0">
                  <dt>
                    <Accordion.Toggle as="a" eventKey="0">Dude You Re Getting A Telescope</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="0" as="dd">
                  <dd>
                    Nunc placerat mi id nisi interdum mollis. Praesent pharetra,
                    justo ut scelerisque mattis, leo quam aliquet diam, congue
                    laoreet elit metus eget diam. Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="1">The Basics Of Buying A Telescope</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="1" as="dd">
                  <dd>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis. leo quam aliquet diam, congue laoreet
                    elit metus eget diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="2">Astronomy Binoculars A Great alt=""ernative</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="2" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="3">Do Your Self Realizations Quickly Fade</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="3" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="4">Success Steps For Your Personal Or Business Life</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="4" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="Refund" className="fade">
                  <Accordion  defaultActiveKey="0">
                  <dt>
                    <Accordion.Toggle as="a" eventKey="0">Dude You Re Getting A Telescope</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="0" as="dd">
                  <dd>
                    Nunc placerat mi id nisi interdum mollis. Praesent pharetra,
                    justo ut scelerisque mattis, leo quam aliquet diam, congue
                    laoreet elit metus eget diam. Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="1">The Basics Of Buying A Telescope</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="1" as="dd">
                  <dd>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis. leo quam aliquet diam, congue laoreet
                    elit metus eget diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="2">Astronomy Binoculars A Great alt=""ernative</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="2" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="3">Do Your Self Realizations Quickly Fade</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="3" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                  <dt>
                    <Accordion.Toggle as="a" eventKey="4">Success Steps For Your Personal Or Business Life</Accordion.Toggle>
                  </dt>
                  <Accordion.Collapse eventKey="4" as="dd">
                  <dd>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    Proin ac metus diam.
                  </dd>
                  </Accordion.Collapse>
                </Accordion>
              
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Faq;

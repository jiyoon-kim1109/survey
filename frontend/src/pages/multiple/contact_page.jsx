import React from "react";
import {Container, Row, Col, Form } from 'react-bootstrap';
import HeaderBlog from "../../componets/blog/header/header_blog";
import PageTop from "../../componets/page_top";
import Map from "../../componets/multiple/map";
import Footer from "../../componets/multiple/footer";

class ContactPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('version2');
        document.body.classList.add('pages');
    }

    componentWillUnmount() {
        document.body.classList.remove('version2');
        document.body.classList.remove('pages');
    }

    handleForm(event){
      event.preventDefault();

    }

    render() {

    return (
      <>
        <HeaderBlog headerId={`header7`}/>
        <PageTop pageTitle="Contact Us" />
        <Map />
           <section className="contact-form-section section-gap">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Form 
                className="form-area contact-form text-right"
                method="post" onSubmit={this.handleForm}
              >
                <Form.Control
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="common-input mb-20"
                  required
                  type="text"
                />
                <Form.Control
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  className="common-input mb-20"
                  required
                  type="email"
                />
                <Form.Control
                  name="subject"
                  autoComplete="subject"
                  placeholder="Enter subject"
                  className="common-input mb-20"
                  required
                  type="text"
                />
                <textarea
                  className="common-textarea form-control"
                  cols={30}
                  rows={7}
                  name="message"
                  autoComplete="message"
                  placeholder="Enter Messege"
                  required
                />
                <div className="d-flex flex-column">
                  <button className="genric-btn2 d-block mt-30 mr-0 ml-auto">
                    Send Message
                  </button>
                  <div className="alert-msg" />
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    
        <Footer />
      </>
    );
  }
}

export default ContactPage;

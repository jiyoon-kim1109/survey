import React from "react";
import {Container, Row, Col, Form } from 'react-bootstrap';
import PageTop from "../../componets/page_top";
import Footer from "../../componets/multiple/footer";
import HeaderBlog from "../../componets/blog/header/header_blog";

class RegisterPage extends React.Component {

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
                <PageTop pageTitle="Register" />

                <section className="contact-form-section section-gap">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form
                                    className="form-area contact-form text-right"
                                    method="post"
                                    // onSubmit={this.handleForm}
                                    action="/register"
                                >
                                    <Form.Control
                                        name="email"
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                        className="common-input mb-20"
                                        required
                                        type="email"
                                    />
                                    <Form.Control
                                        name="password"
                                        autoComplete="password"
                                        placeholder="Enter password"
                                        className="common-input mb-20"
                                        required
                                        type="password"
                                    />
                                    <Form.Control
                                        name="nickname"
                                        autoComplete="nickname"
                                        placeholder="Enter your nickname"
                                        className="common-input mb-20"
                                        required
                                        type="text"
                                    />
                                    <div className="d-flex flex-column">
                                        <button className="genric-btn2 d-block mt-30 mr-0 ml-auto">
                                            Register
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

export default RegisterPage;

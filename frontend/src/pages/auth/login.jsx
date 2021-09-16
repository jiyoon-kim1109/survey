import React from "react";
import {Container, Row, Col, Form} from 'react-bootstrap';
import PageTop from "../../componets/page_top";
import Footer from "../../componets/multiple/footer";

import HeaderBlog from "../../componets/blog/header/header_blog";

import AuthService from "../../services/auth.service";

import {Link} from "react-router-dom";

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password: ''
        };
        if(AuthService.getCurrentUser()) {
            window.location.href = '/blog/my-page';
        }
    }

    componentDidMount() {
        document.body.classList.add('version2');
        document.body.classList.add('pages');
    }

    componentWillUnmount() {
        document.body.classList.remove('version2');
        document.body.classList.remove('pages');
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleForm(event) {
        event.preventDefault();
        AuthService.login(this.state.email, this.state.password).then(
            () => {
                console.log('came back');
                // this.props.history.push("/users");
                // window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }

    render() {

        return (
            <>
                <HeaderBlog headerId={`header7`}/>
                <PageTop pageTitle="Login"/>

                <section className="contact-form-section section-gap">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form
                                    className="form-area contact-form text-right"
                                    method="post"
                                    onSubmit={this.handleForm.bind(this)}
                                >
                                    <Form.Control
                                        name="email"
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                        className="common-input mb-20"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required
                                        type="email"
                                    />
                                    <Form.Control
                                        name="password"
                                        autoComplete="password"
                                        placeholder="Enter password"
                                        className="common-input mb-20"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        required
                                        type="password"
                                    />
                                    <div className="d-flex flex-column">
                                        <Link to={"/auth/register"} className="mr-auto">
                                            Not Member Yet?
                                        </Link>
                                        <button className="genric-btn2 d-block mr-0 ml-auto">
                                            Login
                                        </button>
                                        <div className="alert-msg"/>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Footer/>
            </>
        );
    }
}

export default LoginPage;

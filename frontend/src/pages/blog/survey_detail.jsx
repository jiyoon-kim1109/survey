import React from "react";
import HeaderBlogDetails from "../../componets/blog/header/header_blog";
import Footer from "../../componets/multiple/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
import AuthService from "../../services/auth.service";
import HeroSurveyDetails from "../../componets/blog/hero/hero_survey_details";
import FormAnswer from "../../componets/blog/form/form_answer";
import Emitter from "../../services/emitter.service";
import FormOption from "../../componets/blog/form/form_option";
import AnswerChart from "../../componets/blog/answer_chart";

class SurveyDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            currentUser: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        axios.get('/survey-read/' + this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                post: response.data
            });

        });
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
    }

    renderAnswer(question) {
        switch (question.type) {
            case 'numeric':
                return <>
                    <div>
                        <AnswerChart question={question} />
                    </div>
                </>
            case 'text':
                return <>
                    {question.answers.map(answer => (
                        <p className={"mb-0"}>{answer.answer_text}</p>
                    ))}
                </>
            case 'yn':
                return <>
                    <div>
                        <AnswerChart question={question} />
                    </div>
                </>
        }
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleForm(event) {
        event.preventDefault();
        this.submitForm();
        setTimeout(() => {
            window.location.href = '/blog/survey-detail/' + this.props.match.params.id;
        }, 3000);
    }

    submitForm() {
        console.log(this.state);
        Emitter.emit('SUBMIT_ANSWER');
    }

    render() {

        const post = this.state.post;
        const currentUser = this.state.currentUser;
        console.log(post);
        return (
            <>
                <HeaderBlogDetails headerId={`header7`}/>
                <HeroSurveyDetails post={post}/>
                <section className="blog-post section-gap">
                    <div className="details-body">
                        <div className="container">
                            <div className="mb-30 text-center">
                                <img
                                    src="/img/blog/blog-details-bg2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            {post.description ? (
                                <blockquote className="blog-quotes">
                                    {post.description}
                                </blockquote>) : (null)}
                            {post.questions ? (
                                <div>
                                    {post.questions.map(question => (
                                        <div className={"mt-10"}>
                                            <h4>{question.content}</h4>
                                            {this.renderAnswer(question)}
                                        </div>
                                    ))}
                                </div>
                            ) : (null)}
                            <div className="mt-40 mb-20">
                                <hr/>
                            </div>
                            <div className="post-links">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="prev-post d-flex relative align-items-center">
                                        <div>
                                            <Link className="post-link" to="/blog/details" style={{cursor: "pointer"}}>
                                                <FontAwesomeIcon className="mr-1" icon={faArrowLeft}/>
                                            </Link>
                                        </div>
                                        <div className="ml-3 relative">
                                            <p className="mb-0">Next post</p>
                                        </div>
                                    </div>
                                    <div className="next-post d-flex relative align-items-center">
                                        <div className="mr-3 relative">
                                            <p className="mb-0">Next post</p>
                                        </div>
                                        <div className>
                                            <Link className="post-link" to="/blog/details" style={{cursor: "pointer"}}>
                                                <FontAwesomeIcon className="mr-1" icon={faArrowRight}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-comment mt-80">
                                <h4 className="mb-40">Participate On Survey</h4>
                                <div className="post-form">
                                    <form onSubmit={this.handleForm.bind(this)} method="post">
                                        {post.questions ? (
                                            <>
                                                {post.questions.map((question, i) => (
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <h6>{i + 1}. {question.content}</h6>
                                                                <FormAnswer key={i} question={question}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (null)}
                                        <div className="mt-20">
                                            <button type="submit" className="genric-btn">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default SurveyDetailsPage;

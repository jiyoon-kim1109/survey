import React from "react";
import HeaderBlogDetails from "../../componets/blog/header/header_blog";
import Footer from "../../componets/multiple/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
import AuthService from "../../services/auth.service";
import HeroSurveyDetails from "../../componets/blog/hero/hero_survey_details";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons/faArrowDown";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";

class SurveyEditPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            currentUser: AuthService.getCurrentUser(),
            is_add_question_open: false
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        axios.get('/survey/' + this.props.match.params.id).then(response => {
            this.setState({
                post: response.data
            });

        });
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
    }

    toggleQuestion(is_add_question_open) {
        this.setState({
            is_add_question_open: is_add_question_open
        });
    }

    removeQuestion() {

    }

    addOption() {

    }

    removeOption() {

    }

    render() {

        const post = this.state.post;
        const currentUser = this.state.currentUser;
        const is_add_question_open = this.state.is_add_question_open;

        return (
            <>
                <HeaderBlogDetails headerId={`header7`}/>
                <HeroSurveyDetails post={null} title="Edit Survey"/>
                <section className="blog-post section-gap">
                    <div className="details-body">
                        <div className="container">
                            <div className="post-comment mt-10">
                                {/*<h4 className="mb-40">Add New Survey</h4>*/}
                                <div className="post-form">
                                    <form action="/survey-edit" method="POST">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="hidden" name="id"
                                                           value={post.id}/>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="title"
                                                        autoComplete="title"
                                                        value={post.title}
                                                        placeholder="Enter title"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="start_date"
                                                        autoComplete="start_date"
                                                        value={post.start_date}
                                                        placeholder="Enter start date"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="end_date"
                                                        autoComplete="end_date"
                                                        value={post.end_date}
                                                        placeholder="Enter end date"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        name="description"
                                                        autoComplete="description"
                                                        value={post.description}
                                                        rows={2}
                                                        placeholder="Enter description"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {is_add_question_open ? (
                                                    <p onClick={() => this.toggleQuestion(false)} className="">
                                                        <FontAwesomeIcon icon={faMinus} className="mr-1"/> Close New
                                                        Question
                                                    </p>
                                                ) : (
                                                    <p onClick={() => this.toggleQuestion(true)} className="">
                                                        <FontAwesomeIcon icon={faPlus} className="mr-1"/> Open New
                                                        Question
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {is_add_question_open ? (
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input type="hidden" name="question[survey_id]"
                                                               value={post.id}/>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="question[content]"
                                                            autoComplete="question"

                                                            placeholder="Enter Question"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-group">
                                                        <select
                                                            type="date"
                                                            className="form-control"
                                                            name="question[type]"
                                                            required>
                                                            <option value="">Enter Type</option>
                                                            <option value="numeric">Numeric</option>
                                                            <option value="text">Text</option>
                                                            <option value="yn">Yes Or No</option>
                                                        </select>
                                                        <FontAwesomeIcon icon={faChevronDown} className="select-arrow"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p onClick={() => this.addOption()} className="mt-1">
                                                        <FontAwesomeIcon icon={faPlus} className="mr-1"/> Add Option
                                                    </p>
                                                </div>
                                            </div>

                                        ) : (null)}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <button>sdsd</button>
                                            </div>
                                        </div>


                                        <div className="mt-20">
                                            <button type="submit" className="genric-btn">
                                                submit
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

export default SurveyEditPage;

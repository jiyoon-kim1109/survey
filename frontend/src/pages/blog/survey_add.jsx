import React from "react";
import HeaderBlogDetails from "../../componets/blog/header/header_blog";
import HeroSurveyDetails from "../../componets/blog/hero/hero_survey_details";
import Footer from "../../componets/multiple/footer";

import AuthService from "../../services/auth.service";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import FormQuestion from "../../componets/blog/form/form_question";

import Emitter from '../../services/emitter.service';
import axios from "axios";
import FormUpload from "../../componets/blog/form/form_upload";

class SurveyAddPage extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.state);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            question_no: 0,
            questions: []
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
    }

    addQuestion(question_no) {
        this.setState({
                question_no: question_no + 1
            }
        )
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
            window.location.href = '/blog/survey-home';
        }, 3000);
    }

    submitForm() {
        const survey = {
            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description,
            user_id: this.state.currentUser.id ? this.state.currentUser.id : null
        }
        return axios
            .post("/survey-add", survey)
            .then(response => {
                console.log(response);
                if(this.state.question_no > 0) {
                    Emitter.emit('SUBMIT_QUESTION', response.data.id);
                }
                Emitter.emit('SUBMIT_UPLOAD', response.data.id);
            });
    }

    render() {

        const currentUser = this.state.currentUser;
        const question_no = this.state.question_no;

        let FormQuestions = [];
        for (var i = 0; i < question_no; i++) {
            FormQuestions.push(<FormQuestion key={i} question_no={i} />);
        }

        return (
            <>
                <HeaderBlogDetails headerId={`header7`}/>
                <HeroSurveyDetails post={null} title="Add New Survey"/>
                <section className="blog-post section-gap">
                    <div className="details-body">
                        <div className="container">
                            <div className="post-comment mt-10">
                                <h4 className="mb-40">Add New Survey</h4>
                                <div className="post-form">
                                    <form onSubmit={this.handleForm.bind(this)} method="post">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="title"
                                                        autoComplete="title"
                                                        onChange={this.handleInputChange}
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
                                                        onChange={this.handleInputChange}
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
                                                        onChange={this.handleInputChange}
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
                                                        onChange={this.handleInputChange}
                                                        rows={2}
                                                        placeholder="Enter description"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <FormUpload />
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p onClick={() => this.addQuestion(question_no)} className="">
                                                    <FontAwesomeIcon icon={faPlus} className="mr-1"/> Open New
                                                    Question
                                                </p>
                                            </div>
                                        </div>
                                        {FormQuestions}
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

export default SurveyAddPage;

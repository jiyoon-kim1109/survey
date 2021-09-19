import React from "react";
import HeaderBlogDetails from "../../componets/blog/header/header_blog";
import Footer from "../../componets/multiple/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AuthService from "../../services/auth.service";
import HeroSurveyDetails from "../../componets/blog/hero/hero_survey_details";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";

import FormQuestion from "../../componets/blog/form/form_question";
import FormQuestionEdit from "../../componets/blog/form/form_question_edit";

import FormUpload from "../../componets/blog/form/form_upload";
import Emitter from "../../services/emitter.service";

class SurveyEditPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            title: '',
            start_date: '',
            end_date: '',
            description: '',
            questions: [],
            currentUser: AuthService.getCurrentUser(),
            question_no: 0
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        axios.get('/survey-read/' + this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                title: response.data.title,
                start_date: response.data.start_date,
                end_date: response.data.end_date,
                description: response.data.description,
                main_image: response.data.main_image,
                questions: response.data.questions
            });

        });
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
            window.location.href = '/blog/survey-detail/' + this.props.match.params.id;
        }, 3000);
    }

    submitForm() {
        const survey = {
            id: this.state.id,
            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description
        }
        return axios
            .put("/survey-edit", survey)
            .then(response => {
                console.log(response.data);
                if (this.state.question_no > 0) {
                    Emitter.emit('SUBMIT_QUESTION', response.data);
                }
                Emitter.emit('SUBMIT_UPLOAD', response.data);
            });
    }

    render() {

        const state = this.state;
        const question_no = this.state.question_no;

        let FormOrgQuestions = [];
        if (state.questions) {
            const questions_org = state.questions;
            for (var i = 0; i < questions_org.length; i++) {
                FormOrgQuestions.push(<FormQuestionEdit key={i} question={questions_org[i]}/>);
            }
        }

        let FormQuestions = [];
        for (var i = 0; i < question_no; i++) {
            FormQuestions.push(<FormQuestion key={i} question_no={i} />);
        }

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
                                    <form onSubmit={this.handleForm.bind(this)} method="POST">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="title"
                                                        autoComplete="title"
                                                        value={state.title}
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
                                                        value={state.start_date}
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
                                                        value={state.end_date}
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
                                                        value={state.description}
                                                        onChange={this.handleInputChange}
                                                        rows={2}
                                                        placeholder="Enter description"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {state.main_image ? (
                                                <div className="col-lg-2">
                                                    <img src={ state.main_image } alt=""/>
                                                </div>
                                            ) : ( null )}

                                            <div className="col-lg-4">

                                                <FormUpload />
                                            </div>
                                        </div>
                                        <hr/>
                                        {FormOrgQuestions}
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

export default SurveyEditPage;

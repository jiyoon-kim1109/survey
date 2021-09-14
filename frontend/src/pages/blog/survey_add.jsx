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
        Emitter.on('GET_QUESTION_INPUT', (newValue) => this.setState({ questions: newValue }));
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
        Emitter.off('GET_QUESTION_INPUT');
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
        Emitter.emit('REQ_QUESTION', 1);
        console.log(event);
        // AuthService.login(this.state.email, this.state.password).then(
        //     () => {
        //         console.log('came back');
        //         // this.props.history.push("/users");
        //         // window.location.reload();
        //     },
        //     error => {
        //         const resMessage =
        //             (error.response &&
        //                 error.response.data &&
        //                 error.response.data.message) ||
        //             error.message ||
        //             error.toString();
        //
        //         this.setState({
        //             loading: false,
        //             message: resMessage
        //         });
        //     }
        // );
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
                                                    <input type="hidden" name="user_id"
                                                           value={currentUser ? currentUser.id : null}/>
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

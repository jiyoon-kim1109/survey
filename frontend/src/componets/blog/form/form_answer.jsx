import React from "react";

import Emitter from '../../../services/emitter.service';
import axios from "axios";

class FormAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question_id: '',
            answer_numeric: 0,
            answer_text: '',
            answer_yn: ''
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        Emitter.on('SUBMIT_ANSWER', () => {
            const answer = {
                question_id: this.state.question_id,
                answer_numeric: this.state.answer_numeric,
                answer_text: this.state.answer_text,
                answer_yn: this.state.answer_yn
            }
            axios
                .post("/answer-add", answer)
                .then(response => {
                    console.log(response);
                });
        });
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    renderAnswer(question) {
        switch (question.type) {
            case 'numeric':
                return <div className="form-check form-check-inline">
                    {question.question_options.map(option => (
                        <>
                            <div className="form-check form-check-inline">
                                <input type="radio"
                                       className={"form-check-input"} value={option.id}
                                       onChange={this.handleInputChange}
                                       name={"answers_numeric_"+option.question_id} id={""}/>
                                <label htmlFor={"options" + option.question_id} className={"form-check-label"}>{option.name}</label>
                            </div>
                        </>
                    ))}
                </div>
            case 'text':
                return <>
                    <textarea
                        className="form-control"
                        onChange={this.handleInputChange}
                        name={"answers_text_" + question.id}
                        autoComplete="message"
                        id={"answersText" + question.id}
                        rows={2}
                        placeholder="Enter messages"
                    />
                </>
            case 'yn':
                return <>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                               className={"form-check-input"}
                               onChange={this.handleInputChange}
                               name={"answers_yn_" + question.id}/>
                        <label htmlFor={"options" + question.id}
                               className={"form-check-label"}>Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                               className={"form-check-input"}
                               onChange={this.handleInputChange}
                               name={"answers_yn_" + question.id}/>
                        <label htmlFor={"options" + question.id}
                               className={"form-check-label"}>No</label>
                    </div>
                </>
        }
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
        Emitter.off('SUBMIT_OPTION');
    }

    render() {

        const question = this.props.question;

        return (
            <>
                {this.renderAnswer(question)}
            </>
        );
    }
}

export default FormAnswer;

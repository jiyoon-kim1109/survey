import React from "react";

import AuthService from "../../../services/auth.service";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import FormOption from "./form_option";
import * as events from "events";

import Emitter from '../../../services/emitter.service';
import axios from "axios";

class FormQuestion extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            option_no: 0,
            options: [],
            is_add_option_open: false,
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        Emitter.on('SUBMIT_QUESTION', (survey_id) => {
            console.log(survey_id);
            const question = {
                content: this.state.content,
                type: this.state.type,
                survey_id: survey_id
            };
            axios
                .post("/question-add", question)
                .then(response => {
                    console.log(response);
                    if(this.state.option_no > 0) {
                        Emitter.emit('SUBMIT_OPTION', response.data.id);
                    }
                });
        });
        // Emitter.on('SUBMIT_QUESTION', (option) => {
        //     const old_option = this.state.options.slice();
        //     old_option.push([option]);
        //     this.setState({options: old_option});
        //     console.log(this.state.options);
        //     console.log(this.state.option_no);
        //     if(this.state.options.length == this.state.option_no) {
        //         console.log(this.state);
        //         const question = {
        //             content: this.state.content,
        //             type: this.state.type,
        //             options: this.state.options
        //         };
        //         Emitter.emit('GET_QUESTION', question);
        //     }
        // });
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
        Emitter.off('SUBMIT_QUESTION');
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
        // if change type and if type is number, open add option
        if (name == 'type') {
            this.setState({
                is_add_option_open: value === 'numeric'
            });
        }
    }

    addOption(option_no) {
        if (this.state['type']) {
            this.setState({
                    option_no: option_no + 1
                }
            )
        } else {
            alert('Please Choose Question Type First!');
        }
    }

    render() {

        const question_no = this.props.question_no;
        const option_no = this.state.option_no;
        const is_add_option_open = this.state.is_add_option_open;

        let FormOptions = [];
        for (var i = 0; i < option_no; i++) {
            FormOptions.push(<FormOption eventKey={i} key={i} option_no={i} question_no={question_no}/>);
        }

        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name={'content'}
                                autoComplete="question"
                                onChange={this.handleInputChange}
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
                                name={'type'}
                                onChange={this.handleInputChange}
                                required>
                                <option value="">Enter Type</option>
                                <option value="numeric">Numeric</option>
                                <option value="text">Text</option>
                                <option value="yn">Yes Or No</option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className="select-arrow"/>
                        </div>
                    </div>
                    {is_add_option_open ? (
                        <div className="col-lg-3">
                            <p onClick={() => this.addOption(option_no)} className="mt-1">
                                <FontAwesomeIcon icon={faPlus} className="mr-1"/> Add Option
                            </p>
                        </div>
                    ) : (null)}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">

                        </div>
                    </div>
                </div>
                {FormOptions}
                <hr/>
            </>
        );
    }
}

export default FormQuestion;

import React from "react";

import AuthService from "../../../services/auth.service";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";

import Emitter from '../../../services/emitter.service';

class FormOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            option_no: 0
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        Emitter.on('REQ_OPTION', (question_no) => {
            console.log(question_no);
            console.log(this.state);
            // Emitter.emit('GET_OPTION_INPUT', this.state);
        });
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
        Emitter.off('REQ_OPTION');
    }

    render() {

        const question_no = this.props.question_no;
        const option_no = this.props.option_no;

        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name={'question[' + question_no + '][option][' + option_no + '][name]'}
                                autoComplete="name"
                                onChange={this.handleInputChange}
                                placeholder="Enter Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   name={'question[' + question_no + '][option][' + option_no + '][order]'}
                                   onChange={this.handleInputChange}
                                   placeholder="Enter Order: Ex) 1"
                                   required
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FormOption;

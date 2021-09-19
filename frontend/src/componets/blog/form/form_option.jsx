import React from "react";

import Emitter from '../../../services/emitter.service';
import axios from "axios";

class FormOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            order: 0
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        Emitter.on('SUBMIT_OPTION', (question_id) => {
            const option = {
                name: this.state.name,
                order: this.state.order,
                question_id: question_id
            }
            axios
                .post("/option-add", option)
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

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
        Emitter.off('SUBMIT_OPTION');
    }

    render() {

        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name={'name'}
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
                                   name={'order'}
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

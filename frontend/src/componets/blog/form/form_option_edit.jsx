import React from "react";

import Emitter from '../../../services/emitter.service';
import axios from "axios";

class FormOptionEdit extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            id: props.option.id,
            name: props.option.name,
            order: props.option.order
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        Emitter.on('SUBMIT_OPTION', (question_id) => {
            const option = {
                name: this.state.name,
                order: this.state.order,
                id: this.state.id
            }
            axios
                .put("/option-edit", option)
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

        const state = this.state;

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
                                value={state.name}
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
                                   value={state.order}
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

export default FormOptionEdit;

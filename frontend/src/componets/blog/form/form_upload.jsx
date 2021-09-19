import React from "react";

import Emitter from '../../../services/emitter.service';
import axios from "axios";

class FormUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: {}
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        Emitter.on('SUBMIT_UPLOAD', (survey_id) => {
            console.log(this.state.file);
            console.log(survey_id);
            const form_data = new FormData();
            form_data.append('file', this.state.file);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            axios.post('/upload', form_data, config)
                .then((res) => {
                    console.log(res);
                    const data = {
                        main_image: res.data.file_name,
                        survey_id: survey_id
                    };
                    axios.put('/survey_main_image_edit', data)
                        .then(
                            (res) => {
                                console.log(res);
                            }
                        ).catch((e) => {
                            console.log(e);
                    });
                    // this.setState({ photos: [res.data, ...this.state.photos] });
                }).catch((e) => {
                console.log(e);
            });
        });
    }

    uploadHandler = (event) => {
        console.log(event.target);
        this.setState({
            file: event.target.files[0]
        });
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
        Emitter.off('SUBMIT_UPLOAD');
    }

    render() {

        return (
            <>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={this.uploadHandler}
                           name="file" required/>
                    <label className="custom-file-label" htmlFor="customFile">Main Image</label>
                </div>
            </>
        );
    }
}

export default FormUpload;

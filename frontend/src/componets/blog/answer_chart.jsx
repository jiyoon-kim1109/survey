import React from "react";
import { Doughnut, Bar } from 'react-chartjs-2';

class AnswerChart extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            question_id: props.question.id,
            bg_color_array: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            border_color_array: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ]
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');
    }

    renderAnswerChart(question) {
        switch (question.type) {
            case 'numeric':

                let options_label_array = [];
                let options_data_array = [];
                let options_bg_color_array = [];
                let options_border_color_array = [];

                {question.question_options.map((option, i) => {
                    options_label_array.push(option.name);
                    options_data_array.push(question.answers.filter(answer => answer.answer_numeric === option.id).length);
                    options_bg_color_array.push(this.state.bg_color_array[i]);
                    options_border_color_array.push(this.state.border_color_array[i]);
                })}

                const bar_data = {
                    labels: options_label_array,
                    datasets: [
                        {
                            label: '',
                            data: options_data_array,
                            backgroundColor: options_bg_color_array,
                            borderColor: options_border_color_array,
                            borderWidth: 1
                        }
                    ],
                };
                const bar_option = {
                    indexAxis: 'y',
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide
                    elements: {
                        bar: {
                            borderWidth: 2,
                        },
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        },
                        title: {
                            display: false,
                            text: '',
                        },
                    },
                };

                return <>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8"><Bar data={bar_data} options={bar_option} /></div>
                        <div className="col-md-2"></div>
                    </div>
                </>

            case 'text':
                return <>
                    {question.answer_text}
                </>
            case 'yn':
                const options_yn_label_array = ['yes', 'no'];
                let options_yn_data_array = [];
                let options_yn_bg_color_array = [];
                let options_yn_border_color_array = [];

                {[true, false].map((option, i) => {
                    options_yn_data_array.push(question.answers.filter(answer => answer.answer_yn === option).length);
                    options_yn_bg_color_array.push(this.state.bg_color_array[i]);
                    options_yn_border_color_array.push(this.state.border_color_array[i]);
                })}

                const doughnut_data = {
                    labels: options_yn_label_array,
                    datasets: [
                        {
                            label: '',
                            data: options_yn_data_array,
                            backgroundColor: options_yn_bg_color_array,
                            borderColor: options_yn_border_color_array,
                            borderWidth: 1
                        }
                    ],
                };
                return <>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6"><Doughnut data={doughnut_data} /></div>
                        <div className="col-md-3"></div>
                    </div>
                </>
        }
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
    }

    render() {

        const question = this.props.question;

        return (
            <>
                {this.renderAnswerChart(question)}
            </>
        );
    }
}

export default AnswerChart;

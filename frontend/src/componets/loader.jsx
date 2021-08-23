import React from "react";
import './loader.scss';

class Loader extends React.Component {

    componentDidMount() {

        document.querySelector('.matx-box').style = 'display: block';

        setTimeout(() => {
            document.querySelector('.matx-box').style = 'display: none';
        }, 4000);
    }

    render() {
        return false
    }
}

export default Loader;

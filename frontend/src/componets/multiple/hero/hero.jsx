import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../../../assets/img/hero/hero-img.png';

class Hero extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      fullscreen: {
        height: 'auto'
      }
    }
  }

  componentDidMount() {
      this.setState({
        fullscreen:{
          height: window.innerHeight,
        }
      })
  }

  componentWillMount() {
    this.setState({
      fullscreen:{
        height: window.innerHeight,
      }
    });
  }

  render() {
    return (
      <section className={`hero-section relative ${this.props.heroClass}`}  style={{ overflow: 'hidden'}}>
        <div className="container">
          <div className="row fullscreen align-items-center relative" style={this.state.fullscreen}>
            <div className="col-lg-6 content-wrap">
              <h1>
                Life Is Choice between
                <br /> Birth and Death :)
              </h1>
              <Link to="/blog/survey-add" className="genric-btn2 mr-sm-3">
                New Survey
              </Link>
              <Link to="/index" className="genric-btn mt-4 mt-sm-0">

                View Pricing
              </Link>
            </div>
          </div>
        </div>
        <img className="hero-img" src={heroImg} alt="" />
      </section>
    );
  }
}

export default Hero;

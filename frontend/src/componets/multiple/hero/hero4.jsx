import React from "react";
import heroImg from '../../../assets/img/mockup.png';
import { Link } from "react-router-dom";

class Hero4 extends React.Component {

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
      <section className="hero-section relative" style={{ overflow: 'hidden'}}>
        <div className="container">
          <div className="row fullscreen align-items-center relative" style={this.state.fullscreen}>
            <div className="col-lg-6 content-wrap">
              <h1>
                We Made our
                <br /> Software 100% Errorless
              </h1>
              <p className="pt-20 pb-20 mw-510">
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools to help prevent getting
                infected.
              </p>
              <Link to="/index" className="genric-btn">
                Browse free demo
              </Link>
            </div>
          </div>
        </div>
        <img className="hero-img" src={heroImg} alt="" />
      </section>
    );
  }
}

export default Hero4;

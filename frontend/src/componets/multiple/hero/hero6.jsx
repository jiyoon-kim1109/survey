import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import heroImg from '../../../assets/img/mockup.png';

class Hero6 extends React.Component {

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
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="hero-section-bg relative" style={{ overflow: 'hidden'}}>
        <div id="app-owl" className="owl-carousel owl-theme" style={{overflow: 'hidden' }}>
          <Slider {...settings}>
          <div className="items">
            <img className="owl-img" src="/img/carusel/s1.jpg" alt="" />
          </div>
          <div className="items">
            <img className="owl-img" src="/img/carusel/s2.jpg" alt="" />
          </div>
          <div className="items">
            <img className="owl-img" src="/img/carusel/s3.jpg" alt="" />
          </div>
          </Slider>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="offset-lg-1 col-lg-5 offset-md-0 col-md-10">
                <h1 className="text-white">
                  We Made our <br />
                  Software 100% Errorless
                </h1>
                <p className="pt-20 pb-20 mw-510 text-white">
                  The first is a non technical method which requires the use of
                  adware removal software. Download free adware and spyware
                  removal software and use advanced tools to help prevent
                  getting infected.
                </p>
                <Link to="/index" className="genric-btn">
                  Browse free demo
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="hero-img8">
                  <img className src={heroImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero6;

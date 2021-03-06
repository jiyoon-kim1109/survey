import React from "react";
import Slider from "react-slick";
import heroImg from '../../../assets/img/iPhoneX.png';
import { Link } from "react-router-dom";


class Hero7 extends React.Component {

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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="hero-section-bg relative" style={{ overflow: 'hidden'}}>
        <div id="sass-owl" className="owl-carousel owl-theme" style={{ overflow: 'hidden' }}>
          <Slider {...settings} >
          <div className="items">
            <img className="owl-img9" src="/img/carusel/a1.jpg" alt="" />
          </div>
          <div className="items">
            <img className="owl-img9" src="/img/carusel/a2.jpg" alt="" />
          </div>
          <div className="items">
            <img className="owl-img9" src="/img/carusel/a3.jpg" alt="" />
          </div>
          </Slider>
        </div>
        <div className="content">
          <div className="container">
            <div className="row align-items-center relative">
              <div className="col-lg-6">
                <h1>
                  The most Creative
                  <br /> Theame ever in Business
                </h1>
                <p className="pt-20 pb-20 mw-510">
                  The first is a non technical method which requires the use of
                  adware removal software. Download free adware and spyware
                  removal software and use advanced tools to help prevent
                  getting infected.
                </p>
                <Link to="/index" className="genric-btn2">
                  Browse free demo
                </Link>
              </div>
              <div className="col-lg-6">
                <img className="hero-img9" src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero7;

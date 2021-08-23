import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faEye } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDribbble, faBehance, faFacebookF } from "@fortawesome/free-brands-svg-icons";

class HeroBlogDetailsSideBar extends React.Component {

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
      <section className="hero-section-blog-details relative">
        <div>
          <img className="blog-img" src="/img/blog/blog-details-bg.jpg" alt="" />
        </div>
        <div className="content">
          <div className="container">
            <div className="row no-margin align-items-center justify-content-between content-wrap">
              <div className="d-flex align-items-center content-wrap-child">
                <div className="text">
                  <a href="/index" className="genric-btn">
                    Art & Fantacy
                  </a>
                </div>
                <div className="text">
                  <div className="text-white">
                    <p className="mb-0">Sir Alex James on 25th June, 2018</p>
                  </div>
                </div>
                <div className="d-flex icons">
                  <div className="text icon">
                    <div className="text-white">
                      <a href="/index">
                        <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                        218
                      </a>
                    </div>
                  </div>
                  <div className="text icon">
                    <div className="text-white">
                      <a href="/index">
                        <FontAwesomeIcon icon={ faEye } className="mr-1" />
                        4.5k Views
                      </a>
                    </div>
                  </div>
                  <div className="text icon">
                    <div className="text-white">
                      <a href="/index">
                        <i className="fas fa-comment-dots mr-5" />
                        <FontAwesomeIcon icon={ faCommentDots } className="mr-1" />
                        07
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#facebook" className="social-link">
                  <i className="fab fa-facebook-f" />
                  <FontAwesomeIcon icon={ faFacebookF } className="mr-1" />
                </a>
                <a href="#twitter" className="social-link">
                  <FontAwesomeIcon icon={ faTwitter } className="mr-1" />
                </a>
                <a href="#dribbble" className="social-link">
                <FontAwesomeIcon icon={ faDribbble } className="mr-1" />
                </a>
                <a href="#behance" className="social-link">
                  <FontAwesomeIcon icon={ faBehance } className="mr-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBlogDetailsSideBar;

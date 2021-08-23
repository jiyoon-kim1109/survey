import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCommentDots, faPlus } from "@fortawesome/free-solid-svg-icons";

class HeroListSidebarPage extends React.Component {

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');
  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {
    return (
      <section className="hero-section-blog relative" style={{ overflow: 'hidden'}}>
        <div id="blog-owl" className="owl-carousel owl-theme">
          <div className="items">
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-lg-12 no-padding">
                  <img className="owl-img" src="/img/hero/hero-blog.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content flex justify-content-between">
                    <div>
                      <a href="/index" className="genric-btn3">
                        Art & Fantacy
                      </a>
                      <h1>
                        The Idea Of God Is <br />
                        Not Henceforth Relevant
                      </h1>
                    </div>
                    <div className="d-lg-flex align-items-center d-none">
                      <div className="text-right">
                        <div className="author">
                          Sir Alex James on 25th June, 2018
                        </div>
                        <div className="blog-summary">
                        <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                            218
                          </a>
                          <a href="/index" className="blog-link">
                            <i className="fas fa-eye" />
                            <FontAwesomeIcon icon={ faEye } className="mr-1" />
                            4.5k Views
                          </a>
                          <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faCommentDots } className="mr-1" />
                            07
                          </a>
                        </div>
                      </div>
                      <div className="ml-4">
                        <a
                          href="blog-details-sidebar.html"
                          className="blog-icon"
                        >
                            <FontAwesomeIcon icon={ faPlus } className="mr-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-lg-12 no-padding">
                  <img className="owl-img" src="/img/hero/hero-blog.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content flex justify-content-between">
                    <div>
                      <a href="/index" className="genric-btn3">
                        Art & Fantacy
                      </a>
                      <h1>
                        The Idea Of God Is <br />
                        Not Henceforth Relevant
                      </h1>
                    </div>
                    <div className="d-lg-flex align-items-center d-none">
                      <div className="text-right">
                        <div className="author">
                          Sir Alex James on 25th June, 2018
                        </div>
                        <div className="blog-summary">
                        <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                            218
                          </a>
                          <a href="/index" className="blog-link">
                            <i className="fas fa-eye" />
                            <FontAwesomeIcon icon={ faEye } className="mr-1" />
                            4.5k Views
                          </a>
                          <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faCommentDots } className="mr-1" />
                            07
                          </a>
                        </div>
                      </div>
                      <div className="ml-4">
                        <a
                          href="blog-details-sidebar.html"
                          className="blog-icon"
                        >
                            <FontAwesomeIcon icon={ faPlus } className="mr-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroListSidebarPage;

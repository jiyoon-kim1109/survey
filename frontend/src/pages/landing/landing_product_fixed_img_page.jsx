import React from "react";
import Header2 from "../../componets/landing/header/header2";
import Hero2 from "../../componets/landing/hero/hero2";
import Brands from "../../componets/landing/brands";
import UniqueFeature from "../../componets/landing/unique_feature";
import Execution from "../../componets/landing/execution";
import About from "../../componets/landing/about";
import Cta from "../../componets/landing/cta";
import ImportantPoints from "../../componets/landing/important_points";
import Price from "../../componets/landing/price";
import ClientReview from "../../componets/landing/client_review";
import Contact from "../../componets/landing/contact";
import Footer from "../../componets/multiple/footer";

export default function LandingProductFixedImgPage() {
    return (
      <div>
        <Header2></Header2>
        <Hero2></Hero2>
        <Brands></Brands>
        <UniqueFeature></UniqueFeature>
        <Execution></Execution>
        <About></About>
        <Cta></Cta>
        <ImportantPoints></ImportantPoints>
        <Price></Price>
        <ClientReview />


        <section className="latest-blog-section section-gap aquablue-bg">
          <div className="container">
            <div className="row justify-content-center section-title-wrap">
              <div className="col-lg-12">
                <div className="title-img">
                  <img src="/img/title-icon.png" alt="" />
                </div>
                <h1>Latest Posts from our Blog</h1>
                <p>
                  The first is a non technical method which requires the use of
                  adware removal software. Download free adware and spyware
                  removal software and use advanced tools getting infected.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-card card">
                  <img
                    className="card-top-img"
                    src="/img/blog/b1.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-subtitle mb-3">10 April, 2018</p>
                    <a href="/index">
                      <h4 className="card-title mb-4">
                        Motivation And Your Personal Vision An Force
                      </h4>
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-eye" />
                      4.5k Views
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-comment-dots" />
                      07
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-share" />
                      362
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-card card">
                  <img
                    className="card-top-img"
                    src="/img/blog/b2.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-subtitle mb-3">10 April, 2018</p>
                    <a href="/index">
                      <h4 className="card-title mb-4">
                        Benjamin Franklin S Method Of Habit Formation
                      </h4>
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-eye" />
                      4.5k Views
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-comment-dots" />
                      07
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-share" />
                      362
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-card card">
                  <img
                    className="card-top-img"
                    src="/img/blog/b3.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-subtitle mb-3">10 April, 2018</p>
                    <a href="/index">
                      <h4 className="card-title mb-4">
                        How To Set Intentions That Energize You
                      </h4>
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-eye" />
                      4.5k Views
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-comment-dots" />
                      07
                    </a>
                    <a href="/index" className="card-link">
                      <i className="fas fa-share" />
                      362
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Contact></Contact>
        <Footer />
      </div>
    );
}


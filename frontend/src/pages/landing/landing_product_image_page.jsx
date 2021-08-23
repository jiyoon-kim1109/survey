import React from "react";
import Header3 from "../../componets/landing/header/header3";
import Hero from "../../componets/landing/hero/hero";
import Brands from "../../componets/landing/brands";
import UniqueFeature from "../../componets/landing/unique_feature";
import Execution from "../../componets/landing/execution";
import About from "../../componets/landing/about";
import Footer from "../../componets/multiple/footer";
import ClientReview from "../../componets/landing/client_review";
import LatestBlog from "../../componets/landing/latest_blog";
import Price from "../../componets/landing/price";
import Cta from "../../componets/landing/cta";
import Contact from "../../componets/landing/contact";
import ImportantPoints from "../../componets/landing/important_points";

class LandingProductImagePage extends React.Component {

  componentDidMount() {
    document.body.classList.add('version4');
    document.body.classList.add('parent-active');
  }

  componentWillUnmount() {
    document.body.classList.remove('version4');
    document.body.classList.remove('parent-active');
  }

  render() {
    return (
      <>
        <Header3></Header3>
        <Hero></Hero>
        <Brands></Brands>
        <UniqueFeature></UniqueFeature>
        <Execution></Execution>
        <About></About>
        <Cta/>
        <ImportantPoints/>
        <Price/>
        <ClientReview/>
        <LatestBlog/>
        <Contact/>
        <Footer />
      </>
    );
  }
}

export default LandingProductImagePage;

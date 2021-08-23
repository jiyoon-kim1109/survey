import React from "react";
import Header4 from "../../componets/landing/header/header4";
import Hero4 from "../../componets/landing/hero/hero4";
import Brands from "../../componets/landing/brands";
import UniqueFeature from "../../componets/landing/unique_feature";
import Execution from "../../componets/landing/execution";
import About from "../../componets/landing/about";
import Cta from "../../componets/landing/cta";
import ImportantPoints from "../../componets/landing/important_points";
import Price from "../../componets/landing/price";
import ClientReview from "../../componets/landing/client_review";
import LatestBlog from "../../componets/landing/latest_blog";
import Contact from "../../componets/landing/contact";
import Footer from "../../componets/multiple/footer";

class LandingProductSliderPage extends React.Component {
  render() {
    return (
      <>
        <Header4></Header4>
        <Hero4></Hero4>
        <Brands></Brands>
        <UniqueFeature></UniqueFeature>
        <Execution></Execution>
        <About></About>
        <Cta></Cta>
        <ImportantPoints></ImportantPoints>
        <Price></Price>
        <ClientReview></ClientReview>
        <LatestBlog></LatestBlog>
        <Contact></Contact>
          <Footer />
      </>
    );
  }
}

export default LandingProductSliderPage;

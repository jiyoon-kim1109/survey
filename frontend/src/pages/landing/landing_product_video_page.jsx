import React from "react";
import Header5 from "../../componets/landing/header/header5";
import Hero5 from "../../componets/landing/hero/hero5";
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

class LandingProductVideoPage extends React.Component {
  render() {
    return (
      <>
        <Header5></Header5>
        <Hero5></Hero5>
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

export default LandingProductVideoPage;

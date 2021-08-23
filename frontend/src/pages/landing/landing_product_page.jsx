import React from "react";
import Header1 from "../../componets/landing/header/header1";
import Hero1 from "../../componets/landing/hero/hero1";
import Brands from "../../componets/landing/brands";
import UniqueFeature from "../../componets/landing/unique_feature";
import Execution from "../../componets/landing/execution";
import About from "../../componets/landing/about";
import Cta from "../../componets/landing/cta";
import Important from "../../componets/landing/important";
import Price from "../../componets/landing/price";
import ClientReview from "../../componets/landing/client_review";
import LatestBlog from "../../componets/landing/latest_blog";
import Contact from "../../componets/landing/contact";
import Footer from "../../componets/multiple/footer";

class LandingProductPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('version2');
        document.body.classList.add('parent-active');
    }

    componentWillUnmount() {
        document.body.classList.remove('version2');
        document.body.classList.remove('parent-active');
    }

    render() {
    return (
      <>
        <Header1  headerId="header" ></Header1>
        <Hero1></Hero1>
        <Brands></Brands>
        <UniqueFeature></UniqueFeature>
        <Execution></Execution>
        <About></About>
        <Cta></Cta>
        <Important></Important>
        <Price></Price>
        <ClientReview></ClientReview>
        <LatestBlog></LatestBlog>
        <Contact></Contact>
          <Footer />
      </>
    );
  }
}

export default LandingProductPage;

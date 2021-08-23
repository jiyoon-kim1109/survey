import React from "react";
import Header7 from "../../componets/landing/header/header7";
import Feature from "../../componets/landing/feature";
import Marketing from "../../componets/landing/marketing";
import Stat from "../../componets/landing/stat";
import Cta from "../../componets/landing/cta";
import Social from "../../componets/landing/social";
import Price from "../../componets/landing/price";
import UniqueFeature from "../../componets/landing/unique_feature";
import Brands from "../../componets/landing/brands";
import ClientReview from "../../componets/landing/client_review";
import LatestBlog from "../../componets/landing/latest_blog";
import Contact from "../../componets/landing/contact";
import Hero8 from "../../componets/landing/hero/hero8";
import Footer from "../../componets/multiple/footer";

class LandingSassFixedImgPage extends React.Component {
    componentDidMount() {
        document.body.classList.add('version1-1');
        document.body.classList.add('parent-active');
    }

    componentWillUnmount() {
        document.body.classList.remove('version1-1');
        document.body.classList.remove('parent-active');
    }

    render() {
    return (
      <>
        <Header7  headerId="header2" />
        <Hero8></Hero8>
        <Feature></Feature>
        <Marketing></Marketing>
        <Stat></Stat>
        <Cta></Cta>
        <Social></Social>
        <Price></Price>
        <UniqueFeature></UniqueFeature>
        <Brands></Brands>
        <ClientReview></ClientReview>
        <LatestBlog></LatestBlog>
        <Contact></Contact>
          <Footer />
      </>
    );
  }
}

export default LandingSassFixedImgPage;

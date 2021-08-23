import React from "react";
import Header8 from "../../componets/landing/header/header8";
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
import Hero2 from "../../componets/multiple/hero/hero2";
import Footer from "../../componets/multiple/footer";

class LandingSassImagePage extends React.Component {

    componentDidMount() {
        document.body.classList.add('version3');
        document.body.classList.add('parent-active');
    }

    componentWillUnmount() {
        document.body.classList.remove('version3');
        document.body.classList.remove('parent-active');
    }

    render() {
    return (
      <div>
        <Header8></Header8>
        <Hero2 />
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
      </div>
    );
  }
}

export default LandingSassImagePage;

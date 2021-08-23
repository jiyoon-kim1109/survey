import React from "react";
import Header9 from "../../componets/landing/header/header9";
import Hero9 from "../../componets/landing/hero/hero9";
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
import Footer from "../../componets/multiple/footer";


import Logo1 from "../../assets/img/logo4.png";
import Logo2 from "../../assets/img/logo.png";


class LandingSassSliderPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('version8');
        document.body.classList.add('parent-active');
    }

    componentWillUnmount() {
        document.body.classList.remove('version8');
        document.body.classList.remove('parent-active');
    }

    render() {
    return (
      <div>
        <Header9 headerId={`header2`}  Logo1={Logo1} Logo2={Logo2} />
        <Hero9></Hero9>
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

export default LandingSassSliderPage;
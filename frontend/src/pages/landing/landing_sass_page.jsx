import React from "react";
import Header6 from "../../componets/landing/header/header6";
import Hero6 from "../../componets/landing/hero/hero6";
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

import Logo1 from "../../assets/img/logo.png";
import Logo2 from "../../assets/img/logo.png";

class LandingSassPage extends React.Component {
  render() {
    return (
      <div>
         <Header6 headerId={`header2`}  Logo1={Logo1} Logo2={Logo2} />
        <Hero6></Hero6>
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

export default LandingSassPage;

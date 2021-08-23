import React from "react";
import Header from "../../componets/multiple/header/header";
import Hero from "../../componets/multiple/hero/hero";
import Feature from "../../componets/multiple/feature";
import Marketing from "../../componets/multiple/marketing";
import Stat from "../../componets/multiple/stat";
import Cta from "../../componets/multiple/cta";
import Social from "../../componets/multiple/social";
import Price from "../../componets/multiple/price";
import UniqueFeature from "../../componets/multiple/unique_feature";
import Brands from "../../componets/multiple/brands";
import ClientReview from "../../componets/multiple/client_review";
import LatestBlog from "../../componets/multiple/latest_blog";
import Contact from "../../componets/multiple/contact";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../assets/img/logo.png";
import Logo2 from "../../assets/img/logo.png";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            heroClass: 'hero1'
        }
    }

    componentDidMount() {
        document.body.classList.add('version1');
    }

    componentWillUnmount() {
        document.body.classList.remove('version1');
    }


    render() {
    return (
      <>
        <Header headerId={`header`} Logo1={Logo1} Logo2={Logo2} />
        <Hero heroClass={this.state.heroClass} />
        <Feature />
        <Marketing />
        <Stat></Stat>
        <Cta></Cta>
        <Social></Social>
        <Price></Price>
        <UniqueFeature />
        <Brands></Brands>
        <ClientReview />
        <LatestBlog />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default IndexPage;

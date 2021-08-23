import React from "react";
import Header4 from "../../componets/multiple/header/header4";
import Hero4 from "../../componets/multiple/hero/hero4";
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


class Index4Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version3');
    }

    componentWillUnmount() {
        document.body.classList.remove('version3');
    }

    render() {
    return (
      <>
        
        <Header4 headerId={`header`} Logo1={Logo1} Logo2={Logo2} />
        
        
        <Hero4></Hero4>
        
        
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
        
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default Index4Page;

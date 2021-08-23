import React from "react";
import Header9 from "../../componets/multiple/header/header9";
import Hero9 from "../../componets/multiple/hero/hero9";
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

import Logo1 from "../../assets/img/logo4.png";
import Logo2 from "../../assets/img/logo.png";


class Index9Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version8');
    }

    componentWillUnmount() {
        document.body.classList.remove('version8');
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
        
        
        <Footer></Footer>
        
      </div>
    );
  }
}

export default Index9Page;

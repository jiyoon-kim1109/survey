import React from "react";
import Header5 from "../../componets/multiple/header/header5";
import Hero5 from "../../componets/multiple/hero/hero5";
import Brands from "../../componets/multiple/brands";
import UniqueFeature from "../../componets/multiple/unique_feature";
import Execution from "../../componets/multiple/execution";
import About from "../../componets/multiple/about";
import Cta from "../../componets/multiple/cta";
import ImportantPoints from "../../componets/multiple/important_points";
import Price from "../../componets/multiple/price";

import LatestBlog from "../../componets/multiple/latest_blog";
import Contact from "../../componets/multiple/contact";
import Footer from "../../componets/multiple/footer";
import ClientReview from "../../componets/multiple/client_review";

import Logo1 from "../../assets/img/logo4.png";
import Logo2 from "../../assets/img/logo.png";

class Index5Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version4');
    }

    componentWillUnmount() {
        document.body.classList.remove('version4');
    }

    render() {
    return (
      <div>
        
        <Header5 headerId={`header`}  Logo1={Logo1} Logo2={Logo2} />
        
        
        <Hero5></Hero5>
        
        
        <Brands></Brands>
        
        
        <UniqueFeature></UniqueFeature>
        
        
        <Execution></Execution>
        
        
        <About></About>
        
        
        <Cta></Cta>
        
        
        <ImportantPoints></ImportantPoints>
        
        
        <Price></Price>
        
        
        <ClientReview/>
        
        
        <LatestBlog></LatestBlog>
        
        
        <Contact></Contact>
        
        
        <Footer></Footer>
        
      </div>
    );
  }
}

export default Index5Page;

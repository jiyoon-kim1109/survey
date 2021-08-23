import React from "react";
import Header3 from "../../componets/multiple/header/header3";
import Hero3 from "../../componets/multiple/hero/hero3";
import Brands from "../../componets/multiple/brands";
import UniqueFeature from "../../componets/multiple/unique_feature";
import Execution from "../../componets/multiple/execution";
import About from "../../componets/multiple/about";
import Cta from "../../componets/multiple/cta";
import ImportantPoints from "../../componets/multiple/important_points";
import Price from "../../componets/multiple/price";
import ClientReview from "../../componets/multiple/client_review";
import LatestBlog from "../../componets/multiple/latest_blog";
import Contact from "../../componets/multiple/contact";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../assets/img/logo.png";
import Logo2 from "../../assets/img/logo.png";

class Index3Page extends React.Component {


    componentDidMount() {
        document.body.classList.add('version2');
    }

    componentWillUnmount() {
        document.body.classList.remove('version2');
    }


    render() {
    return (
      <div>
        
        <Header3 headerId={`header`}  Logo1={Logo1} Logo2={Logo2} />
        
        
        <Hero3></Hero3>
        
        
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
        
        
        <Footer></Footer>
        
      </div>
    );
  }
}

export default Index3Page;

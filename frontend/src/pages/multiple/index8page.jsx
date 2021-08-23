import React from "react";
import Header8 from "../../componets/multiple/header/header8";
import Hero8 from "../../componets/multiple/hero/hero8";
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

class Index8Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version7');
    }

    componentWillUnmount() {
        document.body.classList.remove('version7');
    }

    render() {
    return (
      <div>
        
        <Header8 headerId={`header`}/>
        
        
        <Hero8></Hero8>
        
        
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

export default Index8Page;

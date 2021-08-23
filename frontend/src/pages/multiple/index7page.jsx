import React from "react";
import Header7 from "../../componets/multiple/header/header7";
import Hero7 from "../../componets/multiple/hero/hero7";
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

class Index7Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version9');
    }

    componentWillUnmount() {
        document.body.classList.remove('version9');
    }

    render() {
    return (
      <div>
        
        <Header7 headerId={`header2`}/>
        
        
        <Hero7></Hero7>
        
        
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

export default Index7Page;

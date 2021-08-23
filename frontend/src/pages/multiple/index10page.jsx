import React from "react";
import Header10 from "../../componets/multiple/header/header10";
import Hero10 from "../../componets/multiple/hero/hero10";
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

import Logo1 from "../../assets/img/logo4.png";
import Logo2 from "../../assets/img/logo.png";

class Index10Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version9');
    }

    componentWillUnmount() {
        document.body.classList.remove('version9');
    }

    render() {
    return (
      <div>
        
        <Header10 headerId={`header2`} Logo1={Logo1} Logo2={Logo2} />
        
        <Hero10 />
        
        <Brands />

        <UniqueFeature />
        
        
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

export default Index10Page;

import React from "react";
import Header2 from "../../componets/multiple/header/header2";
import Hero2 from "../../componets/multiple/hero/hero2";
import Feature from "../../componets/multiple/feature";
import Marketing from "../../componets/multiple/marketing";
import Stat from "../../componets/multiple/stat";
import Cta from "../../componets/multiple/cta";
import Social from "../../componets/multiple/social";
import Price from "../../componets/multiple/price";
import Unique from "../../componets/multiple/unique";
import Brands from "../../componets/multiple/brands";
import ClientReview from "../../componets/multiple/client_review";
import LatestBlog from "../../componets/multiple/latest_blog";
import Contact from "../../componets/multiple/contact";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../assets/img/logo3.png";
import Logo2 from "../../assets/img/logo.png";

class Index2Page extends React.Component {

    componentDidMount() {
        document.body.classList.add('version1-1');
    }

    componentWillUnmount() {
        document.body.classList.remove('version1-1');
    }

    render() {
    return (
      <>
        <Header2  headerId={`header2`}  Logo1={Logo1} Logo2={Logo2} />
        <Hero2 />
        <Feature></Feature>
        
        
        <Marketing></Marketing>
        
        
        <Stat></Stat>
        
        
        <Cta></Cta>
        
        
        <Social></Social>
        
        
        <Price></Price>
        
        
        <Unique></Unique>
        
        
        <Brands></Brands>
        
        
        <ClientReview></ClientReview>
        
        
        <LatestBlog></LatestBlog>
        
        
        <Contact></Contact>
        
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default Index2Page;

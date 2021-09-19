import React from "react";
import HeaderBlog from "../../componets/blog/header/header_blog";
import Hero8 from "../../componets/multiple/hero/hero8";
import Footer from "../../componets/multiple/footer";
import Hero6 from "../../componets/multiple/hero/hero6";
import Hero5 from "../../componets/multiple/hero/hero5";
import Hero9 from "../../componets/multiple/hero/hero9";
import Hero10 from "../../componets/multiple/hero/hero10";
import Hero4 from "../../componets/multiple/hero/hero4";
import Hero3 from "../../componets/multiple/hero/hero3";

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

                <HeaderBlog headerId={`header7`}/>

                <Hero3></Hero3>
                <Hero8></Hero8>
                <Hero6/>
                <Hero5></Hero5>
                <Hero9></Hero9>
                <Hero10 />
                <Hero4></Hero4>
                <Footer></Footer>

            </div>
        );
    }
}

export default Index8Page;

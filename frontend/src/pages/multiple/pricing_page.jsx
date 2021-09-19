import React from "react";
import HeaderBlog from "../../componets/blog/header/header_blog";
import PageTop from "../../componets/page_top";
import Price from "../../componets/multiple/price";
import Faq from "../../componets/multiple/faq";
import Cta from "../../componets/multiple/cta";
import Brands from "../../componets/multiple/brands";
import Footer from "../../componets/multiple/footer";

import StartExecution from "../../componets/multiple/start_execution";
import ClientReview from "../../componets/multiple/client_review";
import UniqueFeature from "../../componets/multiple/unique_feature";
import Important from "../../componets/multiple/important";
import Execution from "../../componets/multiple/execution";
import DemoRequest from "../../componets/multiple/demo_request";
import Feature from "../../componets/multiple/feature";
import Stat from "../../componets/multiple/stat";
import Social from "../../componets/multiple/social";
import Contact from "../../componets/multiple/contact";
import LatestBlog from "../../componets/multiple/latest_blog";
import ImportantPoints from "../../componets/multiple/important_points";
import Unique from "../../componets/multiple/unique";

class PricingPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('pages');
        document.body.classList.add('version2');
    }

    componentWillUnmount() {
        document.body.classList.remove('pages');
        document.body.classList.remove('version2');
    }

    render() {
        return (
            <>

                <HeaderBlog headerId={`header7`}/>

                <PageTop pageTitle="pricing"/>
                <Feature></Feature>
                <Contact></Contact>
                <LatestBlog></LatestBlog>
                <Unique></Unique>
                <StartExecution></StartExecution>
                <ImportantPoints></ImportantPoints>
                <ClientReview></ClientReview>
                <UniqueFeature></UniqueFeature>
                <Important></Important>
                <DemoRequest></DemoRequest>
                <Stat></Stat>
                <Execution></Execution>
                <Social></Social>
                <Price></Price>

                <Faq></Faq>

                <Cta></Cta>

                <Brands></Brands>

                <Footer></Footer>
            </>
        );
    }
}

export default PricingPage;

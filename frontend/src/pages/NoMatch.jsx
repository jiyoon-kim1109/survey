import React from "react";
import HeaderBlog from "../componets/blog/header/header_blog";
import Footer from "../componets/multiple/footer";

import ErrorImg from "../assets/img/error.png";

export default class NoMatch extends React.Component{

    render() {
        return (
            <>
                <HeaderBlog headerId={`header7`}/>
                {
                    /*====== ERROR PART START ======*/
                }
                <div className="row pt-120" style={{ width: '80px'}}></div>

                <div className="error-area pt-120 pb-115" style={{ overflow: 'hidden'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="error-item text-center">
                                    <img src={ErrorImg} alt="" />
                                    <h2 className="title">
                                        Looks Like Here <br /> Is Nothing
                                    </h2>
                                    <span>Don’t be fret. We are here.</span>
                                </div>
                                {/* error item */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5" style={{ width: '80px'}}></div>
                {
                    /*====== ERROR PART ENDS ======*/
                }
                <Footer/>
            </>
        );
    }

}
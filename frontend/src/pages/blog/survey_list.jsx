import React from "react";
import HeaderBlog from "../../componets/blog/header/header_blog";
import Footer from "../../componets/multiple/footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faEye, faCommentDots} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import {Link} from "react-router-dom";
import PageTop from "../../componets/page_top";

import AuthService from "../../services/auth.service";
import Hero from "../../componets/multiple/hero/hero";

class SurveyListPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentUser: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        document.body.classList.add('version-blog');
        document.body.classList.add('parent-active');

        axios.get('/survey-list').then(response => {
            this.setState({
                posts: response.data
            });

        });
    }

    componentWillUnmount() {
        document.body.classList.remove('version-blog');
        document.body.classList.remove('parent-active');
    }

    render() {

        const {posts} = this.state;

        return (
            <>

                <HeaderBlog headerId={`header7`}/>
                <PageTop />
                {/*<Hero heroClass={this.state.heroClass} />*/}

                <section className="blog-post-list section-gap" style={{paddingTop: "20px"}}>
                    <div className="container">

                        {/*<div className="row">*/}
                        {/*    <div className="col-lg-12">*/}
                        {/*        <div className="d-flex flex-column">*/}
                        {/*            <button className="genric-btn2 d-block mr-0 ml-auto mb-20">*/}
                        {/*                <Link to={"/blog/survey-add"} className="text-white">New Survey</Link>*/}
                        {/*            </button>*/}
                        {/*            <div className="alert-msg"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="row">

                            {posts.map(post => (
                                <div key={post.id} className="col-lg-12">
                                    <div className="single-card card" style={{border: 'none'}}>


                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img
                                                    className="card-top-img"
                                                    src={post.thumbnail}
                                                    alt={post.title}
                                                />
                                                {/*<a href="/index" className="genric-btn card-btn">*/}
                                                {/*    Art & Fantacy*/}
                                                {/*</a>*/}
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="card-body">
                                                    <div>
                                                        <Link to="/blog/details">
                                                            <h4 className="card-title">
                                                                {post.title}
                                                            </h4>
                                                        </Link>
                                                        <p>
                                                            {post.description}
                                                        </p>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-5">
                                                            <p className="mt-20">
                                                                Post Written by
                                                                <br/>
                                                                <span className="author">
                                                                    <a href="/index">{post.author} </a>
                                                                </span>
                                                                on {post.date}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <div className="mt-40 m-0-xs">


                                                                <a href="/index" className="card-link">
                                                                    <FontAwesomeIcon className="mr-1" icon={faHeart}/>
                                                                    {post.like}
                                                                </a>
                                                                <a href="/index" className="card-link">
                                                                    <FontAwesomeIcon className="mr-1" icon={faEye}/>
                                                                    {post.viewCounter} Views
                                                                </a>
                                                                <a href="/index" className="card-link">
                                                                    <FontAwesomeIcon className="mr-1"
                                                                                     icon={faCommentDots}/>
                                                                    {post.commentCounter}
                                                                </a>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            ))}


                        </div>
                    </div>

                    {/*<nav aria-label="Page navigation" className="mt-0 mt-lg-3">*/}
                    {/*    <ul*/}
                    {/*        className="pagination flex justify-content-center"*/}
                    {/*        id="blog-post-sidebar"*/}
                    {/*    >*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a className="page-link" href="/index" aria-label="Previous">*/}
                    {/*                <span className="fa fa-long-arrow-alt=-left"/>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item active">*/}
                    {/*            <a id="page-link1" className="page-link" href="/index">*/}
                    {/*                01*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a id="page-link2" className="page-link" href="/index">*/}
                    {/*                02*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a id="page-link3" className="page-link" href="/index">*/}
                    {/*                03*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a id="page-link4" className="page-link" href="/index">*/}
                    {/*                04*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a className="page-link" href="/index" aria-label="Next">*/}
                    {/*                <span className="fa fa-long-arrow" alt="right"/>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}

                </section>


                <Footer/>

            </>
        );
    }
}

export default SurveyListPage;

import React from "react";
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

import AuthService from "../../services/auth.service";

class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            showHomeMenu: false,
            showBlogMenu: false,
            openMobileMenu: false,
            currentUser: AuthService.getCurrentUser()
        }
        //home
        this.homeMenuToggle = this.homeMenuToggle.bind(this);
        this.homeMenuToggleHover = this.homeMenuToggleHover.bind(this);
        this.homeMenuShow = this.homeMenuShow.bind(this);
        this.homeMenuMouseLeave = this.homeMenuMouseLeave.bind(this);
        this.homeMenuMouseEnter = this.homeMenuMouseEnter.bind(this);

        //blog
        this.blogMenuToggle = this.blogMenuToggle.bind(this);
        this.blogMenuMouseLeave = this.blogMenuMouseLeave.bind(this);
        this.blogMenuMouseEnter = this.blogMenuMouseEnter.bind(this);

        // mobile menu
        this.showMobileMenu = this.showMobileMenu.bind(this);
    }


    // show mobile menu
    showMobileMenu(event) {
        const currentState = this.state.openMobileMenu;
        this.setState({openMobileMenu: !currentState});

        // open mobile menu
        if (!this.state.openMobileMenu) {
            document.body.classList.add('mobile-nav-active');
        } else {
            document.body.classList.remove('mobile-nav-active');
        }

        event.preventDefault();
    }


    //blog menu
    blogMenuToggle(event) {
        const currentState = this.state.showBlogMenu;

        this.setState({
            showHomeMenu: false,
            showBlogMenu: !currentState,
        });

        event.preventDefault();
    }


    blogMenuMouseLeave(event) {
        event.preventDefault();

        setTimeout(function () {
            this.setState({showBlogMenu: false});
        }.bind(this), 800);

    }


    blogMenuMouseEnter(event) {
        event.preventDefault();
        this.setState({showBlogMenu: true});
    }


    // home menu action

    homeMenuToggleHover(event) {

        const currentState = this.state.showHomeMenu;

        setTimeout(
            function () {

                this.setState({
                    showHomeMenu: !currentState,
                    showBlogMenu: false,
                });
            }
                .bind(this),
            3000
        );


        event.preventDefault();
    }


    homeMenuToggle(event) {
        const currentState = this.state.showHomeMenu;

        this.setState({
            showBlogMenu: false,
            showHomeMenu: !currentState,
        });
        event.preventDefault();
    }

    homeMenuShow(event) {

        this.setState({
            showHomeMenu: true,
            showBlogMenu: false,
        });

        event.preventDefault();
    }


    homeMenuMouseLeave(event) {
        event.preventDefault();

        setTimeout(function () {
            this.setState({showHomeMenu: false});
        }.bind(this), 800);

    }


    homeMenuMouseEnter(event) {
        event.preventDefault();
        this.setState({showHomeMenu: true});
    }


    render() {

        const {currentUser} = this.state;

        return (
            <>
                <Button type="button" id="mobile-nav-toggle" onClick={this.showMobileMenu}><i
                    className="lnr lnr-menu"></i></Button>
                <div id="mobile-body-overly" onClick={this.showMobileMenu}
                     style={this.state.openMobileMenu ? {display: 'block'} : {display: 'none'}}></div>

                <nav id={this.state.openMobileMenu ? "mobile-nav" : "nav-menu-container"}>
                    <ul className={this.state.openMobileMenu ? "" : "parent-active nav-menu nav-menu2"}
                        style={{touchAction: 'pan-y'}}>
                        <li className={`menu-has-children  ${this.state.showHomeMenu ? 'parent-active sfHover' : ''}`}>

                            {/* change arrow*/}
                            {this.state.openMobileMenu ?
                                this.state.showHomeMenu ? <i class="lnr lnr-chevron-up"></i> :
                                    <i class="lnr lnr-chevron-down"></i>
                                : ''}

                            <Link to={'/multiple'}
                                  onClick={this.homeMenuToggle}
                                  className='sf-with-ul'>
                                Home
                            </Link>
                            <ul
                                style={this.state.showHomeMenu ? {display: 'block'} : {display: 'none'}}
                                onMouseLeave={this.homeMenuMouseLeave}
                                onMouseEnter={this.homeMenuMouseEnter}
                            >
                                <li>
                                    <Link to={"/multiple/index"}>Home - Saas</Link>
                                </li>
                                <li>
                                    <Link to={"/multiple/index8"}>Home - Products Fixed</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={"/multiple/pricing"}>Pricing</Link>
                        </li>
                        <li className={`menu-has-children  ${this.state.showBlogMenu ? ' parent-active sfHover' : ''}`}>

                            {/* change arrow*/}
                            {this.state.openMobileMenu ?
                                this.state.showBlogMenu ? <i class="lnr lnr-chevron-up"></i> :
                                    <i class="lnr lnr-chevron-down"></i>
                                : ''}

                            <Link to={'/blog'}
                                  onClick={this.blogMenuToggle}
                            >
                                Blog
                            </Link>
                            <ul
                                style={this.state.showBlogMenu ? {display: 'block'} : {display: 'none'}}
                                onMouseLeave={this.blogMenuMouseLeave}
                                onMouseEnter={this.blogMenuMouseEnter}
                            >
                                <li>
                                    <Link to={"/blog/home"}>Blog Home</Link>
                                </li>
                                <li>
                                    <Link to={"/blog/list"}>Blog List</Link>
                                </li>
                                <li>
                                    <Link to={"/blog/list-sidebar"}>Blog List Sidebar</Link>
                                </li>
                                <li>
                                    <Link to={"/blog/details"}>Blog Details</Link>
                                </li>
                                <li>
                                    <Link to={"/blog/details-sidebar"}>Blog Details Sidebar</Link>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <Link to={"/multiple/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/blog/survey-home"}>Home</Link>
                        </li>
                        <li>
                            <Link to={currentUser ? "/blog/my-page" : "/auth/login"}>{currentUser ? "My Page" : "Login"}</Link>
                        </li>


                    </ul>
                </nav>


            </>
        );
    }
}

export default Nav;

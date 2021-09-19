import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {ToastContainer} from 'react-toastify';

import IndexPage from "./pages/multiple/index_page";
import Index8Page from "./pages/multiple/index8page";
import PricingPage from "./pages/multiple/pricing_page";
import ContactPage from "./pages/multiple/contact_page";

import MyPage from "./pages/blog/my_page";
import SurveyListPage from "./pages/blog/survey_list";
import SurveyAddPage from "./pages/blog/survey_add";
import SurveyHomePage from "./pages/blog/survey_home";

import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";

import BlogHomePage from "./pages/blog/blog_home_page";
import BlogListPage from "./pages/blog/blog_list_page";
import BlogListSidebarPage from "./pages/blog/blog_list_sidebar_page";
import BlogDetailsPage from "./pages/blog/blog_details_page";
import BlogDetailsSideBarPage from "./pages/blog/blog_details_side_bar_page";

import NoMatch from "./pages/NoMatch";
import ScrollToTop from "./componets/scrollToTop";
import Loader from "./componets/loader";
import SurveyDetailsPage from "./pages/blog/survey_detail";
import SurveyEditPage from "./pages/blog/survey_edit";

export default function App() {

    return (
        <>
            <Helmet>
                <title>Survey</title>
            </Helmet>
            <Loader/>
            <BrowserRouter basename={'/'}>
                <Route exact path="/index">
                    <Redirect to="/multiple/index"/>
                </Route>
                <Route exact path="/blog/index">
                    <Redirect to="/blog/home"/>
                </Route>

                <ScrollToTop/>
                <Switch>
                    <Route path="/multiple/index" component={IndexPage}/>
                    <Route exact path="/" component={SurveyListPage}/>
                    <Route path="/multiple/index8" component={Index8Page}/>
                    <Route path="/multiple/pricing" component={PricingPage}/>
                    <Route path="/multiple/contact" component={ContactPage}/>

                    <Route path="/blog/survey-list" component={SurveyListPage}/>
                    <Route path="/blog/my-page" component={MyPage}/>
                    <Route path="/blog/survey-add" component={SurveyAddPage}/>
                    <Route path="/blog/survey-home" component={SurveyHomePage}/>
                    <Route path="/blog/survey-detail/:id" component={SurveyDetailsPage}/>
                    <Route path="/blog/survey-edit/:id" component={SurveyEditPage}/>

                    <Route path="/auth/login" component={LoginPage}/>
                    <Route path="/auth/register" component={RegisterPage}/>

                    <Route path="/blog/home" component={BlogHomePage}/>
                    <Route path="/blog/list" component={BlogListPage}/>
                    <Route path="/blog/list-sidebar" component={BlogListSidebarPage}/>
                    <Route path="/blog/details" component={BlogDetailsPage}/>
                    <Route path="/blog/details-sidebar" component={BlogDetailsSideBarPage}/>

                    <Route component={NoMatch}/>
                </Switch>
                <ToastContainer/>
            </BrowserRouter>
        </>
    )

}
 


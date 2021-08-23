import React from "react";
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';

import IndexPage from "./pages/multiple/index_page";
import Index2Page from "./pages/multiple/index2page";
import Index3Page from "./pages/multiple/index3page";
import Index4Page from "./pages/multiple/index4page";
import Index5Page from "./pages/multiple/index5page";
import Index6Page from "./pages/multiple/index6page";
import Index7Page from "./pages/multiple/index7page";
import Index8Page from "./pages/multiple/index8page";
import Index9Page from "./pages/multiple/index9page";
import Index10Page from "./pages/multiple/index10page";
import FeaturesPage from "./pages/multiple/features_page";
import AboutPage from "./pages/multiple/about_page";
import PricingPage from "./pages/multiple/pricing_page";
import ContactPage from "./pages/multiple/contact_page";

import BlogHomePage from "./pages/blog/blog_home_page";
import BlogHomeSidebarPage from "./pages/blog/blog_home_sidebar_page";
import BlogListPage from "./pages/blog/blog_list_page";
import BlogListSidebarPage from "./pages/blog/blog_list_sidebar_page";
import BlogDetailsPage from "./pages/blog/blog_details_page";
import BlogDetailsSideBarPage from "./pages/blog/blog_details_side_bar_page";

import LandingSassPage from './pages/landing/landing_sass_page';
import LandingSassFixedImgPage from "./pages/landing/landing_sass_fixed_img_page";
import LandingProductPage from "./pages/landing/landing_product_page";
import LandingSassImagePage from "./pages/landing/landing_sass_image_page";
import LandingProductImagePage from "./pages/landing/landing_product_image_page";
import LandingSassSliderPage from "./pages/landing/landing_sass_slider_page";
import LandingProductSliderPage from "./pages/landing/landing_product_slider_page";
import LandingProductFixedImgPage from "./pages/landing/landing_product_fixed_img_page";
import LandingProductVideoPage from "./pages/landing/landing_product_video_page";
import LandingSassVideoPage from "./pages/landing/landing_sass_video_page";
import NoMatch from "./pages/NoMatch";
import ScrollToTop from "./componets/scrollToTop";
import Loader from "./componets/loader";


export default function App(){

	return (
		<>
		<Helmet>
			<title>Softdash – Creative SaaS and Software HTML Template</title>
		</Helmet>
		<Loader/>
			<BrowserRouter basename={'/'} >
				<Route exact path="/index">
					<Redirect to="/multiple/index" /> 
				</Route>
				<Route exact path="/blog/index">
					<Redirect to="/blog/home" /> 
				</Route>
			
				<ScrollToTop/>
				<Switch>
					<Route path="/multiple/index" component={IndexPage}/>
					<Route exact path="/" component={IndexPage}/>
					<Route path="/multiple/index2" component={Index2Page}/>
					<Route path="/multiple/index3" component={Index3Page}/>
					<Route path="/multiple/index4" component={Index4Page}/>
					<Route path="/multiple/index5" component={Index5Page}/>
					<Route path="/multiple/index6" component={Index6Page}/>
					<Route path="/multiple/index7" component={Index7Page}/>
					<Route path="/multiple/index8" component={Index8Page}/>
					<Route path="/multiple/index9" component={Index9Page}/>
					<Route path="/multiple/index10" component={Index10Page}/>
					<Route path="/multiple/features" component={FeaturesPage}/>
					<Route path="/multiple/about" component={AboutPage}/>
					<Route path="/multiple/pricing" component={PricingPage}/>
					<Route path="/multiple/contact" component={ContactPage}/>

					<Route path="/landing/saas" component={LandingSassPage}/>
					<Route path="/landing/sass-fixed-img" component={LandingSassFixedImgPage}/>
					<Route path="/landing/product" component={LandingProductPage}/>
					<Route path="/landing/sass-image" component={LandingSassImagePage}/>
					<Route path="/landing/product-image" component={LandingProductImagePage}/>
					<Route path="/landing/sass-slider" component={LandingSassSliderPage}/>
					<Route path="/landing/product-slider" component={LandingProductSliderPage}/>
					<Route path="/landing/product-fixed-img" component={LandingProductFixedImgPage}/>
					<Route path="/landing/sass-video" component={LandingSassVideoPage}/>
					<Route path="/landing/product-video" component={LandingProductVideoPage}/>


					<Route path="/blog/home" component={BlogHomePage}/>
					<Route path="/blog/home-sidebar" component={BlogHomeSidebarPage}/>
					<Route path="/blog/list" component={BlogListPage}/>
					<Route path="/blog/list-sidebar" component={BlogListSidebarPage}/>
					<Route path="/blog/details" component={BlogDetailsPage}/>
					<Route path="/blog/details-sidebar" component={BlogDetailsSideBarPage}/>

					<Route component={NoMatch} />
				</Switch>
				<ToastContainer />
			</BrowserRouter>
		</>
	)

}
 


import React from "react";
import HeaderBlog from "../../componets/blog/header/header_blog";
import HeroBlogListPage from "./hero_blog_list_page";
import Footer from "../../componets/multiple/footer";
import BlogSidebar from "../../componets/blog/blog_sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import { Link } from "react-router-dom";


class BlogListSidebarPage extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      posts: [],
    }
  }

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');


    axios.get('/api/blog/index.json').then(response => {

      this.setState({
        posts: response.data.data
      });

    });


  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <HeaderBlog headerId="header7" />
        <HeroBlogListPage />

        <section className="blog-post-list section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">

       
                {posts.map(post => (
<div className="single-card card"  key={post.id} style={{ border: 'none'}}>
  <div className="row">
    <div className="col-lg-6">
      <img className="card-top-img" 
      src={post.thumbnail}
       alt={post.title} />
      <a href="#be" className="genric-btn card-btn">Art &amp; Fantacy</a>
    </div>
    <div className="col-lg-6">
      <div className="card-body">
        <div>
          <Link to="/blog/details">
            <h4 className="card-title">{ post.title }</h4>
            
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p> { post.description }</p>
            <p>Post Written by
              <br />
              <span className="author">
                <a href="#author">{ post.author }</a>
              </span> on 25th June, 2018</p>
          </div>
          <div className="col-lg-12">
            <div>
              <a href="#be" className="card-link">
                <FontAwesomeIcon className="mr-1" icon={faHeart} />
                218</a>

              <a href="#be" className="card-link">
              <FontAwesomeIcon className="mr-1" icon={faEye} />
              4.5k Views</a>
              <a href="#be" className="card-link">
              <FontAwesomeIcon className="mr-1" icon={faCommentDots} />07</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


             
            ))}



                <nav aria-label="Page navigation" className="mt-70">
                  <ul
                    className="pagination flex justify-content-center"
                    id="blog-post-sidebar"
                  >
                    <li className="page-item">
                      <a className="page-link" href="/index" aria-label="Previous">
                        <span className="fa fa-long-arrow-alt=-left" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a id="page-link1" className="page-link" href="/index">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a id="page-link2" className="page-link" href="/index">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a id="page-link3" className="page-link" href="/index">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a id="page-link4" className="page-link" href="/index">
                        04
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/index" aria-label="Next">
                        <span className="fa fa-long-arrow-alt=-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
                
              </div>

              
              
             
              <BlogSidebar />
            </div>
          </div>
        </section>
        
        
        <Footer />
        
      </>
    );
  }
}

export default BlogListSidebarPage;

import React from "react";
import HeaderBlog from "../../componets/blog/header/header_blog";
import HeroHeaderBlog from "../../componets/blog/hero/hero_header_blog";
import Footer from "../../componets/multiple/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCommentDots } from "@fortawesome/free-solid-svg-icons";
//import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { Link } from "react-router-dom";

class BlogHomePage extends React.Component {

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

    console.log(posts);
    return (
      <>
        
        <HeaderBlog headerId={`header7`}/>
        
        
        <HeroHeaderBlog />
        
        
        <section className="blog-post section-gap">
          <div className="container">
            <div className="row">

            {posts.map(post => (
              <div key={post.id} className="col-lg-4 col-md-6">
               <div className="single-card card">
                 <img
                   className="card-top-img"
                   src={post.thumbnail}
                   alt={post.title}
                 />
                 <div className="card-body">


                   <Link href="#category" className="genric-btn card-btn">
                     Art & Fantacy
                   </Link>
                   <p className="mt-25 post-info">
                     <span className="author">
                      <Link to="#author" className="mr-1">{ post.author }</Link>
                     </span>
                     on { post.date }
                   </p>
                   <div className="mb-15">
                     <a href="/index" className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faHeart } />
                       { post.like }
                     </a>
                     <a href="/index" className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faEye } />
                       { post.viewCounter } Views
                     </a>
                     <a href="/index" className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faCommentDots } />
                       { post.commentCounter }
                     </a>
                   </div>
                   <Link to={`/blog/details`}>
                     <h4 className="card-title mb-15">
                     { post.title }
                     </h4>
                   </Link>
                   <p>
                   { post.description }
                   </p>
                 </div>
               </div>
             </div>
             
            ))}


            
            </div>
            
            <nav aria-label="Page navigation" className="mt-0 mt-lg-3">
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
        </section>
        
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default BlogHomePage;

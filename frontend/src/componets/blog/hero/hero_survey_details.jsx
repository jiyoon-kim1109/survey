import React from "react";
import heroImg from "../../../assets/img/blog/blog-details-bg.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faEye, faCommentDots, faPlus} from "@fortawesome/free-solid-svg-icons";
import AuthService from "../../../services/auth.service";
import Moment from "react-moment";
import {Link} from "react-router-dom";

class HeroSurveyDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullscreen: {
                height: 'auto'
            },
            currentUser: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        this.setState({
            fullscreen: {
                height: window.innerHeight,
            }
        })
    }

    componentWillMount() {
        this.setState({
            fullscreen: {
                height: window.innerHeight,
            }
        });
    }

    render() {

        const currentUser = this.state.currentUser;
        console.log(currentUser);

        const hero_section_img_style = {
            height: "400px",
            backgroundImage: `url(${heroImg})`
        };

        const post = this.props.post;
        const title = this.props.title;
        console.log(post);

        return (
            <section className="hero-section-blog-details relative">
                <div style={hero_section_img_style}>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row mb-20">
                            <div className="col-md-12">
                                <h1 className="text-white">{post ? post.title : title}</h1>
                            </div>
                        </div>
                        {post ? (
                        <div className="row no-margin align-items-center justify-content-between content-wrap">
                            <div className="d-flex align-items-center content-wrap-child">
                                <div className="text">
                                    <div className="text-white">
                                        <p className="mb-0">
                                            {post.user_id} on <Moment
                                            format="D MMM, YYYY">{post.createdAt}</Moment>
                                         </p>
                                    </div>
                                </div>
                                <div className="d-flex icons">
                                    <div className="text icon">
                                        <div className="text-white">
                                            <a href="/index">
                                                <FontAwesomeIcon icon={faHeart} className="mr-1"/>
                                                218
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text icon">
                                        <div className="text-white">
                                            <a href="/index">
                                                <FontAwesomeIcon icon={faEye} className="mr-1"/>
                                                4.5k Views
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text icon">
                                        <div className="text-white">
                                            <a href="/index">
                                                <FontAwesomeIcon icon={faCommentDots} className="mr-1"/>

                                                07
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                {currentUser && post.user_id === currentUser.id ? (
                                    <Link
                                        to={"/blog/survey-edit/" + post.id}
                                        className="genric-btn2"
                                    >Edit</Link>
                                ) : (
                                    null
                                )}
                            </div>
                        </div>
                        ) : (
                            null
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSurveyDetails;

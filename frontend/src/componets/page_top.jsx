import React from "react";
import AuthService from "../services/auth.service";

class PageTop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        document.body.classList.add('parent-active');
        document.body.classList.add('version-blog');
    }

    componentWillUnmount() {
        document.body.classList.remove('parent-active');
        document.body.classList.remove('version-blog');
    }

    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {

        const currentUser = this.state.currentUser;

        return (
            <section className="cta-section gradient-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="text-white mb-5">
                                Life Is Choice between Birth and Death :)
                            </h1>
                            <div className="cta-btn">
                                <a href="/blog/survey-add" className="ct-btn1 mr-sm-3 mb-sm-0 mb-3">
                                    New Survey
                                </a>
                                {currentUser ? (
                                    <a onClick={this.logout} href="" className="ct-btn2 active">
                                        Logout
                                    </a>
                                ) : (
                                    <a href="/auth/login" className="ct-btn2 active">
                                        Sign in
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PageTop;

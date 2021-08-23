import React from "react";
import Nav from "../nav";
import {Link} from "react-router-dom";

class Header9 extends React.Component {


  constructor(props) {
    super(props);
    this.state={
      isNotScrolled: true
    };
  }

  componentDidMount() {

    document.addEventListener('scroll', () => {
      const isNotScrolled = window.scrollY < 100;
      if (isNotScrolled !== this.state.isNotScrolled) {
        this.setState({ isNotScrolled })
      }
    });

  }


  render() {
    return (
        <header id={this.props.headerId} className={ `parent-active ${this.state.isNotScrolled ? '' : 'header-scrolled'}`}>

        <div className="container-fluid" >
          <div className="row align-items-center justify-content-between">
            <div id="logo">
              <Link to={"index"}>
                <img className="logo-2" src={this.props.Logo1}  alt="" />
              </Link>
              <Link to={"index"}>
                <img className="logo-1" src={this.props.Logo2}  alt="" />
              </Link>
            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">

                <Nav />

            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">
              <Link className="genric-btn" to={"request-demo"}>
                Free trial
              </Link>
            </div>
            
          </div>
        </div>
      </header>
    );
  }
}

export default Header9;

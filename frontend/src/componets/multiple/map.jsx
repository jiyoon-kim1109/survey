import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends React.Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  render() {
    return (
      <section className="map-section relative">
        <div className="container-fluid relative">
          <div className="row">
            <div className="map-wrap2" id="map" >

              <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyA7nx22ZmINYk9TGiXDEXGVxghC43Ox6qA'/* YOUR KEY HERE */ }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
              </GoogleMapReact>

            </div>
          </div>
        </div>
        <div className="container info-wrap">
          <div className="row align-items-center justify-content-end section-gap">
            <div className="contact-info">
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home" />
                </div>
                <div className="desc">
                  <h4>Los Angeles, United States</h4>
                  <p>Santa monica bullevard</p>
                </div>
              </div>
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset" />
                </div>
                <div className="desc">
                  <a href="tel:00(440)98655629865">
                  <h4>00 (440) 9865 562 9865</h4>
                  </a>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <div className="desc">
                  <h4>support@yoursite.com</h4>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;

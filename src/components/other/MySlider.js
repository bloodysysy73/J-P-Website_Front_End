import React from 'react';
// import Slider from 'infinite-react-carousel';
import { Carousel } from 'react-responsive-carousel';
import "../../../src/assets/css/carousel.css";

class MySlider extends React.Component {

    render() {
        return (<Carousel {...this.props.props}>
            <div>
                <img
                    alt="..."
                    src={require("assets/img/logo-small.png")}
                />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img
                    alt="..."
                    src={require("assets/img/logoJP.jpg")}
                />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img
                    alt="..."
                    src={require("assets/img/jan-sendereks.jpg")}
                />
            </div>
            <div>
                <img
                    alt="..."
                    src={require("assets/img/bg5.jpg")}
                />
            </div>
            <div>
                <img
                    alt="..."
                    src={require("assets/img/header.jpg")}
                />
            </div>
        </Carousel>);
    }

}
export default MySlider;
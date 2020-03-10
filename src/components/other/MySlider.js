import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


//import "../../../src/assets/css/carousel.css";


class MySlider extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
                (<img alt="" src={require("../../assets/img/jumeaux1.jpg")} />),
                (<img alt="" src={require("../../assets/img/jumeaux2.jpg")} />),
                (<img alt="" src={require("../../assets/img/jumeaux3.jpg")} />),
                (<img alt="" src={require("../../assets/img/jumeaux4.jpg")} />),
                (<img alt="" src={require("../../assets/img/jumeaux5.jpg")} />)

            ],
        }
    }

    // we check if we got event from input (and it has target property) or just value from Carousel 
    onchange(value) {
        this.setState({ value });
    }
    render() {

        return (
            <div>
                <Carousel
                    infinite
                    keepDirectionWhenDragging
                    animationSpeed={2500}
                    autoPlay={2500}
                    stopAutoPlayOnHover
                    offset={10}
                    itemWidth={250}
                    centered
                    slides={this.state.slides}
                    dots
                >
                </Carousel>
            </div >
        );
    }
}

export default MySlider
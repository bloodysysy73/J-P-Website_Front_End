import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

//import "../../../src/assets/css/carousel.css";

const styleImg = {

}

class MySlider extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
                (<img style={styleImg} alt="" src={require("../../assets/img/jumeaux1.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/jumeaux2.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/jumeaux3.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/jumeaux4.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/jumeaux5.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/logojp.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/header.jpg")} />),
                (<img style={styleImg} alt="" src={require("../../assets/img/damir-bosnjak.jpg")} />)




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
                    animationSpeed={3000}
                    autoPlay={4500}
                    stopAutoPlayOnHover
                    offset={5}
                    itemWidth={350}
                    slides={this.state.slides}
                    dots
                >
                </Carousel>
            </div >
        );
    }
}

export default MySlider
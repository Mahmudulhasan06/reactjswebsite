import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="slider_main">
            <div className="container">
                <Slider {...settings}>
                    <div className="d-flex justify-content-between">
                        <div className="scontent">
                            <h3>New product</h3>
                            <h1>Flexible Chair</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing cumque elit. Reprehenderit accusantium at nostrum amet recusandae.</p>
                            <button>Shop Now</button>
                        </div>
                        <img src="./images/slider-1.png" alt="fimages"/>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="scontent">
                            <h3>Best Seller</h3>
                            <h1>Creative Sofa</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing cumque elit. Reprehenderit accusantium at nostrum amet recusandae.</p>
                            <button>Shop Now</button>
                        </div>
                        <img src="./images/slider-2.png" alt="simages" />
                    </div>
                </Slider>
            </div>
            </div>
        );
    }
}
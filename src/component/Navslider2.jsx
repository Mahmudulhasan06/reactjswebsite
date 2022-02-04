import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navslider2 = () => {
    return (
        <>
            <div className="slider2_main"style={{marginTop:'-16px',position:'relative'}}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider2/slider-2-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider2/slider-2-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default Navslider2;


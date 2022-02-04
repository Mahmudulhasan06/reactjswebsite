import React from 'react';
import Footer2 from '../Footer2';
import AbsContent from './AbsContent'

const About = () => {
    return (
        <>
            <section className='main_about'>
                <AbsContent title='About us' para='About' link='/' linkname='Home'/>
                <div className="abs_imgcontet">
                    <div className="abs_content container">
                        <h2>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.</h2>
                    </div>
                    <div className="img_div_ab">
                        <div className="row ps-2">
                            <img src="images/about/1.jpg" className='col-6 col-md-6 col-lg-6' alt="about" />
                            <img src="images/about/2.jpg" className='col-6 col-md-6 col-lg-6' alt="about" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="abs_protfoio">
                        <div className="row d-flex justify-content-between">
                            <div className="abs_protfolio_single col-6 col-md-6 col-lg-6">
                                <h4>OUR STORES</h4>
                                <p className='pt-2'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className="abs_protfolio_single col-6 col-md-6 col-lg-6">
                                <h4>OUR MISSION</h4>
                                <p className='pt-2'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </section>
        </>
    )
}

export default About

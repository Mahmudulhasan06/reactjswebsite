import React from 'react'
import Footer2 from '../Footer2'
import AbsContent from './AbsContent'
import SelectBar from './SelectBar'

const Launge = () => {
    return (
        <>
            <AbsContent title='LOUNGE' para='COLLECTION' para2='/ LOUNGE' />
            <SelectBar number='1' />
            <div className="launge_div">
                <div className="container">
                    <div className="prsec_imgdiv_wrapper d-flex justify-content-between flex-wrap">
                        <div className="pr_imgdiv">
                            <div className="prsec_img">
                                <img src='images/prsec/7.jpg' alt="random" />
                            </div>
                            <h5><i class="fas fa-shopping-cart"></i> Add to cart</h5>
                            <h4>High back lounge office cha...</h4>
                            <h6>$499.0</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Launge

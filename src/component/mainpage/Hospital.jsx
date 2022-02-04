import React from 'react'
import Footer2 from '../Footer2'
import AbsContent from './AbsContent'
import HospiData from './Data/HospiData'
import SelectBar from './SelectBar'

const Hospital = () => {
    return (
        <>
            <AbsContent title='HOSPITAL BED' para ='COLLECTION' para2='/ HOSPITAL BED'/>
            <SelectBar number='3'/>
            <div className="launge_div">
                <div className="container">
                    <div className="prsec_imgdiv_wrapper d-flex justify-content-between flex-wrap">
                        {HospiData.map((curElem) => {
                            return (
                                <>
                                    <div className="pr_imgdiv">
                                        <div className="prsec_img">
                                            <img src={curElem.imgs} alt="random" />
                                        </div>
                                        <h5><i class="fas fa-shopping-cart"></i> Add to cart</h5>
                                        <h4>{curElem.title}</h4>
                                        <h6><del style={{ color: '#ddd', marginRight: '15px' }}>{curElem.rate1}</del> {curElem.rate2}</h6>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer2/>
        </>
    )
}

export default Hospital

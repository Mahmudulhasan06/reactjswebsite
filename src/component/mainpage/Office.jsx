import React from 'react';
import Footer1 from '../Footer1';
import AbsContent from './AbsContent';
import SelectBar from './SelectBar';
import OfficeChair from './Data/OfficeChairData';

const Office = () => {
    return (
        <>
            <AbsContent title='OFFICE CHAIR' para='COLLECTION' para2='/ OFFICE CHAIR'/>
            <SelectBar number='3'/>
            <div className="launge_div">
                <div className="container">
                    <div className="prsec_imgdiv_wrapper d-flex justify-content-between flex-wrap">
                        {OfficeChair.map((curElem) => {
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
            <Footer1/>
        </>
    )
}

export default Office

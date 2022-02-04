import React from 'react';
import Prhead from './Prhead';
import PesecData from './PesecData';
import LatNews from './LatNews';

const ProductSec = () => {
    return (
        <>
            <section className='product_sec'>
                <Prhead head="Our Products" para="Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore" />
                <div className="container">
                    <div className="pr_list">
                        <ul>
                            <li>New Arrival</li>
                            <li>Featured</li>
                            <li>On Sale</li>
                            <li>Tending</li>
                        </ul>
                    </div>
                    <div className="prsec_imgdiv_wrapper d-flex justify-content-between flex-wrap">
                        {PesecData.map((curElem) => {
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
                    <div className="show_prsec d-flex justify-content-between">
                        <div className="show_left">
                            <h2>Sale Furniture <br /> For Summer</h2>
                            <p>Great Discount Here</p>
                        </div>
                        <div className="show_right">
                            <h2>Office Chair <br /> For Best Offer</h2>
                            <p>Great Discount Here</p>
                        </div>
                    </div>
                    <Prhead head="Latest News" para="Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore" />
                    <section className='news_sec d-flex justify-content-between'>
                        <LatNews img='./images/LatNews/1.jpg' title='Eoumode tempor incidunt l...' />
                        <LatNews img='./images/LatNews/2.jpg' title='Ut enim adminim venium, q...' />
                        <LatNews img='./images/LatNews/3.jpg' title='Spatalize with that the fruns' />
                    </section>
                </div>
            </section>
        </>
    )
}

export default ProductSec

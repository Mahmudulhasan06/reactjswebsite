import React from 'react'

const LatNews = (props) => {
    return (
        <>
            <div className="card" style={{width: "30%",background:'#F4F5F8',border:'none'}}>
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body pb-4 ps-3">
                    <h4 className="card-title">{props.title}</h4>
                    <h6 className='pt-1 pb-1'><span>By Mahmud ms,</span> 15 December 2022</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <a href="https://google.com" className="btn btn-secondary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default LatNews

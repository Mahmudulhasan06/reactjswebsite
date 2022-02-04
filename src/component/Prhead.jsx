import React from 'react'

const Prhead = (props) => {
    return (
        <>
            <div className="prheading">
                <div className="container">
                    <h1>{props.head}</h1>
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    )
}

export default Prhead;

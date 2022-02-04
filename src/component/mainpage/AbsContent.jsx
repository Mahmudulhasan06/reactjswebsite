import React from 'react';
import { Link } from 'react-router-dom';

const AbsContent = (props) => {
    return(
        <>
            <div className="about_us_wlink d-flex flex-column align-items-center" style={{ padding: '80px 0px' }}>
                    <h1>{props.title}</h1>
                    <div className="abs_link d-flex">
                        <Link to='/' style={{ color: '#333'}}>Home</Link>
                        <span>/</span>
                        <p>{props.para}</p>
                        <p>{props.para2}</p>
                    </div>
                </div>
        </>
    )
}

export default AbsContent

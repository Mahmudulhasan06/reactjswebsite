import React from 'react'

const SelectBar = (props) => {
    return (
        <>
            <div className="container">
                <div className='select_bar d-flex justify-content-between'>
                    <font>Showing {props.number} products</font>
                    <div className="selectDiv d-flex">
                        <p>Sort by</p>
                        <select class="form-select" style={{ width: '200px', height: '50px' }} aria-label="Default select example">
                            <option selected>Relevance</option>
                            <option value="1">Name (A-Z)</option>
                            <option value="2">Name (Z-A)</option>
                            <option value="3">Price (low-high)</option>
                            <option value="3">Price (high-low)</option>

                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectBar

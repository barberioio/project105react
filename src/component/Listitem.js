import React from 'react'

function Listitem({product}) {
    return (
        <div className="listitem">
            <img src={product.picture} alt="" className="listimage"/>
            <div className="listbox">
            <div className="listname">{product.product}</div>
            <div className="price">{product.price}</div>
            </div>
           
        </div>
    )
}

export default Listitem

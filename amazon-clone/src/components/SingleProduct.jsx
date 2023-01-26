import React from 'react'
import "../components-css/SingleProduct.css";

function SingleProduct(props) {
  return (
    <div className='product'>
        <div className="box-heading">
          <h5>{props.title}</h5>
        </div>
        
        <div className="images">
            <div className='container'>
                <img src={props.img} alt="img" className="img"/>
            </div>
        </div>

        <div className="see">{props.see}</div>
    </div>
  )
}

export default SingleProduct;

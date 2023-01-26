import React from 'react'
import "../components-css/Product.css";

function Product(props) {
  return (
    <div className='product'>
        <div className="box-heading">
          <h5>{props.title}</h5>
        </div>
        
        <div className="images">
          <div className="row1">
            <div className='container'>
              <img src={props.img1} alt="img1" className="img"/>
              <span className="title1">{props.title1}</span>
            </div>
            <div className='container'>
              <img src={props.img2} alt="img2" className="img"/>
              <span className="title2">{props.title2}</span>
            </div>
          </div>
          <div className="row2">
            <div className='container'>
              <img src={props.img3} alt="img3" className="img"/>
              <span className="title3">{props.title3}</span>
            </div>
            <div className='container'>
              <img src={props.img4} alt="img4" className="img"/>
              <span className="title4">{props.title4}</span>
            </div>
          </div>

        </div>

        <div className="see">{props.see}</div>
    </div>
  )
}

export default Product;

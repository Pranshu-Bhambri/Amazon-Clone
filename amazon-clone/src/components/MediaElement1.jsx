import React from 'react'
import "../components-css/MediaElement1.css";

function MediaElement1(props) {
  return (
    <div className='media-element1'>
      <div className="element1">
        <img src={props.image} alt="" className='image1' />
      </div>
      <div className="details">
        <span className='offer'>{props.offer}</span>
        <span className='deal'>Deal of the Day</span>
        {/* <span className='deal'>{props.deal}</span> */}
      </div>
    </div>
    
  )
}

export default MediaElement1;


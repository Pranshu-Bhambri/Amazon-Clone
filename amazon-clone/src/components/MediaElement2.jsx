import React from 'react'
import "../components-css/MediaElement2.css";

function MediaElement2(props) {
  return (
    <div className='media-element2'>
      <div className="element2">
        <img src={props.image} alt="" className='image2' />
      </div>
    </div>
    
  )
}

export default MediaElement2;


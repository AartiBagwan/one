import React from 'react'

const FirstComponent = (props) => {
  return (
    <div className='one'>
      <h2>{props.num}. My card no {props.num}</h2>
      
    </div>
  )
}

export default FirstComponent

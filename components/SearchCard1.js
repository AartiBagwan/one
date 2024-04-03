import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'


const SearchCard1 = ({ product1 ,id }) => {
  return (

<div className='card11' key={id}>
<br></br>

<Image src={product1.img} height={180} width={310}/>

<p>{product1.title}</p>
<p className="price11">{product1.price}</p>
<p>{product1.description}</p>

</div> 
  )
}

export default SearchCard1

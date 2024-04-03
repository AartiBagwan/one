import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import { Product2 } from './SearchData2'


const SearchCard2 = ({ Product2 ,id }) => {
  return (
    <div className='Same12'>
<div className='card1' key={id}>
<br></br>

<Image  src={Product2.img} height={200} width={213}/>

<p id='Page1'>{Product2.title}</p>
<p className="price11">{Product2.price}</p>
<p id='Page1'>{Product2. description}</p>

</div> 
</div>

  )
}

export default SearchCard2

import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Product1 } from './SearchData1'

const SearchCard = ({ product ,id }) => {
  return (

    <div className='card' key={id}>
<Link href={product.link}>

<Image src={product.img} height={60} width={60} text-align='center'/>

<p>{product.title}</p>
<p className="price">{product.price}</p>
<p>{product.description}</p>

</Link>


</div> 


  )
}

export default SearchCard

import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import { Product4 } from './SearchData4'


const SearchCard4 = ({ Product4 ,id }) => {
  return (

<div className='card1' key={id}>
<br></br>

<Image id='IM' src={Product4.img} height={250} width={413}/>

<p id='Page11'>{Product4.title}</p>

<p id='Page11'>{Product4. description}</p>

</div> 


  )
}

export default SearchCard4

import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import { Product3 } from './SearchData3'


const SearchCard3 = ({ Product3 ,id }) => {
  return (

<div className='card1' key={id}>
<br></br>

<Image id='IM' src={Product3.img} height={250} width={413}/>

<p id='Page11'>{Product3.title}</p>

<p id='Page11'>{Product3. description}</p>



</div> 



  )
}

export default SearchCard3

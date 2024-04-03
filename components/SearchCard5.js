import Image from 'next/image'
import React from 'react'
import { Product5 } from './SearchData5'

const SearchCard5 = ({ Product5 ,id }) => {
  return ( 
<div className='Same12'>
<div className='card5' key={id}>

<br></br>

<Image id='IM' src={Product5.img} height={200} width={213}/>

<p id='Page11'>{Product5.title}</p>

<p id='Page11'>{Product5. description}</p>

</div> 
</div>

  )
}


export default SearchCard5

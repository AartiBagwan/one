import React from 'react'
import { Product2 } from './SearchData2'
import SearchCard2 from './SearchCard2'


const SearchGallary2 = () => {
  return (
<>
<h3>Top Deals</h3>
<div className='Gallary1'>

 {
    Product2.map((e,index)=>{
        return(
            <SearchCard2 Product2={e} id={index}/>

        
           
        )
    })
 } 
</div>


</>

  )
}

export default SearchGallary2

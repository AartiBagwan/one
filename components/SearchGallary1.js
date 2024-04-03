import React from 'react'
import {Product1 } from './SearchData1'
import SearchCard1 from './SearchCard1'

const SearchGallary1 = () => {
  return (
    <>
    <div className='galaryLayout11'>
    
     {
        Product1.map((e,index)=>{
            return(
                <SearchCard1 product1={e} id={index} />
    
            
               
            )
        })
     } 
    </div>
    </>
  )
}

export default SearchGallary1

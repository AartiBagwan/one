import React from 'react'
import { Product5 } from './SearchData5'
import SearchCard5 from './SearchCard5'

const SearchGallary5 = () => {
  return (
    <div className='Gallary5'>
    
   {
        Product5.map((e,index) => {
            return(

                <SearchCard5 Product5={e} id={index} />
            )
        }
        )


   }
    </div>
  )
}

export default SearchGallary5

import React from 'react'
import { Product3 } from './SearchData3'
import SearchCard3 from './SearchCard3'

function SearchGallary3() {
  return (
    <div className='Gallary3'>
      {
        Product3.map((e,index) =>{
            return(
                <SearchCard3 Product3={e} id={index} />
            )
           
        }

        )
      }
      
    </div>
  )
}

export default SearchGallary3

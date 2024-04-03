import React from 'react'
import { Product4 } from './SearchData4'
import SearchCard4 from './SearchCard4'

const SearchGallary4 = () => {
  return (
    <div className='Gallary4'>
    {
        Product4.map((e,index) =>{
            return(
                <SearchCard4 Product4={e} id={index} />
            )
           
        }

        )
      }  


    </div>
  )
}

export default SearchGallary4

import React from 'react'
import { Product6 } from './SearchData6'
import index from '@/pages'
import SearchCard6 from './SearchCard6'

const SearchGallary6 = () => {
  return (
    
    <div className='Gallary6'>
    
      {
        Product6.map((e,index) => {
            return(
                <SearchCard6 Product6={e} id={index} />
            )
        })
      }

    </div>
  )
}

export default SearchGallary6

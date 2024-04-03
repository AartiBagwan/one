import React from 'react'
import { Products } from './SearchData'
import SearchCard from './SearchCard'

const SearchGallary = () => {

  return (
    <>
      <div className='galaryLayout'>

        {
          Products.map((e, index) => {
            return (
              <SearchCard product={e} id={index} />
            )
          })
        }
      </div>


    </>

  )
}

export default SearchGallary

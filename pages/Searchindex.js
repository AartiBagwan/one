import SearchBar from '@/components/SearchBar'
import SearchGallary from '@/components/SearchGallary'
import SearchGallary1 from '@/components/SearchGallary1'
import SearchGallary2 from '@/components/SearchGallary2'
import SearchGallary3 from '@/components/SearchGallary3'
import SearchGallary4 from '@/components/SearchGallary4'
import SearchGallary5 from '@/components/SearchGallary5'
import SearchGallary6 from '@/components/SearchGallary6'
import Slider from '@/components/slider'

import React from 'react'
// import { BiSlider } from 'react-icons/bi'


function Searchindex() {
  return (
    <>
      <SearchBar/>
    <SearchGallary />
    <br/>
    <Slider />
   <SearchGallary1 />
   <SearchGallary2 />
   <SearchGallary3 />
   <SearchGallary4 />
   <SearchGallary5 />
   <br/>
   <SearchGallary6 />
   <br/>
   <Slider />
   <br/>
   <SearchGallary3 />
      </>
   
  )
}

export default Searchindex

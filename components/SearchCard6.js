import React from 'react'
import { Product6 } from './SearchData6'
import Image from 'next/image'

const SearchCard6 = ({ Product6, id }) => {

    return (

        <div className='card1' key={id}>

            <br />
            <Image src={Product6.img} height={215} width={213} />

            <p id='page1'> {Product6.title} </p>
            <p id='page1'> {Product6.prize} </p>

        </div>

    )
}

export default SearchCard6

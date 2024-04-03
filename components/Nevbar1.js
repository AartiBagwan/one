import React from 'react'
import { NavData } from './NavData1'
import Link from 'next/link'

const Nevbar1 = () => {
  return (
    <>
    <div className='Drop1'>
      {
        NavData.map((f) => {
            return(
                <Link href={f.link}> {f.title} </Link>
            )
        } )
      }
    </div>
    </>
  )
}

export default Nevbar1

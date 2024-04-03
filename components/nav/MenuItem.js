import React from 'react'
// import styles from "@/styles/Nav.module.css"
import Link from 'next/link'
import { NavData } from './NavData'


const MenuItem = () => {
  return (
<>
<div>
<h1>check</h1>
{
    NavData.map((f)=>{
        return(
            <Link href={ f.link}>{f.title}</Link>
            )
    })
}
</div>


<div className='Mainn1'>
<div className='Dhoni1'>
<h1>Best of Electronic</h1>

</div>
</div>
</>

  )
}

export default MenuItem

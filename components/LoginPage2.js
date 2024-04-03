// import LoginPage2 from '@/styles/LoginPage2.module.css';
import { FaLocationDot } from "react-icons/fa6";
import React from 'react'
import Link from "next/link";

function LoginPage2() {
  return (

      <div className='manav'>   
       <div className="gridbox">
        <div className="gridI1">
        <div className='firstGrid'>
       <span id="Locatin"> <FaLocationDot id="Local"/> INDORE </span>
            <h3 id='h3'>Nice to see you again</h3>
            <h1 id='h1'> WELCOME BACK </h1>
           <hr id='hr1'></hr>
            <p id='P'> As climate change gels wors governments are going to start limiting the number of gasoline cre being are 
            buiil  The cost of gas Will continue to rise . Wich Will make it heard for  As climate change gels
             
            </p>
            </div>
        </div>


        <div className="gridI2">
            <h2 id='pen'>Login Account</h2>

            <p id='same'> As climate change gels wors governments are going to start limiting the number of gasoline cre being are 
            buiil  The cost of gas Will continue to rise . Wich Will make it heard for  As climate change gels
             
            </p>

          <div className='rohan'>
        <input type="text" className="Nam" placeholder="username" required id="uname"></input>
        </div><br></br>

<div className='rohan1'>
 <input type="text" className="Nam1" placeholder="password" required id="pwd"></input>
</div>

<div className="Reem">
<input type="checkbox" id="html" name="fav_language" value="HTML"></input>
  <label for="html" className="la"> Remeember me</label><br></br>
</div>

<div className="link1">
<a href="http://" className='Pass1'>forgot your password</a><br></br>
</div>

<div className="BTN1">
<button id="But">SUBBCRIBE</button>
</div>

     </div>
    </div>
    </div>

   
  )
}

export default LoginPage2

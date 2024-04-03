
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";



function Loginpage() {
  return (

    <div className='shyam'>

    <div className='main'>

    <div className='heading'>
    <h1 id='sun'> SignIn</h1>
    <h2 id='sun1'> Sign in to your Account</h2>
    </div><br></br>
    
    <div className='one'>
    <button id='ten' ><FcGoogle id='mala'/>SignIn by Google </button>
    <button id='ten' ><FaApple  id='mala1'/>SignIn by Google</button>
    
  </div>
    
    <div className='three'>
   
    <input type="text" class="ivne1" placeholder="username" required id="uname">
    </input><br></br><br></br>
    </div>
    
    <div className='fore'>
    <input type="text" class="ivne1" placeholder="password" required id="pwd"></input><br></br><br></br>
    </div>
    
    <div className='five'>
    <a href="http://" className='got'>forgot your password</a><br></br>
    <input type="button" value="Submit" class="bansal22"onclick="fun1()"></input><br></br><br></br>
    </div><br></br>
    
    <div className='six'>
    <input type="button" value="New user|Register" class="Bansal22"onclick="fun1()"></input><br></br><br></br>
    </div>
    
    </div>
     
    </div>
       
  )
}

export default Loginpage


import Link from 'next/link'
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { BiCross } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import { LiaGiftSolid } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { HiArrowDownTray } from "react-icons/hi2";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiCustomerServiceLine } from "react-icons/ri";
import React from 'react'

function SearchBar() {
  return (

    <div class="navbar">
    <a href="#home" id='FFFF4'><b>Flipcard</b><br></br>Explor <span  id='CCO'>Plus<BiCross id='CCO'/></span></a>
    
    <div class="Syammm">
    <form class="example" action="/action_page.php">
    
      <input type="text" id='SOO' placeholder="Search For Product, Brands and More" name="search"></input>
      </form>
    
     </div>
  
  <div class="dropdown">

    <button class="dropbtn"><span><FaRegCircleUser id='ICON1'/></span>Login
      <span><GoChevronDown id='ICON2'/></span>  </button>
  
    <div class="dropdown-content">
      <div class="pops">
     <p>New Customer?</p>
     
  <input type="button" value="SIGN up" class="ABCD"onclick="fun1()"></input>
  <hr class="hrrr1"></hr>
  </div>
  <div className='KOKO1'>
      <a href="#"><span><FaRegCircleUser id='ICON1'/></span>My Profile</a>
      <a href="#"> <span><BiCross id='ICON1'/></span>Flipkart Plus Zone</a>
      <a href="#"><span><BiCube id='ICON1'/></span>Orders</a>
      <a href="#"><span><BiHeart id='ICON1'/></span>Wishlist</a>
      <a href="#"><span><CiGift id='ICON1'/></span>Rewards</a>
      <a href="#"><span><LiaGiftSolid id='ICON1'/></span>Gift Cards</a>
      </div>
    </div>
  </div> 
  
  <div class="megha">
 
    <a href="#home"> <span><BsCart id='ICON3'/></span>Cart</a>
  
  </div>
  <div class="megha99">
    <a href="#home"><span><AiFillCalendar id='ICON3'/></span> Become a seller</a>
  
  </div>
  
  <div class="dropdown123">
      <button class="BTNN">
      <span><IoEllipsisVerticalSharp id='SSPP' /></span>
      </button>
      <div class="dropdown-Hello">
      
        <a href="#"><span><IoIosNotifications id='MMM1' /></span>Notification Preferences</a>
        <a href="#"><span><RiCustomerServiceLine id='MMM1' /></span>24*7 Customer Care</a>
        <a href="#"><span><HiArrowTrendingUp /></span>Advertise</a>
        <a href="#"><span><HiArrowDownTray /></span>Downlod App </a>
  
      </div>
    </div> 
    </div>
   )
}

export default SearchBar

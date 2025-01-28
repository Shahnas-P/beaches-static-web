import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const [logo , setLogo] = useState(false)

  const handleToggle = ()=>{
    setToggle(!toggle)
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between px-6 items-center h-20 absolute z-10 text-white '>
      <div><h1
      className={logo? `hidden`:`block`}
       >BEACHES.</h1></div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex '>
      <BiSearch size={20} />
      <BsPerson size={20} />
      </div>
      <div className='flex md:hidden z-10' onClick={handleToggle} >
        {
          toggle ? <AiOutlineClose className='text-black' size={20} /> :<HiOutlineMenuAlt4  size={20}/>
        }
       
      </div>
      {/* Mobile view drop down */}
      <div onClick={handleToggle} className={toggle ? `absolute left-0 top-0  w-full md:hidden text-black  bg-gray-100/90 px-1 py-7 flex flex-col ` : `absolute left-[-100%] md:hidden `}>
        <h1>BEACHES.</h1> 
        <ul> 
        <li  className='border-b mx-3' >Home</li>
        <li className='border-b mx-3'  >Destinations</li>
        <li className='border-b mx-3' >Travel</li>
        <li  className='border-b mx-3'>View</li>
        <li  className='border-b mx-3' >Book</li>
        <div className='flex flex-col'>
        <button className='my-4'>Search</button>
        <button>Account</button>
      </div>
      <div className='flex justify-between my-8'>
        <FaFacebook className='icon'  />
        <FaTwitter  className='icon'  />
        <FaYoutube className='icon' />
        <FaPinterest className='icon' />
        <FaInstagram className='icon' />
      </div>
        </ul>
      </div>
    
     
    </div>
  )
}

export default Navbar

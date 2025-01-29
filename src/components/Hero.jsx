import React from 'react'
import {beachVid} from '../assets';
import { AiOutlineSearch } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className=' w-full h-screen relative'>
    <video className='w-full h-full object-cover'  src={beachVid} autoPlay loop muted />
    <div className='absolute w-full h-full left-0 top-0 bg-gray-900/30 '>
    <div className='absolute w-full h-full flex flex-col justify-center text-center text-white p-4'>
    <h1>First Class Travel</h1>
    <h2 className='py-4'>Top 1% Locations Worldwide</h2>
    <form className="flex   justify-between max-w-[700px] mx-auto w-full p-1 items-center text-black rounded-md bg-gray-100/90 ">
        <div>
            <input className='w-[300px] sm:w-[400px] bg-transparent focus:outline-none font-[poppins] ' type='text' placeholder='Search Destinations'  />
        </div>
        <div>
            <button>
                <AiOutlineSearch  size={20} className='icon ' style={{color:"white"}} />
            </button>
        </div>
    </form>

    </div>
    </div>
    </div>
  )
}

export default Hero

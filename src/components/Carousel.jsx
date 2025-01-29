import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
      url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
  ];

const Carousel = () => {
    const [slide,setSlide] = useState(0)
    const slideLenght = sliderData.length
    const prevSlide = ()=>{
        setSlide(slide === 0 ? slideLenght -1 :slide -1)
    }
     const nextSlide = () =>{
setSlide(slide === slideLenght-1 ? 0 : slide +1 )
     }
  return ( 
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute text-3xl text-white top-[50%] cursor-pointer left-8 '/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute text-3xl text-white top-[50%] cursor-pointer right-8 ' />
      {sliderData.map((item,index)=>(
        <div className={index === slide ? "opacity-100":"opacity-0"} key={index}>
            {index === slide && <img src={item.url} />}
        </div>
      ))}
    </div>
  )
}

export default Carousel

import React from 'react'

const SelectCard = ({bg,text}) => {
  return (
    <div className="relative">
        <img className='w-full h-full object-cover' src={bg} alt="Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
          <p className="left-4 bottom-4 absolute font-bold text-white text-xl ">  {text}</p>
        </div>

      </div>
  )
}

export default SelectCard

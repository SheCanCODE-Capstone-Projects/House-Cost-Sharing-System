import React from 'react'
import './house.css'

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
const House = ({ house }) => {
  const {image, type, Location, address, bedrooms, bathrooms, surface, price} = house;
  return (
    <div className='bg-black text-white border border-orange-400 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ml-10 mr-10 shadow-md' id='house-list'>
      <img className='mb-8' src={image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-black rounded-full text-orange-500 px-3'>{type}</div>
        <div className='bg-white rounded-full text-orange-500 px-3'>{Location}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-400 gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>
            {bedrooms}
          </div>
        </div>
        <div className='flex items-center text-gray-400 gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>
            {bathrooms}
          </div>
        </div>
        <div className='flex items-center text-gray-400 gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>
            {surface}
          </div>
        </div>
      </div>
      <div className='text-lg font-semibold text-white mb-4'>{price}</div>
    </div>
  )
}

export default House
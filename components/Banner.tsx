import React from 'react'
import Slider from './swiper'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import Search from './Search';



const Banner = () => {
  return (
    <div className="container bg-white mx-auto px-6 pt-16">
      <div className="flex flex-col lg:flex-row  xl:flex-row items-center lg:items-start ">
        {/* Text Section */}
        <div className='flex  basis-1/2 justify-center items-center lg:h-[32rem] xl:h-[32rem] lg:px-8 xl:px-8'>
          <div className="flex-1 text-cente lg:text-left mb-6 lg:mb-0">
            <h1 className="lg:text-4xl xl:text-4xl text-3xl text-center lg:text-start xl:text-start leading-10 font-bold text-gray-900">Unlock the <span className='text-blue-400'>Door</span> to Your <br /> <span className='text-blue-400'>Future</span>with Us.</h1>
            <p className="mt-4 lg:pr-10 text-gray-600 px-8 lg:px-0 xl:px-0 leading-6 text-center lg:text-start xl:text-start">
              From stunning houses to chic apartments, we have the perfect home for you. Start your journey to homeownership today.
            </p>
            <div className="flex gap-4 mt-4 py-2 justify-center items-cente text-gray-400 lg:justify-start ">
              <div className='flex border border-blue-300 max-w-xs px-4 py-2 gap-2  rounded-lg'>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-6 h-6 text-gray-500" />
              </a>
              |
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-gray-500" />
              </a>
              |
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook className="w-6 h-6 text-gray-500" />
              </a>
              </div>
            </div>

          </div>
        </div>

        {/* Slider Section */}
        <Slider />
        {/* End Slider Section */}

      </div>

    <Search />
    </div>

  )
}

export default Banner
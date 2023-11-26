import React from 'react'
import { FaReddit , FaFacebook} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { logo_dark, logo_light } from '../assets';

const Footer = () => {
  return (
    <div>
<footer className="">
    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
    <div className="hidden sm:block">
          <img src={logo_dark} alt="" className="h-8 dark:hidden" />
          <img src={logo_light} alt="" className="h-8 hidden dark:block" />

          
        </div>

        <p className="text-[1.1rem] sm:text-[1.25rem] text-blog-black-300 dark:text-blog-white-200 text-center">© Copyright 2021. All Rights Reserved.</p>

        <div className="flex -mx-2">
            <a href="#" className="mx-2 text-blog-black-300  hover:text-gray-600 dark:text-blog-white-200  transition-colors duration-300 dark:hover:text-gray-400" aria-label="Reddit">
                <FaReddit 
                size={30}/>
            </a>

            <a href="#" className="mx-2 text-blog-black-300  hover:text-gray-600 dark:text-blog-white-200 dark:hover:text-gray-400 transition-colors duration-300 " aria-label="Facebook">
                <FaFacebook 
                 size={30}/>
            </a>

            <a href="#" className="mx-2 text-blog-black-300  hover:text-gray-600 dark:text-blog-white-200 dark:hover:text-gray-400 transition-colors duration-300 " aria-label="Twitter">
                <FaXTwitter 
                 size={30}/>
                
            </a>
        </div>
    </div>
</footer>

    </div>
  )
}

export default Footer
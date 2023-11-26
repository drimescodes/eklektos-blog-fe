import React from 'react'
import { FaReddit , FaFacebook} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { logo_dark, logo_light } from '../assets';

const Footer = () => {
  return (
    <div>
<footer className="">
    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
    <div className="">
          <img src={logo_dark} alt="" className="h-8 dark:hidden" />
          <img src={logo_light} alt="" className="h-8 hidden dark:block" />

          
        </div>

        <p className="text-[1.25rem] text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

        <div className="flex -mx-2">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                <FaReddit 
                size={30}/>
            </a>

            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <FaFacebook 
                 size={30}/>
            </a>

            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
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
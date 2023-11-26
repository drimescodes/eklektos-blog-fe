import { logo_dark, logo_light } from "../assets";
import Switcher from "./Switcher";
// import {HiBars3} from 'react-icons/hi'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(true);
  };
  const handleClick1 = () => {
    setToggle(false);
  };

  return (
    <div className="w-full sticky top-[-2px] z-50 shadow-lg theme">
      <div className="max-w-full w-[90%] m-auto flex justify-between items-center py-4  ">
        <div className="">
          <img src={logo_dark} alt="" className="h-8 dark:hidden" />
          <img src={logo_light} alt="" className="h-8 hidden dark:block" />

          
        </div>



        <div className="flex gap-1 sm:gap-6 items-center">
        <div className="hidden  lg:flex gap-6 items-center">
        <ul className=" flex gap-6">
           <Link to="/blog"><li className="transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">Blog</li></Link> 
           <Link to="/project"><li className="transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">Project</li></Link> 
            <Link to={"/about"}><li className="transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">About</li></Link>
            <Link to={"/newsLetter"}><li className="transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">NewsLetter</li></Link>
          </ul>
          {/* <div className="block px-4 py-2 rounded-md bg-white dark:bg-black font-semibold">
            <Switcher />
          </div> */}
          

        </div>

        <div className="lg:hidden">
          {toggle ? (
            <RiCloseLine size={30} onClick={handleClick1} className="cursor-pointer"/>
          ) 
          : (
            
            <RiMenu3Line
              className="cursor-pointer"
              onClick={handleClick}
              size={30}
            />
          )}


        </div>

        <div className=" pl-2 py-2  font-semibold ">
            <Switcher />
          </div>
          </div>
      </div>

      <div
        className={`bg-blog-white-200 dark:bg-blog-blue-200 text-blog-black-300 dark:text-blog-white-200 absolute z-10 p-4  w-full px-8 lg:hidden transform transition-all duration-500 ease-in-out ${toggle ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul>
        <Link to="/blog"><li className="p-4  font-bold transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">Blog</li></Link> 
           <Link to="/project"><li className="p-4  font-bold transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">Project</li></Link> 
            <Link to={"/about"}><li className="p-4  font-bold transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">About</li></Link>
            <Link to={"/newsLetter"}><li className="p-4  font-bold transition-colors duration-300 transform  hover:text-blog-blue-500 dark:hover:text-blog-white-100 hover:underline">NewsLetter</li></Link>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
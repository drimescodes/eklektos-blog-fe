import { logo_dark, logo_light } from "../assets";
import Switcher from "./Switcher";
// import {HiBars3} from 'react-icons/hi'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

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
            <li>Blog</li>
            <li>Project</li>
            <li>About</li>
            <li>NewsLetter</li>
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
          <li className="p-4  font-bold">Home</li>
          <li className="p-4 font-bold">Rate a Client</li>
          <li className="p-4  font-bold">Rate a Freelancer</li>
          <li className="p-4 font-bold">Log in</li>
        </ul>
        <div className="my-4">
          <button className="px-4 py-2 rounded-md bg-[#1A906B] font-bold">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    // -------------------menu item code----------
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (menuIndex) => {
      setIsHovered(menuIndex);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(null);
    };
    // -------------------menu item code----------
    const [topbar,set_topbar]=useState(false);

    useEffect(()=>{
       window.addEventListener('scroll',()=>{
              if(window.scrollY>250){
                set_topbar(true)
              }else{
                set_topbar(false)
              }
         })
    },[])
  return (
   <section className='w-full px-[150px] font-poppins bg-[#F6F6F6]'>
    {/* -----------------------subheader-------------------- */}
        <div className="subheader flex justify-between items-center py-[20px]">
        <div className="logo">
            <img src="https://htmlbeans.com/html/schon/images/mt-logo.png" alt="" />
        </div>
        <div className="search w-[30%]">
       <div className="flex rounded-md border-2 border-[#EED24C] overflow-hidden w-full">
  <input type="email" placeholder="Search Something..." className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
  <button type="button" className="flex items-center justify-center bg-[#EED24C] px-5">
    <IoSearchSharp className='text-[23px]'/>
  </button>
</div>

        </div>
        <div className="icons flex justify-center items-center gap-[25px]">
          {/* Heart Icon with Badge */}
      <div className="relative cursor-pointer">
        <IoMdHeartEmpty className="text-2xl text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-[500] w-5 h-5 flex items-center justify-center rounded-full">
          1
        </span>
      </div>
      {/* Cart Icon with Badge */}
      <div className="relative cursor-pointer">
        <IoCartOutline className="text-2xl text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-[500] w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
            <div className='flex justify-center items-center gap-[10px] ml-[20px] cursor-pointer'>
                <PiUserBold className="text-2xl text-gray-700" />
                <NavLink>
                    <span className='text-[17px] text-gray-700 font-[500]'>Log In</span>
                </NavLink>
            </div>
        </div>
        </div>
    {/* -----------------------subheader-------------------- */}
    <header className='flex justify-end items-center py-[25px]'>

        <nav>
        <ul className="flex justify-center items-center gap-[30px] relative">
      {/* Home Dropdown */}
      <li
        className="relative text-[17px] font-[500] group"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="#" className="flex items-center text-red-500">
          Home
          <span
            className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
              isHovered === 0 ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown />
          </span>
        </NavLink>
        <ul
          className={`absolute left-0 overflow-hidden bg-white shadow-lg rounded-lg mt-2 w-40 transition-all duration-300 ease-in-out ${
            isHovered === 0 ? "max-h-40 py-2" : "max-h-0"
          }`}
        >
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#" className="text-red-500">
              Home One
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#">Home Two</NavLink>
          </li>
        </ul>
      </li>

      <li className="text-[17px] font-[500]">
        <NavLink to="#">About Us</NavLink>
      </li>

      {/* Products Dropdown */}
      <li
        className="relative text-[17px] font-[500] group"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="#" className="flex items-center">
          Products
          <span
            className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
              isHovered === 1 ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown />
          </span>
        </NavLink>
        <ul
          className={`absolute left-0 overflow-hidden bg-white shadow-lg rounded-lg mt-2 w-40 transition-all duration-300 ease-in-out ${
            isHovered === 1 ? "max-h-40 py-2" : "max-h-0"
          }`}
        >
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#">Product One</NavLink>
          </li>
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#">Product Two</NavLink>
          </li>
        </ul>
      </li>

      <li className="text-[17px] font-[500]">
        <NavLink to="#">Campaign</NavLink>
      </li>
      <li className="text-[17px] font-[500]">
        <NavLink to="#">Blogs</NavLink>
      </li>
      <li className="text-[17px] font-[500]">
        <NavLink to="#">Contact</NavLink>
      </li>
    </ul>
        </nav>
   </header>
   <header
  className={`flex fixed left-0 w-full px-[150px] z-[100] bg-white shadow-lg justify-between items-center py-[30px] transition-all duration-500 ease-in-out transform ${
    topbar
      ? "top-0 opacity-100 translate-y-0"
      : "top-[-120%] opacity-0 translate-y-[-50px]"
  }`}
>
  <div className="logo">
    <img src="https://htmlbeans.com/html/schon/images/mt-logo.png" alt="" />
  </div>
  <nav>
    <ul className="flex justify-center items-center gap-[30px] relative">
      {/* Home Dropdown */}
      <li
        className="relative text-[17px] font-[500] group"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="#" className="flex items-center text-red-500">
          Home
          <span
            className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
              isHovered === 0 ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown />
          </span>
        </NavLink>
        <ul
          className={`absolute left-0 overflow-hidden bg-white shadow-lg rounded-lg mt-2 w-40 transition-all duration-300 ease-in-out ${
            isHovered === 0 ? "max-h-40 py-2" : "max-h-0"
          }`}
        >
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#" className="text-red-500">
              Home One
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#">Home Two</NavLink>
          </li>
        </ul>
      </li>

      <li className="text-[17px] font-[500]">
        <NavLink to="#">About Us</NavLink>
      </li>

      {/* Products Dropdown */}
      <li
        className="relative text-[17px] font-[500] group"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="#" className="flex items-center">
          Products
          <span
            className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
              isHovered === 1 ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown />
          </span>
        </NavLink>
        <ul
          className={`absolute left-0 overflow-hidden bg-white shadow-lg rounded-lg mt-2 w-40 transition-all duration-300 ease-in-out ${
            isHovered === 1 ? "max-h-40 py-2" : "max-h-0"
          }`}
        >
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#">Product One</NavLink>
          </li>
          <li className="px-4 py-2 hover:ml-[10px] transition-all duration-200">
            <NavLink to="#">Product Two</NavLink>
          </li>
        </ul>
      </li>

      <li className="text-[17px] font-[500]">
        <NavLink to="#">Campaign</NavLink>
      </li>
      <li className="text-[17px] font-[500]">
        <NavLink to="#">Blogs</NavLink>
      </li>
      <li className="text-[17px] font-[500]">
        <NavLink to="#">Contact</NavLink>
      </li>
    </ul>
  </nav>
</header>

   </section>
  )
}

export default Header

import React,{useEffect, useState,useRef} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import AuthModal from '../pages/AuthModal'; // Import the modal component
import shopping_img from "../assets/shopping.gif"
import { AiOutlineTruck } from "react-icons/ai";
import {AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { IoMenu, IoClose } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/logo.png"
const Header = () => {
    // -------------------menu item code----------
    const [isHovered, setIsHovered] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Sample Products
    const products = [
      {
        id: 1,
        name: "Mini Fridge Portable Cosmetic Beauty Refrigerator",
        price: 125,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-44-768x768.jpg",
      },
      {
        id: 2,
        name: "Vinova Galaxy Fold 256GB Original Phone",
        price: 350,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-46-768x768.jpg",
      },
      {
        id: 3,
        name: "Mini Fridge Portable Cosmetic Beauty Refrigerator",
        price: 125,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-10-600x600.jpg",
      },
      {
        id: 4,
        name: "Vinova Galaxy Fold 256GB Original Phone",
        price: 350,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-14-600x600.jpg",
      },
      {
        id: 5,
        name: "Mini Fridge Portable Cosmetic Beauty Refrigerator",
        price: 125,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-15-600x600.jpg",
      },
      {
        id: 6,
        name: "Vinova Galaxy Fold 256GB Original Phone",
        price: 350,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-11-600x600.jpg",
      },
      {
        id: 7,
        name: "Vinova Ultra 256GB Original Snapdragon Android Phone",
        price: 120,
        image:
          "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-44-768x768.jpg",
      },
    ];
  
    const total = products.reduce((sum, product) => sum + product.price, 0);
  
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
    // ------------------sidebar--------------
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  // Disable page scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);
// -----------------search-bar-typing-effect------------------
const placeholders = ["Search Something...", "Find Products...", "Explore Categories...", "Discover More..."];
const [placeholder, setPlaceholder] = useState("");
const [index, setIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isTyping, setIsTyping] = useState(true);

useEffect(() => {
  const currentPlaceholder = placeholders[index];
  let timeout;

  if (isTyping) {
    if (charIndex < currentPlaceholder.length) {
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentPlaceholder[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => setIsTyping(false), 1500); // Pause after completing typing
    }
  } else {
    if (charIndex > 0) {
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      setIsTyping(true);
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length); // Move to the next placeholder
    }
  }

  return () => clearTimeout(timeout);
}, [charIndex, isTyping, index, placeholders]);
// --------------------searchign suggestion-------------------
const [search, setSearch] = useState("");
const [showSuggestions, setShowSuggestions] = useState(false);

// Product Data
const [product] = useState([
  {
    id: 1,
    image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-23-600x600.jpg",
    title: "Label 20 RGB Keyboard",
  },
  {
    id: 2,
    image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-23-600x600.jpg",
    title: "Wireless Mouse",
  },
  {
    id: 3,
    image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-36-600x600.jpg",
    title: "Bluetooth Speaker",
  },
  {
    id: 4,
    image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-11-600x600.jpg",
    title: "Compact Cameras",
  },
  {
    id: 5,
    image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/black-5-600x600.jpg",
    title: "5G Smartphone",
  },
]);

// Filtered Suggestions
const filteredProducts = product.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);
// ------------------------login popup--------------------------
const [isModalOpen, setModalOpen] = useState(false);

// --------------user authetication-----------------
const [user, setUser] = useState(null);
const [dropdownVisible, setDropdownVisible] = useState(false);
const navigate = useNavigate();
const dropdownRef = useRef(null);

useEffect(() => {
  // Get user data from localStorage
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }

  // Click outside handler
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

// Handle logout
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setUser(null);
  navigate("/");
};
// -----------------trak-order---------------------------
useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);
// -----------menu----------
const [menuVisible, setMenuVisible] = useState(false);
  return (
   <section className='w-full  font-baji'>
    {/* -----------------MARQUEE------------------ */}
    {/* <section className='px-[10px] py-[10px] hidden bg-red-500 text-white font-[600] xl:flex justify-center items-center font-roboto'>
      <marquee behavior="smooth" direction="">
      T-shirt/Clothing with your brand logo or design? We are delivering worldwide at unbeatable prices. 
      </marquee>
    </section> */}

    <section className='hidden lg:fle px-[20px] font-jost md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[150px] py-[10px] border-b-[1px] border-gray-200 lg:flex justify-between items-center'>
      <ul className='flex justify-center items-center gap-[15px]'>
        <li className='hover:text-blue-500'>
          <NavLink>About Us</NavLink>
        </li>
        <li className='hover:text-blue-500'>
          <NavLink>FAQ</NavLink>
        </li>
        <li className='hover:text-blue-500'>
          <NavLink>Help & Contact</NavLink>
        </li>
      </ul>

     <div className='flex justify-center items-center gap-[20px]'>
     {!user && (
            <li className="text-[17px] font-[500] flex items-center gap-[10px]">
              <NavLink to="/order-tracking" className="flex items-center gap-[8px]" onClick={() => setMenuVisible(false)}>
                <AiOutlineTruck className="text-[23px] text-blue-500" />
                Track Your Order
              </NavLink>
            </li>
          )}

          <div className='flex justify-center items-center gap-[6px] text-blue-500'>
            <FiPhoneCall/>
            <p>(808) 555-0111</p>
          </div>
     </div>

    </section>
    {/* -----------------------subheader-------------------- */}
        <div className="subheader px-[20px] md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[150px] flex justify-between bg-white items-center py-[12px]">
        <NavLink to="/">
        <div className="logo flex justify-center items-center gap-[10px]">
            <img className='w-[60px] ' src={logo} alt="" />
            <p className='text-[28px] font-[600] text-gray-700'>Tech<span className='text-blue-500'>10</span></p>
        </div>
        </NavLink>
        {/* --------------------searching suggestion---------------------- */}
        <div className="search w-full max-w-md lg:flex hidden mx-auto relative">
      {/* Search Input */}
      <div className="flex border-2  border-blue-500 overflow-hidden w-full rounded-md">
        <input
          type="text"
          placeholder={placeholder} // Set animated placeholder
          className="w-full outline-none bg-white text-gray-600 text-[16px] font-[500] px-4 py-3"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(e.target.value.length > 0);
          }}
          onFocus={() => setShowSuggestions(search.length > 0)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        />
        <button type="button" className="flex items-center justify-center outline-none border-none bg-blue-500 text-white px-5">
          <IoSearchSharp className="text-[23px]" />
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div
          className="absolute z-50 bg-white border border-gray-300 mt-1 rounded-md shadow-lg w-full max-h-64 overflow-y-auto thin-scrollbar"
          style={{ top: "100%", left: 0 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover rounded-sm mr-3"
                />
                <span className="text-gray-700 text-sm">{product.title}</span>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 text-sm">No results found</div>
          )}
          <div className="px-4 py-2 text-red-500 text-sm font-medium cursor-pointer hover:underline">
            See all results ({filteredProducts.length})
          </div>
        </div>
      )}
    </div>
    {/* ------------------------------searching suggestion------------- */}
        <div className="icons flex justify-center items-center gap-[25px]">
          {/* Heart Icon with Badge */}
          <NavLink to="/loved-products">
          <div className="relative cursor-pointer">
        <IoMdHeartEmpty className="text-[27px] text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-[500] w-5 h-5 flex items-center justify-center rounded-full">
          1
        </span>
      </div>
          </NavLink>
   
      {/* Cart Icon with Badge */}
 
      <div className="relative z-[10]">
      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
        <IoCartOutline className="text-[27px] text-gray-700" />
        {products.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-[500] w-5 h-5 flex items-center justify-center rounded-full">
            {products.length}
          </span>
        )}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[20%] h-full bg-white shadow-lg border-l transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <AiOutlineClose className="text-xl cursor-pointer" onClick={() => setIsCartOpen(false)} />
        </div>

        {/* Free Shipping Message */}
        {products.length > 0 && (
          <div className="bg-green-100 px-4 py-3 flex items-center">
            <span className="text-green-600 font-semibold text-sm mr-2">
              Congratulations! You've got FREE SHIPPING{" "}
            </span>
            <span className="text-green-600 text-xl">🚚</span>
          </div>
        )}

        {/* Cart Items */}
        <div className="px-4 py-4 flex-1 overflow-y-scroll no-scrollbar space-y-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="flex items-center p-4 border rounded-lg shadow-sm">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-500">1 x ${product.price}</p>
                </div>
                <AiOutlineDelete className="text-gray-500 cursor-pointer hover:text-red-500" title="Remove item" />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg font-semibold">Your cart is empty 🛒</p>
              <p className="text-sm">Start adding products to your cart!</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {products.length > 0 && (
          <div className="border-t p-4 sticky bottom-0 bg-white flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-700">Subtotal</span>
              <span className="text-lg font-bold">${total.toFixed(2)}</span>
            </div>
            <NavLink to="/cart">
              <button className="w-full bg-gray-800 text-white py-2 rounded mb-2 hover:bg-gray-700">View Cart</button>
            </NavLink>
            <NavLink to="/checkout">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Checkout</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
    <div className="relative">
      {/* If user exists, show profile */}
      {user ? (
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            {/* Profile Picture or Initials */}
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
              />
            ) : (
              <div className="flex justify-center items-center bg-indigo-500 text-white rounded-full w-12 h-12 text-2xl font-bold shadow-md">
                {user?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>

          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-56 z-[10000] bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out animate-fade-in">
              <div className="p-4 flex items-center gap-3 border-b border-gray-200">
                {/* Profile Image */}
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  ""
                )}
                <div>
                  <p className="text-gray-800 font-semibold">{user?.name || "User"}</p>
                  <p className="text-gray-500 text-sm">{user?.email || "example@mail.com"}</p>
                </div>
              </div>

              {/* Menu Items */}
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => navigate("/my-account")}
                >
                  My Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => navigate("/settings")}
                >
                  Account Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => navigate("/activity-log")}
                >
                  Activity Log
                </li>
                <li
                  className="px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer font-medium"
                  onClick={handleLogout}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        // Otherwise, show the login button
        <div className="flex justify-center items-center gap-2 cursor-pointer" onClick={() => setModalOpen(true)}>
          <PiUserBold className="text-2xl text-gray-700" />
          <span className="text-[17px] text-gray-700 font-[500]">Log In</span>
        </div>
      )}
    </div>
    <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
        </div>
    {/* -----------------------subheader-------------------- */}
    <div>
      {/* Header */}
      <header className="flex px-[20px] md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[150px] justify-between border-t-[1px] border-b-[1px] border-[#eee] items-center  pt-[10px]  ">
      <div
  
  onClick={toggleSidebar}
>
  <div className="menu flex  px-[10px] xl:px-[25px] py-[9px] xl:py-[12px] justify-center cursor-pointer items-center gap-[15px] text-[15px] xl:text-[18px] font-[500]  rounded-t-[10px] bg-blue-500 text-white">
    <HiOutlineMenu className="text-[22px]" />
    <span>All Categories</span>
  </div>
</div>


    {/* ------------menu----------------------*/}
 {/* Mobile Menu Button */}
      {/* Mobile Menu Button */}
      <div className="text-[28px] cursor-pointer lg:hidden flex" onClick={() => setMenuVisible(true)}>
        <IoMenu />
      </div>

      {/* Sidebar Navigation */}
      <nav
  className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-lg z-50 transform ${
    menuVisible ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-auto lg:shadow-none lg:bg-transparent flex flex-col`}
>
        {/* Close Button */}
        <div className="p-4 flex justify-end lg:hidden">
          <IoClose className="text-[28px] cursor-pointer" onClick={() => setMenuVisible(false)} />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 p-6 lg:p-0 flex-grow">
          <li className="text-[17px] font-[500]">
            <NavLink to="/" onClick={() => setMenuVisible(false)}>Home</NavLink>
          </li>
          <li className="text-[17px] font-[500]">
            <NavLink to="/products" onClick={() => setMenuVisible(false)}>Products</NavLink>
          </li>
          <li className="text-[17px] font-[500]">
            <NavLink to="/blogs" onClick={() => setMenuVisible(false)}>Blogs</NavLink>
          </li>
          <li className="text-[17px] font-[500]">
            <NavLink to="/contact" onClick={() => setMenuVisible(false)}>Contact</NavLink>
          </li>
          <li className="text-[17px] font-[500]">
            <NavLink to="/contact" onClick={() => setMenuVisible(false)}>🔥Hot Deals</NavLink>
          </li>
        </ul>

        {/* Social Media Icons with Waving Animation */}
        <div className="relative  lg:hidden flex justify-center items-center p-6">
          {/* Animated Waving Background */}
          <div className="absolute w-40 h-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-70 animate-[wave_3s_infinite_ease-in-out]"></div>

          {/* Social Media Icons */}
          <div className="flex gap-5 relative z-10 animate-bounce">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook className="text-[28px] text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <AiFillYoutube className="text-[28px] text-red-600 hover:text-red-800 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-[28px] text-pink-600 hover:text-pink-800 transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {menuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" onClick={() => setMenuVisible(false)}></div>
      )}

      {/* Tailwind Keyframes for Waving Animation */}
      <style>
        {`
          @keyframes wave {
            0% { transform: translateX(-10px) rotate(0deg); }
            25% { transform: translateX(10px) rotate(2deg); }
            50% { transform: translateX(-10px) rotate(0deg); }
            75% { transform: translateX(10px) rotate(-2deg); }
            100% { transform: translateX(-10px) rotate(0deg); }
          }
        `}
      </style>
    {/* ------------------------------------menu--------------- */}
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto font-roboto">
          <h2 className="text-[20px] font-[600] font-jost mb-4">Categories</h2>
          <ul className="space-y-2">
            {/* Desktop */}
            <li className="border-b pb-2 flex justify-between items-center font-medium text-gray-700 cursor-pointer">
              Desktop
            </li>

            {/* Laptop */}
            <li className="border-b pb-2">
              <div
                className="flex justify-between items-center font-medium text-gray-700 cursor-pointer"
                onClick={() => toggleSubmenu(1)}
              >
                <span>Laptop</span>
                {openSubmenu === 1 ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openSubmenu === 1 ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="pl-6 mt-2 space-y-2">
                  <li className="text-gray-600">All Laptop</li>
                  <li className="text-gray-600">Gaming Laptop</li>
                  <li className="text-gray-600">Premium Ultrabook</li>
                  <li className="text-gray-600">Laptop Bag</li>
                  <li className="text-gray-600">Laptop Accessories</li>
                </ul>
              </div>
            </li>

            {/* Component */}
            <li className="border-b pb-2">
              <div
                className="flex justify-between items-center font-medium text-gray-700 cursor-pointer"
                onClick={() => toggleSubmenu(2)}
              >
                <span>Component</span>
                {openSubmenu === 2 ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openSubmenu === 2 ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="pl-6 mt-2 space-y-2">
                  <li className="text-gray-600">Motherboards</li>
                  <li className="text-gray-600">Processors</li>
                  <li className="text-gray-600">Graphics Cards</li>
                  <li className="text-gray-600">RAM</li>
                  <li className="text-gray-600">Storage</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-[25px] cursor-pointer"
          onClick={toggleSidebar}
        >
          &times;
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
   <header
  className={`flex fixed left-0  w-full px-[150px] z-[100] bg-white shadow-lg justify-between items-center py-[17px] transition-all duration-500 ease-in-out transform ${
    topbar
      ? "top-0 opacity-100 translate-y-0"
      : "top-[-120%] opacity-0 translate-y-[-50px]"
  }`}
>
<div className="logo flex justify-center items-center gap-[10px]">
            <img className='w-[60px] ' src={logo} alt="" />
            <p className='text-[28px] font-[600] text-gray-700'>Tech<span className='text-blue-500'>10</span></p>
        </div>
  <nav>
    <ul className="flex justify-center items-center gap-[30px] relative">
      {/* Home Dropdown */}
      <li className="text-[17px] font-[500]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[17px] font-[500]">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="text-[17px] font-[500]">
                <NavLink to="/products">Products</NavLink>
              </li>
              {/* Products Dropdown */}
              {/* <li
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
              </li> */}
        
              {/* <li className="text-[17px] font-[500]">
                <NavLink to="/campigns">Campaign</NavLink>
              </li> */}
              <li className="text-[17px] font-[500]">
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li className="text-[17px] font-[500]">
                <NavLink to="/contact">Contact</NavLink>
              </li>
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
    </ul>
  </nav>
</header>

   </section>
  )
}

export default Header

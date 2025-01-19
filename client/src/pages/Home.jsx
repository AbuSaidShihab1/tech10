import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import "aos/dist/aos.css";
import AOS from "aos";
import {
    FaLaptop,
    FaHome,
    FaCouch,
    FaMale,
    FaHeadphones,
    FaShoppingCart,
    FaLeaf,
  } from "react-icons/fa";
import Collections from '../components/home/Collections';
import Homeproduct from '../components/home/Homeproduct';
import Topbrand from '../components/home/Topbrand';
import Flashsell from '../components/home/Flashsell';
const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          easing: "ease-in-out", // Easing function
          once: true, // Whether the animation should happen only once
        });
      }, []);
      const images = [
        "https://htmlbeans.com/html/schon/images/sliders/img01.jpg",
        "https://htmlbeans.com/html/schon/images/sliders/img02.jpg",
        "https://htmlbeans.com/html/schon/images/sliders/img03.jpg",
        "https://htmlbeans.com/html/schon/images/sliders/img04.jpg",
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [isAnimating, setIsAnimating] = useState(false);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIsAnimating(true); // Start the animation (hide old image and show new one)
          setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsAnimating(false); // End the animation after the image change
          }, 1000); // Animation duration for hiding the image
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval);
      }, [images.length]);
  return (
    <section>
        <Header/>
        {/* ----------------------hero section---------------------- */}
        <section className='w-full font-jost px-[150px]  h-[70vh] flex justify-center gap-[30px]'>
        <div className=" bg-white p-4 border-[1px] h-full border-border1 w-[30%]">
        <ul className='px-[10px]'>
        {/* Sidebar Item */}
        <li className="flex items-center space-x-3 border-b py-[13px] cursor-pointer  group hover:pl-[10px] transition-all duration-200 border-border1">
          <FaLaptop className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Computers & Laptops</span>
        </li>
        <li className="flex items-center space-x-3 py-2  cursor-pointer border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaHome className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Home Appliance</span>
        </li>
        <li className="flex items-center space-x-3 py-[13px] cursor-pointer border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaCouch className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Indoor Furniture</span>
        </li>
        <li className="flex items-center space-x-3 py-[13px] cursor-pointer border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaMale className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Men Watches</span>
        </li>
        <li className="flex items-center space-x-3 py-[13px] cursor-pointer border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaCouch className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Furniture</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer  py-[13px] border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaHeadphones className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Head Phone</span>
        </li>
        <li className="flex items-center space-x-3 py-[13px] cursor-pointer border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaShoppingCart className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Groceries</span>
        </li>
        <li className="flex items-center space-x-3 py-[13px] cursor-pointer border-b border-border1 group hover:pl-[10px] transition-all duration-200">
          <FaLeaf className="text-gray-600 text-[20px] group-hover:text-red-500" />
          <span className="text-gray-800 text-[18px] font-[500] group-hover:text-red-500">Health & Beauty</span>
        </li>
      </ul>
    </div>
             {/* ----------------------banner----------------------- */}
             <div className='w-[70%] h-full pt-[50px] font-poppins'>
             <div
      className={`w-full h-full flex justify-center items-center p-[20px] rounded-[5px] bg-cover bg-no-repeat transition-all duration-1000 ${
        isAnimating ? "image-hide" : "image-show"
      }`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="text-center" data-aos="fade-down">
        <h1 className="text-[40px] font-poppins font-[600] mb-[10px]">
          Discover Exclusive Deals Today!
        </h1>
        <p className="text-red-500 font-[500] text-[25px] mb-[20px]">
          Limited-Time Offers Await
        </p>
        <button className="px-[30px] py-[12px] bg-black text-white cursor-pointer rounded-[5px] relative before:absolute before:top-0 before:left-0 before:w-0 overflow-hidden before:h-[50%] before:bg-red-500 hover:before:w-full hover:before:transition-all hover:before:duration-200 before:z-[-1] z-[1] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[50%] after:bg-red-500 after:z-[-1] after:transition-all after:duration-200 hover:after:w-full"> 
          Shop Now
        </button>
      </div>
    </div>
             </div>
             {/* ----------------------banner----------------------- */}
        </section>
        {/* ----------------------hero section---------------------- */}
        <Collections/>
        <Homeproduct/>
        <Topbrand/>
        <Flashsell/>
    </section>
  )
}

export default Home

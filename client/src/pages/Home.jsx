import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Category from '../components/home/Category'
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
import Bestseller from "../components/home/Bestseller"
import Newarrival from "../components/home/Newarrival"
import Hblog from "../components/home/Hblog"
import Footer from '../components/Footer';
import Subscribebox from '../components/home/Subscribebox';
import NewsletterSection from '../components/home/NewsletterSection ';
import Topcategoty from "../components/home/Topcategory"
import { motion, AnimatePresence } from "framer-motion";



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: "ease-in-out", // Easing function
      once: true, // Whether the animation should happen only once
    });
  }, []);
  const [current, setCurrent] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = [
    {
      image: "https://template.fullstackdeveloper.co.il/stowaa/assets/images/categories/xcategory_1.png.pagespeed.ic.ntdeefcB00.webp",
      title: "Super Fast Performance",
      description:
        "We have prepared special discounts for you on electronic products. Don't miss these opportunities...",
    },
    {
      image: "https://html.mediacity.co.in/offex/assets/images/home_page_4/banner/03.png",
      title: "Capture Every Moment",
      description:
        "Get high-quality cameras at discounted prices. Limited time offer!",
    },
    {
      image: "https://html.mediacity.co.in/offex/assets/images/home_page_4/banner/04.png",
      title: "Best Deals on Electronics",
      description:
        "Exclusive discounts on top electronic brands. Shop now and save big!",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <section>
        <Header/>
               {/* ----------------------banner----------------------- */}
              <section className=' lg:px-[50px] font-baji xl:px-[80px] 2xl:px-[150px] py-[20px]'>
                 <section className='w-full h-[50vh] flex justify-center items-center gap-[20px]'>
                     <div className='w-[65%] h-[50vh]'>
                     <div className="relative w-full h-full  overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
{slides.map((slide, index) => (
  <div
    key={index}
    className="flex min-w-full items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-[70px] overflow-hidden p-8 rounded-xl text-white"
  >
    <div className="w-1/2 space-y-4">
      <span className="text-sm font-semibold">Exclusive Offer</span>
      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-md ml-2">
        -20% Off
      </span>
      <h2 className="text-3xl font-bold">{slide.title}</h2>
      <p className="text-gray-100">{slide.description}</p>
      <button className="mt-4 px-[30px] py-[12px] bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200">
        Shop Now →
      </button>
    </div>
    <div className="w-1/2 flex justify-end">
      <img src={slide.image} alt="Product" width={300} height={200} className="drop-shadow-lg" />
    </div>
  </div>
))}

      </div>
      <div className="space-x-2  absolute bottom-0 left-0 pb-[20px] w-full flex justify-center items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={` rounded-full ${
              index === currentIndex ? "bg-orange-300  h-2 w-6" : "bg-white h-2 w-2"
            }`}
          ></button>
        ))}
      </div>
    </div>
                     </div>
                     <div className='w-[35%] h-full rounded-[10px] bg-[#F7F7F7] bg-[url("https://qx-elesa-demo2.myshopify.com/cdn/shop/files/banner-1.jpg?v=1717068903&width=1920")] bg-cover bg-no-repeat'>

                     </div>
                 </section>
              </section>
             {/* ----------------------banner----------------------- */}
        <Category/>
        <Bestseller/>
        <Topcategoty/>
        <Flashsell/>
        {/* -------------------------------new ARRIVAL------------------------------------------ */}
        <section className=' px-[20px] lg:px-[50px] font-baji xl:px-[80px] 2xl:px-[150px] py-[20px] w-full flex justify-center  gap-[20px]'>
        <div className="bg-[#fef6ed] w-[50%]  rounded-[5px] pl-[50px] flex flex-col md:flex-row items-center ">
      <div className="flex-1 text-center p-6 md:text-left">
        <p className="text-red-500 font-semibold">Hurry Up!</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          Time to Upgrade: Smart Watches Sale
        </h2>
        <p className="text-gray-600 mt-2">Unleash Smart Savings Today!</p>
        <a
          href="#"
          className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg mt-4 font-medium hover:bg-orange-600 transition"
        >
          Shop Now &rarr;
        </a>
      </div>
      <div className="flex-1 flex justify-end mt-6 md:mt-0 pt-[20px]">
        <img
          src="https://vue.envytheme.com/tuan/_nuxt/offer-4.Daxxxo-I.png"
          alt="Smart Watches Sale"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
    <div className="bg-[#fef6ed] w-[50%]  rounded-[5px] flex pl-[50px] flex-col md:flex-row items-center ">
      <div className="flex-1 text-center p-6 md:text-left">
        <p className="text-red-500 font-semibold">Hurry Up!</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          Time to Upgrade: Smart Watches Sale
        </h2>
        <p className="text-gray-600 mt-2">Unleash Smart Savings Today!</p>
        <a
          href="#"
          className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg mt-4 font-medium hover:bg-orange-600 transition"
        >
          Shop Now &rarr;
        </a>
      </div>
      <div className="flex-1 flex justify-end mt-6 md:mt-0 pt-[20px]">
        <img
          src="https://vue.envytheme.com/tuan/_nuxt/offer-5.Bqtmv4va.png"
          alt="Smart Watches Sale"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
        </section>
        <Newarrival/>
        <Topbrand/>
        <Hblog/>
        <NewsletterSection/>
        <Footer/>
    </section>
  )
}

export default Home

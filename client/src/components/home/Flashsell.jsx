import React,{useRef, useState} from 'react'
import { GoArrowRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { ImEye } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Pagination,Autoplay} from 'swiper/modules';
const Flashsell = () => {
    const swiperRef = useRef(null);
    const products = [
        { id: 1, image: "https://htmlbeans.com/html/schon/images/products/img01.jpg", title: "Puff Chair", price: "€ 287,00", rating: 4.5 },
        { id: 2, image: "https://htmlbeans.com/html/schon/images/products/img02.jpg", title: "Lounge Chair", price: "€ 150,00", rating: 4 },
        { id: 3, image: "https://htmlbeans.com/html/schon/images/products/img03.jpg", title: "Modern Sofa", price: "€ 399,00", rating: 5 },
        { id: 4, image: "https://htmlbeans.com/html/schon/images/products/img04.jpg", title: "Luxury Bed", price: "€ 549,00", rating: 4.5 },
        { id: 5, image: "https://htmlbeans.com/html/schon/images/products/img05.jpg", title: "Coffee Table", price: "€ 120,00", rating: 4 },
        { id: 6, image: "https://htmlbeans.com/html/schon/images/products/img06.jpg", title: "Office Desk", price: "€ 250,00", rating: 3.5 },
        { id: 7, image: "https://htmlbeans.com/html/schon/images/products/img07.jpg", title: "Armchair", price: "€ 180,00", rating: 4 },
        { id: 8, image: "https://htmlbeans.com/html/schon/images/products/img08.jpg", title: "Dining Set", price: "€ 700,00", rating: 5 },
        { id: 9, image: "https://htmlbeans.com/html/schon/images/products/img09.jpg", title: "TV Unit", price: "€ 450,00", rating: 4 },
        { id: 10, image: "https://htmlbeans.com/html/schon/images/products/img10.jpg", title: "Bookshelf", price: "€ 130,00", rating: 4.5 },
        { id: 4, image: "https://htmlbeans.com/html/schon/images/products/img04.jpg", title: "Luxury Bed", price: "€ 549,00", rating: 4.5 },
        { id: 5, image: "https://htmlbeans.com/html/schon/images/products/img05.jpg", title: "Coffee Table", price: "€ 120,00", rating: 4 },
        { id: 6, image: "https://htmlbeans.com/html/schon/images/products/img06.jpg", title: "Office Desk", price: "€ 250,00", rating: 3.5 },
        { id: 7, image: "https://htmlbeans.com/html/schon/images/products/img07.jpg", title: "Armchair", price: "€ 180,00", rating: 4 },
        { id: 8, image: "https://htmlbeans.com/html/schon/images/products/img08.jpg", title: "Dining Set", price: "€ 700,00", rating: 5 },
        { id: 9, image: "https://htmlbeans.com/html/schon/images/products/img09.jpg", title: "TV Unit", price: "€ 450,00", rating: 4 },
        { id: 10, image: "https://htmlbeans.com/html/schon/images/products/img10.jpg", title: "Bookshelf", price: "€ 130,00", rating: 4.5 },
        { id: 10, image: "https://htmlbeans.com/html/schon/images/products/img10.jpg", title: "Bookshelf", price: "€ 130,00", rating: 4.5 },
      
    ];

    const handlePrev = () => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slidePrev();
        }
      };
    
      const handleNext = () => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideNext();
        }
      };
    
  
  return (
    <section className='px-[150px] pb-[50px] font-poppins'>
   <div className='flex justify-between items-center'>
            <h2 className='flex justify-center items-center gap-[3px] text-heading font-[500]'>Flash Sell <img src="https://demo.futureitlab.com/xura/assets/images/icon/fire.png" alt="" /></h2>
             <NavLink className="flex items-center gap-[5px] text-[15px] text-gray-700 font-[500]">
                <span>View All</span>
                <GoArrowRight className='text-[20px]'/>
             </NavLink>
        </div>
        {/* ------------------------product--------------------- */}
          <section className='mt-[70px]'>
          <div className="relative">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
        modules={[Autoplay]}
        ref={swiperRef}
        navigation={false}  // Disable default navigation since we're using custom buttons
      >
        {products.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="relative group cursor-pointer">
              <div className="relative">
                <div className="w-full flex justify-center items-center overflow-hidden">
                  <img
                    src={data.image}
                    alt=""
                    className="transition-transform duration-500 ease-in-out transform group-hover:translate-x-[20%]"
                  />
                </div>
                {/* --------------box-------------- */}
               <div className='w-full flex justify-center items-center absolute bottom-[-10%] left-0'>
               <div className="icon_box w-[80%] m-auto flex justify-center items-center bg-white  border-[1px] border-border1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform group-hover:translate-y-0">
                  <div className="flex p-[10px] w-full  justify-center items-center gap-[5px]">
                    <HiOutlineShoppingBag className="text-[20px] transition-all duration-200 hover:text-red-500 text-gray-700" />
                    <span className="text-[14px] text-gray-500 transition-all duration-200 hover:text-red-500">add to cart</span>
                  </div>
                  <div className="px-[15px] py-[10px] group cursor-pointer border-l-[1px] transition-all duration-200 border-border1">
                    <IoMdHeartEmpty className="text-[20px] hover:text-red-500 text-gray-700" />
                  </div>
                  <div className="px-[15px] py-[10px] flex justify-center group items-center text-center cursor-pointer border-l-[1px] border-border1">
                    <ImEye className="text-[20px] hover:text-red-500 transition-all duration-200 text-gray-700" />
                  </div>
                </div>
               </div>
                {/* --------------box-------------- */}
              </div>
              {/* Product Details */}
              <span className="absolute top-0 left-0 px-[10px] py-[3px] text-[14px] bg-black text-white font-roboto">New</span>
              <div className="text-center mt-[5px]">
                <div className="star flex justify-center items-center gap-1 mb-[7px] text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                </div>
                <h3 className="text-[16px] font-semibold text-[#757575] hover:text-red-500 cursor-pointer">{data.title}</h3>
                <p className="text-gray-700 font-bold text-[15px] mt-[4px]">€ {data.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons with React Icons */}
      <div
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 swiper-button-prev text-gray-700 cursor-pointer hover:text-indigo-600"
      >
        <FaChevronLeft size={24} />
      </div>
      <div
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 swiper-button-next text-gray-700 cursor-pointer hover:text-indigo-600"
      >
        <FaChevronRight size={24} />
      </div>
    </div>
          </section>
        {/* --------------------------product-------------------- */}
        </section>
  )
}

export default Flashsell

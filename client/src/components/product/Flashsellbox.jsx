import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgHeart } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";

const Flashsellbox = ({ data, rating, flashSaleEnd }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [currentRating, setCurrentRating] = useState(rating);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    const progressPercentage = (data.sold / data.total) * 100;

    function calculateTimeLeft() {
        const difference = new Date(flashSaleEnd) - new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleMouseEnter = (value) => setHoverRating(value);
    const handleMouseLeave = () => setHoverRating(0);
    const handleClick = (value) => setCurrentRating(value);
    
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= currentRating) {
                stars.push(<FaStar key={i} className="text-orange-500" />);
            } else if (i - 0.5 <= currentRating && i - 1 >= currentRating) {
                stars.push(<FaStarHalfAlt key={i} className="text-orange-500" />);
            } else {
                stars.push(
                    <FaRegStar
                        key={i}
                        className="text-gray-300"
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(i)}
                    />
                );
            }
        }
        return stars;
    };

    return (
        <div className="border-[1px] border-[#eee] cursor-pointer px-[10px] py-[20px] rounded-[5px] group hover:shadow-md transition-all duration-200 flex flex-wrap">
            {/* Left Side */}
            <div className="w-full sm:w-[50%] border-r-[1px] border-[#eee] sm:pr-[20px]">
                <div className="w-auto relative flex justify-center items-center overflow-hidden">
                    <img className="w-auto h-[200px] block group-hover:hidden" src={`http://localhost:8080/images/${data?.images[0]}`} alt="" />
                    <img className="w-auto h-[200px] hidden group-hover:block" src={`http://localhost:8080/images/${data?.images[1]}`} alt="" />
                </div>
                <div className="px-[20px] py-[10px]">
                    <h4 className="font-[500] text-title2 mb-[5px]">{data?.category}</h4>
                    <h1 className="text-[18px] font-[500] text-title">{data?.title}</h1>
                    <h2 className="flex justify-start items-center gap-[5px] mt-[8px]">{renderStars()} {data.rating} <span>({data.reviews})</span></h2>
                    <div className="flex justify-start items-center mt-[8px] gap-[10px]">
                        <h2 className="text-[20px] font-[600]">৳{data?.price}</h2>
                        <h3 className="text-[18px] font-[500] text-title2 line-through">৳{data?.oldPrice}</h3>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full sm:w-[50%] sm:pl-[20px]">
            <div className="flex items-center gap-[10px] text-[14px] mb-[10px]">
      <span className="text-green-600 font-[600] flex items-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        100 Products in stock
      </span>
    </div>
    <ul className="text-[14px] text-gray-500 mb-[20px]">
      <li>✔ 1 Years Warranty</li>
      <li>✔ Genuine Guaranteed</li>
      <li>✔ Free Shipping From USA</li>
    </ul>
                <div className="grid grid-cols-4 gap-[5px] mb-[15px] text-center">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="px-[4px] py-[10px] bg-gray-100 rounded-md">
                            <h2 className="text-[20px] font-[600]">{value}</h2>
                            <span className="text-[12px]">{unit}</span>
                        </div>
                    ))}
                </div>
                {/* Progress Bar */}
                 {/* Progress Bar */}
    <div className="relative h-[8px] bg-gray-200 rounded-full mb-[10px]">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
    <div className="text-[12px] text-gray-500">
      {progressPercentage.toFixed(0)}% SOLD - AVAILABLE:{" "}
      {data.total - data.sold}
    </div>
    <button className="w-full mt-[15px] py-[10px] bg-blue-500 text-white font-[600] rounded-md hover:bg-blue-600 transition-all">
      ADD TO CART
    </button>
    <div className="flex justify-between mt-[10px] text-[14px] text-gray-500">
      <span className="cursor-pointer">Quick View</span>
      <span className="cursor-pointer">Compare</span>
    </div>
            </div>
        </div>
    );
};

export default Flashsellbox;

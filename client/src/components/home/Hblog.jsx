import React, { useState } from 'react'
import blog_empty from "../../assets/blog_empty.png"
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
import { CgArrowTopRight } from "react-icons/cg";
import Header from '../Header';
const Hblog = () => {
    const [blogs,set_blogs]=useState([
            {
                id:1,
                image:"https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:2,
                image:"https://images.pexels.com/photos/1276531/pexels-photo-1276531.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:3,
                image:"https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:4,
                image:"https://images.pexels.com/photos/2422556/pexels-photo-2422556.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:5,
                image:"https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:6,
                image:"https://images.pexels.com/photos/30796671/pexels-photo-30796671/free-photo-of-close-up-of-hand-holding-microphone-accessory.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:7,
                image:"https://images.pexels.com/photos/30759633/pexels-photo-30759633/free-photo-of-top-view-of-a-modern-camera-on-leather-surface.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:8,
                image:"https://images.pexels.com/photos/30758151/pexels-photo-30758151/free-photo-of-modern-folding-drone-on-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:9,
                image:"https://grabit-next.tigerheck.com/assets/img/blog/3.jpg",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:10,
                image:"https://grabit-next.tigerheck.com/assets/img/blog/4.jpg",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:11,
                image:"https://grabit-next.tigerheck.com/assets/img/blog/5.jpg",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               },
               {
                id:12,
                image:"https://grabit-next.tigerheck.com/assets/img/blog/6.jpg",
                date:"June 30,2022",
                category:"Orange",
                title:"Marketing Guide: 5 Steps to Success to way.",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
               }
    
        ])
  
  return (
    <section className='font-baji'>
      <div className='px-[150px] pt-[70px] pb-[20px] flex justify-between items-center'>
        <h1 className='text-title text-heading font-[600]'>Our Blogs</h1>
        <NavLink className="flex justify-start items-center gap-[10px] text-title hover:text-brand_color group">
                    <span className="transform transition-transform duration-300 group-hover:animate-bounce-custom">
                      View All
                    </span>
                    <CgArrowTopRight className="transform transition-transform duration-300 group-hover:animate-bounce-custom" />
                  </NavLink>
      </div>
        {/* -------------------hero section--------------------- */}
        {/* -----------------------blogs--------------------- */}
        <section className='px-[150px]  pb-[70px]'>
      {blogs?.length > 0 ? (
        <>
          <section className=" grid grid-cols-3 gap-[40px]">
            {blogs.slice(0,3).map((data) => (
              <div className="group" key={data.id}>
                <div className="overflow-hidden rounded-[5px] cursor-pointer">
                  <NavLink>
                    <img
                      className="group-hover:scale-[1.1] w-full h-[350px] group-hover:rotate-[3deg] transition-all duration-500 rounded-[5px]"
                      src={data?.image}
                      alt=""
                    />
                  </NavLink>
                </div>
                <div className="pt-[20px]">
                  <div className="flex justify-start gap-[5px] mb-[10px] text-[#999] text-[14px] items-center">
                    <p>{data.date}</p>
                    <p>-</p>
                    <p>{data.category}</p>
                  </div>
                  <h1 className="text-[22px] mb-[15px] font-[500] text-title cursor-pointer hover:text-black transition-all duration-150">
                    {data.title}
                  </h1>
                  <p className="text-title2 leading-[25px] mb-[15px]">
                    {data.description}
                  </p>
                  <NavLink className="flex justify-start items-center gap-[10px] text-title hover:text-brand_color group">
                    <span className="transform transition-transform duration-300 group-hover:animate-bounce-custom">
                      Read more
                    </span>
                    <CgArrowTopRight className="transform transition-transform duration-300 group-hover:animate-bounce-custom" />
                  </NavLink>
                </div>
              </div>
            ))}
          </section>

        </>
      ) : (
        <section className="flex justify-center items-center py-[100px] flex-col">
          <img
            className="w-[250px]"
            src={blog_empty}
            alt="Empty Blogs"
          />
          <h1 className="text-[22px] font-[600] mt-[10px] text-title">
            Blogs are empty.
          </h1>
        </section>
      )}
    </section>
        {/* -----------------------blogs------------------- */}
    </section>
  )
}

export default Hblog

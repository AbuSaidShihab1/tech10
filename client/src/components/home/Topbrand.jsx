import React, { useState,useEffect } from 'react'
import { GoArrowRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import axios from 'axios';
const Topbrand = () => {

  const [brands,set_brands]=useState([]);

	const all_brand=()=>{
		axios.get(`http://localhost:8080/admin/brands`)
		.then((res)=>{
			if(res.data.success){
				set_brands(res.data.data)
				console.log(res)
			}
		}).catch((err)=>{
			console.log(err)
		})
	}
	useEffect(()=>{
        all_brand();
	},[])
  return (
  <section className='px-[20px] md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[150px] font-baji'>
    <div className='flex justify-between items-center'>
            <h2 className='flex justify-center items-center gap-[3px] text-[18px] 2xl:text-heading font-[600]'>Top Brands <img src="https://demo.futureitlab.com/xura/assets/images/icon/fire.png" alt="" /></h2>
        </div>
        {/* ---------------------brands-----------------------*/}
         <section className='mt-[10px] lg:mt-[20px]'>
  {
    brands.length > 0 ? <Marquee direction='left' className='w-full flex justify-center gap-[20px] pb-[20px]'>
  {
    brands?.map((data)=>{
      return(
     <div className=' bg-white shadow-shadow1 ml-[5px] xl:ml-[10px] lg:ml-[20px] w-[150px] xl:w-[200px] p-[20px] xl:p-[25px] border-[1px] hover:shadow-xl transition-all duration-200 cursor-pointer border-[#eaeaea] rounded-[5px]'>
        <img className='w-[60px] xl:w-auto h-[50px] m-auto'  src={`http://localhost:8080/images/${data?.image}`} alt="" />
     </div>
      )
    })
  }
</Marquee>:""
  }
    
         </section>
        {/* -------------------------brands------------------ */}
  </section>
  )
}

export default Topbrand

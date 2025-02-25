import React,{useState,useEffect} from 'react'
import Productcard from '../product/Productcard'
import axios from 'axios'

const Relatesproduct = ({category_name}) => {
            const [product_list,set_productlist]=useState([])
            const flash_products=()=>{
                axios.get(`http://localhost:8080/admin/category-products/${category_name}`)
                .then((res)=>{
                    if(res.data.success){
                        set_productlist(res.data.data)
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }
            useEffect(()=>{
              flash_products();
            },[])
  return (
    <section className='w-full px-[150px] py-[50px]'>
          <div>
            <h1 className='text-[22px] xl:text-[30px] mb-[8px]'>Related Products</h1>
            <div className='w-full h-[3px] bg-gray-100'>
                <div className='w-[20%] h-full bg-red-500'>
                </div>
            </div>
          </div>
          {/* ---------------------all-products------------------------- */}
            <section>
            {
            product_list.length > 0 ? <section className='grid  mt-[40px] grid-cols-5 gap-[20px]'>
                {
                    product_list.map((data,id)=>{
                        return(
                            <Productcard data={data} key={id} rating={data.rating}  />
                        )
                    })
                }
            </section>:""
        }
            </section>
          {/* ---------------------all-products------------------------- */}
    </section>
  )
}

export default Relatesproduct

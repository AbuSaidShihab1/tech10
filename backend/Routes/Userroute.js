const express = require('express');
const product_model = require('../Models/Productmodel');
const user_route = express();

user_route.get("/single-product/:id",async(req,res)=>{
      try {
        const find_product=await product_model.findById({_id:req.params.id});
        if(!find_product){
            res.send({success:false,message:"Product not found!"})  
        }
        res.send({success:true,data:find_product})
      } catch (error) {
        console.log(error)
      }
})
// -----------find-product-by--------------category--------------------
user_route.get("/category-product/:category",async(req,res)=>{
  try {
    const find_product=await product_model.findById({category:req.params.category});
    if(!find_product){
        res.send({success:false,message:"Product not found!"})  
    }
    res.send({success:true,data:find_product})
  } catch (error) {
    console.log(error)
  }
})

module.exports=user_route;
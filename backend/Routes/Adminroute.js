const express = require("express");
const multer = require("multer");
const path = require("path");
const category_model = require("../Models/Category");
const admin_route = express();
const { body, validationResult } = require("express-validator");
const product_model = require("../Models/Productmodel");
const brand_model = require("../Models/Brandmodel");
const usermodel = require("../Models/User");
// ------------file-upload----------
const storage=multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,"./public/images")
  },
  filename:function(req,file,cb){
      cb(null,`${Date.now()}_${file.originalname}`)
  }

});
const uploadimage=multer({storage:storage});


admin_route.get("/", (req, res) => {
  res.send("Admin Route");
});

// Use Multer to handle the image upload in the category route
// admin_route.post("/category", upload.single("file"), async (req, res) => {

//     console.log("hello")
//     // const { title, numberOfProducts } = req.body;
//     // console.log(req.image)
//     // const newCategory = new category_model({ title, image, numberOfProducts });
//     // await newCategory.save();
//     // res.status(201).json({ message: "Category created successfully", category: newCategory });

// });
admin_route.post("/category",uploadimage.single("file"),(req,res)=>{
  try {
     const {title,numberOfProducts}=req.body;
     const new_category=new category_model({
      title,numberOfProducts,
      image:req.file.filename
     });
     new_category.save();
     res.send({success:true,message:"Ok"})

  } catch (error) {
    console.log(error)
  }
})
admin_route.get("/category",async(req,res)=>{
  try {
    const category=await category_model.find();
    res.send({success:true,data:category})
  } catch (error) {
    console.log(error)
  }
})
admin_route.delete("/delete-category/:id",async(req,res)=>{
  try{
    const delete_category=await category_model.findByIdAndDelete({_id:req.params.id});
    if(!delete_category){
     return  res.send({success:false,message:"Category  did not find!"})
    };
    res.send({success:true,message:"Category has been deleted!"})
  }catch(err){
      console.log(err)
  }
});
// --------------------add-brand-------------------
admin_route.post("/add-brand",uploadimage.single("file"),(req,res)=>{
  try {
     const {title,numberOfProducts}=req.body;
     const new_brand=new brand_model({
      title,numberOfProducts,
      image:req.file.filename
     });
     new_brand.save();
     res.send({success:true,message:"Ok"})
  } catch (error) {
    console.log(error)
  }
})
admin_route.get("/brands",async(req,res)=>{
  try {
    const brands=await brand_model.find();
    res.send({success:true,data:brands})
  } catch (error) {
    console.log(error)
  }
})
admin_route.delete("/delete-brand/:id",async(req,res)=>{
  try{
    const delete_brand=await brand_model.findByIdAndDelete({_id:req.params.id});
    if(!delete_brand){
     return  res.send({success:false,message:"Brand  did not find!"})
    };
    res.send({success:true,message:"Brand has been deleted!"})
  }catch(err){
      console.log(err)
  }
});
// ----------------all-user---------------------------
admin_route.get("/users",async(req,res)=>{
  try {
     const all_users=await usermodel.find();
     if(!all_users){
      return res.send({success:false,message:"Something went wrong!"})
     }
     res.send({success:true,message:"Ok",data:all_users})
  } catch (error) {
    console.log(error)
  }
})
// -----------add-product------------------

admin_route.post(
  "/add-product",
  uploadimage.array("images", 5), // Max 5 images
  [
    body("productName").notEmpty().withMessage("Product name is required"),
    body("brand").notEmpty().withMessage("Brand is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { 
        productName, 
        brand, 
        category, 
        sizes, 
        colors, 
        description, 
        stock, 
        price, 
        oldPrice, 
        discount, 
        productType,
        tax, 
        flashSale, 
        flashSalePrice, 
        flashSaleStart, 
        flashSaleEnd 
      } = req.body;

      // Process size and color fields to convert them to arrays
      const sizesArray = sizes ? sizes.split(",").map(size => size.trim()) : [];
      const colorsArray = colors ? colors.split(",").map(color => color.trim()) : [];

      // Handle flashSale logic
      const flashSaleData = flashSale === "true" ? {
        flashSale: true,
        flashSalePrice: flashSalePrice ? parseFloat(flashSalePrice) : undefined,
        flashSaleStart: flashSaleStart ? new Date(flashSaleStart) : undefined,
        flashSaleEnd: flashSaleEnd ? new Date(flashSaleEnd) : undefined,
      } : {
        flashSale: false,
      };

      // Create the new product
      const newProduct = new product_model({
        productName,
        brand,
        category,
        sizes: sizesArray,
        colors: colorsArray,
        description,
        stock: stock ? parseInt(stock) : 0,
        price: parseFloat(price),
        product_type:productType,
        oldPrice: oldPrice ? parseFloat(oldPrice) : undefined,
        discount: discount ? parseFloat(discount) : undefined,
        tax: tax ? parseFloat(tax) : undefined,
        ...flashSaleData,
        images: req.files.map((file) => file.filename), // Store image filenames
      });

      await newProduct.save();

      res.status(201).json({ message: "Product created successfully", product: newProduct });
      console.log("Product created:", newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }
);

admin_route.get("/all-products",async(req,res)=>{
  try {
    const products=await product_model.find();
    res.send({success:true,data:products})
  } catch (error) {
    console.log(error)
  }
})
admin_route.delete("/delete-product/:id",async(req,res)=>{
  try{
    const delete_product=await product_model.findByIdAndDelete({_id:req.params.id});
    if(!delete_product){
     return  res.send({success:false,message:"Product  did not find!"})
    };
    res.send({success:true,message:"Product has been deleted!"})
  }catch(err){
      console.log(err)
  }
});
admin_route.get("/flash-products",async(req,res)=>{
  try {
    const products=await product_model.find({flashSale:true});
    res.send({success:true,data:products})
  } catch (error) {
    console.log(error)
  }
});
admin_route.get("/new-arrival-products",async(req,res)=>{
  try {
    const products=await product_model.find({product_type:"New Arrival"});
    res.send({success:true,data:products})
  } catch (error) {
    console.log(error)
  }
});
admin_route.get("/category-products/:category",async(req,res)=>{
  try {
    const products=await product_model.find({category:req.params.category});
    res.send({success:true,data:products})
  } catch (error) {
    console.log(error)
  }
})
module.exports = admin_route;

import React,{useState,useEffect} from "react";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import Categorytable from "../components/products/Categorytable";
import Brandtable from "../components/brand/Brandtable";
const categoriesData = [
    { name: "Mobile Phones", products: 16724 },
    { name: "Laptops", products: 533 },
    { name: "Watches", products: 3563 },
    { name: "Cameras", products: 2355 },
    { name: "Electronics", products: 8563 },
    { name: "Furniture", products: 4363 },
    { name: "Clothing", products: 6434 },
    { name: "Shoes", products: 26264 },
    { name: "Sports Equipment", products: 3425 },
    { name: "Beauty Products", products: 16724 },
  ];
const Brand = () => {
    const [categories, setCategories] = useState(categoriesData);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryName || !productNumber || !image) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", categoryName);
    formData.append("numberOfProducts", productNumber);
    formData.append("file", image);
     console.log(image)
    axios.post("http://localhost:8080/admin/add-brand", formData)
      .then((response) => {
        setCategories([...categories, response.data]);
        setShowModal(false);
        setCategoryName("");
        setProductNumber("");
        setImage(null);
        setImagePreview(null);
        alert("ok")
      })
      .catch((error) => {
       console.log(error)
      });
  };
	return (
		<div className='flex-1 overflow-auto relative z-10 '>
			<Header title='Category' />
         <section className="">
         <div className="p-6 min-h-screen font-baji">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Brands</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-[5px] shadow-md transition"
        >
          <AiOutlinePlus className="mr-2" /> Add Brand
        </button>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg">
   <Brandtable/>
      </div>

      {showModal && (
        <form onSubmit={handleAddCategory} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Brand</h2>
            <input
              type="text"
              placeholder="Brand Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-3 border rounded-md mb-3 text-black"
            />
            <input
              type="number"
              placeholder="Number of Products"
              value={productNumber}
              onChange={(e) => setProductNumber(e.target.value)}
              className="w-full p-3 border rounded-md mb-3 text-black"
            />
            <input type="file" onChange={handleFileChange} className="w-full text-black p-3 border rounded-md mb-3" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover mb-3 rounded-md" />}
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-gray-200 text-gray-800 rounded-[5px] hover:bg-gray-200 transition">Cancel</button>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-[5px] hover:bg-blue-700 transition">Add</button>
            </div>
          </div>
        </form>
      )}
    </div>
         </section>
		</div>
	);
};
export default Brand;

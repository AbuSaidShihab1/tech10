import { useState,useEffect} from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import Header from "../components/Header";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import BuyNowModal from "../components/modal/BuyNowModal ";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Relatesproduct from "../components/home/Relatesproduct";
const productImages = [
  "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/Grey-3-200x200.jpg",
  "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-41-200x200.jpg",
  "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/black-17-200x200.jpg",
  "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/4-9-200x200.jpg",
  "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/3-30-200x200.jpg",
];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedColor, setSelectedColor] = useState("black");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const sizes = ["Small", "Medium", "Large"];
  const colors = ["black", "white", "red", "blue", "green"];
  // ---------single-product-data-----------------
  // const base_url = import.meta.env.VITE_API_KEY_Base_URL;
  const {id}=useParams();
  const [searchparams]=useSearchParams();
  const  category=searchparams.get("category")
 const [single_product,set_single_product]=useState([]);
 const [selectedImage, setSelectedImage] = useState(null);  

	const single_data=()=>{
    console.log("hello")
		axios.get(`http://localhost:8080/user/single-product/${id}`)
		.then((res)=>{
			if(res.data.success){
				set_single_product(res.data.data)
				console.log(res)
			}
		}).catch((err)=>{
			console.log(err)
		})
	}
	useEffect(()=>{
    single_data();
	},[])
  useEffect(() => {
    if (single_product?.images?.length > 0) {
      setSelectedImage(single_product.images[0]); // Set first image if available
    }
  }, [single_product]);

  if (!single_product?.images?.length) {
    return <p>No images available</p>; // Handle cases where images are missing
  }
  return (
    <section className="font-baji ">
      <Header/>
      <section className="px-[150px]">
      <div className="flex flex-col  md:flex-row p-6 gap-[80px]">
      {/* Product Image Section */}
      <div className="flex flex-col items-center md:w-1/2">
      {/* Main Product Image */}
      <div className="p-[20px] flex justify-center items-center w-full">
        {selectedImage && (
          <img
            src={`http://localhost:8080/images/${selectedImage}`}
            alt="Product"
            className="w-[60%] object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 gap-2">
        {single_product.images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:8080/images/${image}`}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[100px] h-[100px] border-[1px] rounded-[5px] cursor-pointer ${
              selectedImage === image ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>

      {/* Product Details Section */}
      <div className="md:w-1/2">
      <h1 className="text-2xl font-semibold mb-2">
        {single_product?.productName}
      </h1>
      <h3 className="mb-5 text-[17px] text-gray-700 font-[500]">{single_product?.category}</h3>
      <div className="flex justify-start items-center mb-3 gap-5">
        <p className="text-3xl font-bold text-gray-800">৳{single_product?.price}</p>
        <p className="text-2xl font-semibold text-gray-400 line-through">৳{single_product?.oldPrice}</p>
      </div>
      {single_product?.description?.length > 200 ?      <p className="text-gray-600 text-lg">
        {single_product?.description.slice(0, 200)}...
        </p>:<p className="text-gray-600 text-lg">{single_product.description}</p>}

 

      {/* Stock Info */}
      <div className="flex justify-start items-center gap-2 mt-4">
       {
        single_product?.stock > 0 ?  <div className="p-[3px] rounded-full bg-green-400 text-white text-[15px]">
        <FaCheck />
      </div>:<div className="p-[3px] rounded-full bg-red-400 text-white text-[15px]">
        <FaCheck />
      </div>
       }
        {
        single_product?.stock > 0 ? <p className="text-lg text-gray-700">In Stock <span>Product Left {single_product?.stock}</span></p> : <p className="text-lg text-gray-700">Out of Stock</p>
        }
      </div>

      {/* Size Selection */}
      <div className="mt-4">
        <label className="block font-semibold text-lg mb-2">Size:</label>
        <div className="flex gap-3">
          {single_product.sizes?.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border rounded-lg ${
                selectedSize === size ? "bg-indigo-600 text-white" : "bg-white"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mt-4">
        <label className="block font-semibold text-lg mb-2">Color:</label>
        <div className="flex gap-2">
          {single_product.colors?.map((color) => (
            <span
              key={color}
              className={`block w-8 h-8 rounded-full border cursor-pointer ${
                selectedColor === color ? "ring-2 ring-indigo-600" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
      </div>

      {/* Quantity & Buy Now Button */}
      <div className="mt-4 flex items-center gap-4 w-full">
        <div className="flex items-center border  w-auto">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2  text-lg font-bold"
          >
            <FaMinus/>
          </button>
          <span className="px-6 py-2 text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2  text-lg font-bold"
          >
            <FaPlus/>
          </button>
        </div>
        <div className="flex justify-center gap-[5px] w-full">
        <button className="bg-gray-100 w-[100%] text-black px-6 py-3 flex items-center justify-center gap-2 rounded text-lg font-semibold">
         ADD TO CART
        </button>
              {/* Wishlist Button */}
      {/* <button
        onClick={() => setWishlist(!wishlist)}
        className="mt-4 flex w-[20%] items-center justify-center gap-2 border py-2  h-full rounded"
      >
        {wishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart />} 
      </button> */}
      </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-4">
     {/* Order Now Button with Infinite Scale Animation */}
     {/* <button
        className="animate-[scaleLoop_3s_infinite_ease-in-out] bg-orange-500 text-white px-6 py-3 flex items-center justify-center gap-2 rounded w-full text-lg font-semibold"
        onClick={() => setIsModalOpen(true)}
      >
        Order Now
      </button> */}
      {/* Buy Now Button */}
      <BuyNowModal product={single_product} quantity={quantity}/>
      </div>



      {/* Additional Info */}
      <div className="mt-6 bg-gray-100 p-4 rounded">
        <div className="flex items-center gap-2">
          <MdSecurity className="text-xl text-green-600" />
          <span>Guarantee safe & secure checkout</span>
        </div>
      </div>
    </div>
    </div>
    {/* -----------------------tab-system---------------------- */}
    <div className="w-full  p-4">
      {/* Tab Headers */}
      <div className="flex border-b">
        {[
          { name: "Description", key: "description" },
          { name: "Additional Information", key: "additional" },
          { name: "Reviews", key: "reviews" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 text-lg font-semibold border-b-2 transition-all ${
              activeTab === tab.key ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "description" && (
          <div>
            <p className="font-[600] text-[22px]">
            {single_product?.productName}
            </p>
            <h3 className="mt-4">{single_product?.description}</h3>
            {/* <ol className="list-decimal list-inside">
              <li>Comodo in tempor ullamcorper</li>
              <li>Pellentesque vitae neque mollis</li>
              <li>Divamus sit amet purus</li>
              <li>Proin molestie egestas orci</li>
            </ol> */}
          </div>
        )}

        {activeTab === "additional" && (
          <div>
            <h3 className="font-bold">Product Details</h3>
            <table className="w-full border-collapse border border-gray-300 mt-2">
              <tbody>
                <tr className="border">
                  <td className="border px-4 py-2 font-semibold">Material</td>
                  <td className="border px-4 py-2">Cotton Blend</td>
                </tr>
                <tr className="border">
                  <td className="border px-4 py-2 font-semibold">Color</td>
                  <td className="border px-4 py-2">Blue</td>
                </tr>
                <tr className="border">
                  <td className="border px-4 py-2 font-semibold">Size</td>
                  <td className="border px-4 py-2">M, L, XL</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "reviews" && (
      <div>
      <h2 className="text-lg font-bold">Leave a Review</h2>
      <div className="flex space-x-1 my-2">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <FaStar
              key={index}
              className={
                currentRating <= (hover || rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(currentRating)}
            />
          );
        })}
      </div>
      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Write your review here..."
      ></textarea>
      <input
        type="text"
        className="w-full border p-2 mb-2"
        placeholder="Name"
      />
      <input
        type="email"
        className="w-full border p-2 mb-2"
        placeholder="Email"
      />
      <input
        type="file"
        className="w-full border p-2 mb-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
        )}
      </div>
    </div>
      </section>
      <Relatesproduct category_name={category}/>
      <Footer/>
    </section>
  );
}
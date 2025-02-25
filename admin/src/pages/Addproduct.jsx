import { useState,useEffect } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../components/common/Header";

const colorsList = ["#2D2D5D", "#F4B400", "#FFFFFF", "#FF6D00", "#34A853", "#EA4335", "#A7E1E7", "#5D6D7E"];

const Addproduct = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const base_url = import.meta.env.VITE_API_KEY_Base_URL;
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    weight: "",
    category: "",
    sizes: [],
    sizeInput: "",
    colors: [],
    description: "",
    tagNumber: "",
    stock: "",
    price: "",
    oldPrice: "",
    discount: "",
    tax: "",
    productType: "",
    images: [],
    flashSale: false,
    flashSalePrice: "",
    flashSaleStart: "",
    flashSaleEnd: "",
  });

  // Fetch all categories
  const all_category = () => {
    axios
      .get(`${base_url}/admin/category`)
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  };

  // Fetch all brands
  const all_brand = () => {
    axios
      .get(`http://localhost:8080/admin/brands`)
      .then((res) => {
        if (res.data.success) {
          setBrands(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching brands:", err);
      });
  };

  useEffect(() => {
    all_category();
    all_brand();
  }, []);

  const handleColorSelect = (color) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleSizeAdd = (e) => {
    e.preventDefault();
    if (formData.sizeInput && !formData.sizes.includes(formData.sizeInput)) {
      setFormData((prev) => ({
        ...prev,
        sizes: [...prev.sizes, formData.sizeInput],
        sizeInput: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSizeRemove = (size) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((s) => s !== size),
    }));
  };

  const handleImageDelete = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.productName || !formData.brand || !formData.price || !formData.productType) {
      alert("Please fill all required fields.");
      return;
    }

    const productData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData.images.forEach((image) => productData.append("images", image));
      } else {
        productData.append(key, formData[key]);
      }
    });

    axios.post(`http://localhost:8080/admin/add-product`, productData)
      .then(() => alert("Product Created Successfully!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-1 overflow-auto relative font-baji z-10">
      <Header title={"Analytics Dashboard"} />
  
      <main className="py-6 px-4 lg:px-8">
        <form className="p-8 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-[22px] text-gray-700 font-[600]">Add New Product</h1>
          {/* Image Upload Section */}
          <div className="border-[2px] p-6 flex flex-col items-center border-[#eee]">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Product Images</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                  <AiOutlineClose
                    className="absolute top-0 right-0 text-white cursor-pointer bg-gray-600 p-1 rounded-full"
                    onClick={() => handleImageDelete(index)}
                  />
                </div>
              ))}
            </div>
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex items-center justify-center text-white px-6 py-[9px] rounded-full bg-blue-600 transition"
            >
              <FaCloudUploadAlt className="mr-2 text-[25px]" />
              Upload Images
            </label>
            <input
              type="file"
              id="image-upload"
              name="images"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              className="hidden"
            />
          </div>

          {/* Product Details Form */}
          <div className="mb-4">
          <label className="block font-semibold mb-2 text-gray-700">Select Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-4 w-full rounded text-gray-700 outline-blue-500"
          >
            <option value="">Choose a Category</option>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat._id} className="text-gray-700 " value={cat.title}>
                  {cat.title}
                </option>
              ))
            ) : (
              <option disabled>Loading Categories...</option>
            )}
          </select>
        </div>

          {/* Brand Selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">Select Brand</label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="border p-4 w-full rounded text-gray-700 outline-blue-500"
            >
              <option value="">Choose a Brand</option>
              {brands.length > 0 ? (
                brands.map((brand) => (
                  <option key={brand._id} value={brand.title}>
                    {brand.title}
                  </option>
                ))
              ) : (
                <option disabled>Loading Brands...</option>
              )}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <input type="text" name="productName" placeholder="Product Name" className="border p-4 outline-blue-500 text-gray-700 rounded-lg" onChange={handleChange} />
     
            <input type="number" name="price" placeholder="Price" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
            <input type="number" name="oldPrice" placeholder="Old Price" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
            <input type="number" name="discount" placeholder="Discount" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
            <input type="number" name="tax" placeholder="Tax" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
          </div>

          {/* Product Type (New Arrival / Best Seller) */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700 ">Product Type</label>
            <select name="productType" className="border p-4 w-full rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} value={formData.productType}>
              <option value="">Select Product Type</option>
              <option value="New Arrival">New Arrival</option>
              <option value="Best Seller">Best Seller</option>
            </select>
          </div>
{/* Flash Sale Checkbox */}
<div className="mb-4">
            <label className="flex items-center text-gray-700 font-semibold">
              <input type="checkbox" name="flashSale" checked={formData.flashSale} onChange={handleChange} className="mr-2" />
              Flash Sale
            </label>
          </div>

          {/* Flash Sale Fields */}
          {formData.flashSale && (
            <div className="grid grid-cols-1 gap-2">
              <label className="block font-semibold text-gray-700">Flash Sale Price</label>
              <input type="number" name="flashSalePrice" placeholder="Flash Sale Price" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
              
              <label className="block font-semibold text-gray-700">Flash Sale Start Date</label>
              <input type="date" name="flashSaleStart" placeholder="Flash Sale Start Date" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
              
              <label className="block font-semibold text-gray-700">Flash Sale End Date</label>
              <input type="date" name="flashSaleEnd" placeholder="Flash Sale End Date" className="border p-4 rounded-lg text-gray-700 outline-blue-500" onChange={handleChange} />
            </div>
          )}
          {/* Description Field */}
          <div className="mb-2">
            <label className="block font-semibold mb-2 text-gray-700">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" className="outline-blue-500 border p-4 w-full text-gray-700 rounded-lg" rows="4" />
          </div>

          {/* Size Input */}

          {/* Size Input */}
          <div className="mb-2">
            <label className="block font-semibold text-gray-700">Sizes</label>
            <div className="flex items-center mt-[5px]">
              <input type="text" name="sizeInput" value={formData.sizeInput} onChange={handleChange} placeholder="Add Size" className="border p-4 w-full rounded-lg text-gray-700 outline-blue-500" />
              <button type="button" onClick={handleSizeAdd} className="ml-2 bg-blue-500 text-white p-4 rounded-lg">Add</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.sizes.map((size, index) => (
                <div key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                  <span>{size}</span>
                  <AiOutlineClose
                    className="ml-2 text-red-500 cursor-pointer"
                    onClick={() => handleSizeRemove(size)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">Colors</label>
            <div className="flex gap-4 flex-wrap">
              {colorsList.map((color, index) => (
                <div key={index} className={`w-8 h-8 rounded-full cursor-pointer border-2 ${formData.colors.includes(color) ? "border-blue-500" : "border-[#eee]"}`} style={{ backgroundColor: color }} onClick={() => handleColorSelect(color)} />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 w-full text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Create Product</button>
        </form>
      </main>
    </div>
  );
};

export default Addproduct;

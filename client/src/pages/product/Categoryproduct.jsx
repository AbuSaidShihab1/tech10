import React,{useState,useEffect} from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Productcard from '../../components/product/Productcard';
const Categoryproduct = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBrand, setActiveBrand] = useState(null);
  const colors = ["Yellow", "Black", "White", "Green", "Blue", "Red", "Gray"];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const brands = [
    { name: "Samsung", count: 10 },
    { name: "Apple", count: 8 },
    { name: "Canon", count: 5 },
    { name: "Lenovo", count: 7 },
    { name: "Microsoft", count: 4 },
    { name: "Sony", count: 6 },
    { name: "Mi", count: 9 }
  ];

  const handleColorClick = (color) => {
    setActiveColor(color === activeColor ? null : color);
  };

  const handleBrandClick = (brand) => {
    setActiveBrand(brand === activeBrand ? null : brand);
  };

  const handleMinPriceChange = (value) => {
    if (value < maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (value) => {
    if (value > minPrice) {
      setMaxPrice(value);
    }
  };
   const [products,set_products]=useState([
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-23-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-10-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:100,
                  color: "Blue",
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-23-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-24-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:400,
                  discount:"5%",
                  price2:220,
                  color: "Red",
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-36-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-35-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
                  color: "Yellow",
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-11-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-18-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
                  color: "Pink",
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-41-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-42-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-43-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-41-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-13-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-15-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/black-5-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/2-18-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
              },
              {
                  id:1,
                  images:["https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-23-600x600.jpg","https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-10-600x600.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
              },
              {
                  id:1,
                  images:["https://allmart.b-cdn.net/home-one/wp-content/uploads/sites/2/2024/12/Image-8.jpg","https://allmart.b-cdn.net/home-one/wp-content/uploads/sites/2/2024/12/Image-20.jpg"],
                  title:"Label 20 RGB Keyboard",
                  category:"Gadget",
                  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique eveniet odit facere? Maxime, beatae ex dolore accusamus minus labore!",
                  rating:4.5,
                  rating_number:20,
                  price:200,
                  discount:"5%",
                  price2:220,
              },
              
          ])
          const filteredProducts = products.filter((product) => {
            const matchesSearch = searchQuery === "" || product.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesColor = !activeColor || product.color?.toLowerCase() === activeColor.toLowerCase();
            const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
            const matchesBrand = !activeBrand || product.title.toLowerCase().includes(activeBrand.toLowerCase());
          
            return matchesSearch && matchesColor && matchesPrice && matchesBrand;
          });
          
  return (
   <section className='font-baji'>
    <Header/>
    <section className='w-full px-[150px] py-[12px] '>
        <ul className='flex justify-start items-center gap-[12px]'>
            <li>Home</li>
            <li><IoIosArrowForward/></li>
            <li>Products</li>
        </ul>
    </section>
    {/* ---------------------products------------------- */}
    <section className="px-[150px] py-[50px] flex gap-[30px]">
  {/* Filter Box */}
<div className='w-[20%]'>
<div
    className="w-[100%] bg-white p-6 h-auto shadow-lg border border-gray-200 rounded-lg sticky"
    style={{ top: '10vh' }}
  >
    {/* Search Bar */}
    <div className="mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex justify-start items-center gap-[10px]">
      <AiOutlineSearch className='text-[20px] text-gray-600'/>
      <input
        type="text"
        placeholder=" Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-full outline-none "
      />
    </div>

    {/* Filter by Color */}
    {/* <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Filter By Color</h3>
      <div className="flex flex-col space-y-3">
        {colors.map((color, index) => (
          <div className="flex justify-between items-center" key={index}>
            <div
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                activeColor === color ? "border-blue-500" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() => handleColorClick(color)}
            ></div>
            <h2>10</h2>
          </div>
        ))}
      </div>
    </div> */}

    {/* Filter by Price */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Filter By Price</h3>
      <div>
        <div className="flex justify-between text-[16px] font-[500] text-gray-500 mb-2">
          <span className=''>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
        <div className="relative h-2 bg-gray-300 rounded-full">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{
              left: `${((minPrice - 30) / (1500 - 30)) * 100}%`,
              right: `${100 - ((maxPrice - 30) / (1500 - 30)) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min="30"
            max="1500"
            value={minPrice}
            onChange={(e) => handleMinPriceChange(Number(e.target.value))}
            className="absolute top-0 w-full h-2 appearance-none bg-transparent pointer-events-auto"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min="30"
            max="1500"
            value={maxPrice}
            onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
            className="absolute top-0 w-full h-2 appearance-none bg-transparent pointer-events-auto"
            style={{ zIndex: 3 }}
          />
        </div>
      </div>
    </div>

    {/* Brands */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Brands</h3>
      <ul className="space-y-3">
        {brands.map((brand, index) => (
          <li
            key={index}
            className={`flex justify-between cursor-pointer items-center p-2 rounded-md hover:bg-gray-100 transition-all ${
              activeBrand === brand.name ? "font-bold text-blue-500" : "text-gray-700"
            }`}
            onClick={() => handleBrandClick(brand.name)}
          >
            <span>{brand.name}</span>
            <span className="text-gray-500">{brand.count}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Product Status */}
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Product Status</h3>
      <div className="flex flex-col space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500 focus:ring-blue-500 focus:outline-none"
          />
          <span className="text-gray-700">In Stock</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500 focus:ring-blue-500 focus:outline-none"
          />
          <span className="text-gray-700">On Sale</span>
        </label>
      </div>
    </div>
  </div>
</div>

  {/* Products */}
  {filteredProducts.length > 0 ? (
    <section className="w-[80%] grid grid-cols-4 gap-[20px]">
      {filteredProducts.map((data, id) => (
        <Productcard data={data} key={id} rating={data.rating} />
      ))}
    </section>
  ) : (
    <p className="text-center text-gray-500">No products match your criteria.</p>
  )}
</section>

   </section>
  )
}

export default Categoryproduct

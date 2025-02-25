import React,{useState} from 'react'
import Header from '../components/Header'
import { FaTrashAlt } from "react-icons/fa"; 
import Footer from '../components/Footer';
const Cart = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-6-300x300.jpg",
          title: "Mini Fridge Portable Cosmetic Beauty Refrigerator",
          price: "$125.00",
          quantity: 1,
        },
        {
          id: 2,
          image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-6-300x300.jpg",
          title: "Vinova Galaxy Fold 256GB Original Phone",
          price: "$350.00",
          quantity: 1,
        },
        {
          id: 3,
          image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-6-300x300.jpg",
          title: "Vinova Ultra 256GB Original Snapdragon Android Phone",
          price: "$120.00",
          quantity: 1,
        },
      ]);
    
      const handleQuantityChange = (id, type) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id
              ? {
                  ...product,
                  quantity: type === "increase" ? product.quantity + 1 : Math.max(1, product.quantity - 1),
                }
              : product
          )
        );
      };
  return (
  <section className='font-baji'>
    <Header/>
    {/* -------------------wishlist-product--------------------- */}
    <section className='px-[150px] py-[20px] bg-[#F9F9F9]'>
        <div>
            <ul className='flex justify-start items-center gap-[5px] font-[500] text-[17px]'>
                <li>Home</li>
                <li>/</li>
                <li>Wishlist</li>
            </ul>
        </div>
    </section>
    <section className='px-[150px] py-[70px]'>
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      {/* Free Shipping Message */}
      <div className="text-green-600 text-[18px] font-medium mb-6 flex items-center gap-2">
        <span>Congratulations! You’ve got</span>
        <span className="font-bold">FREE SHIPPING</span>
        <span className="text-[20px]">🚚</span>
      </div>

      {/* Cart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Table */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-[18px] font-bold text-gray-700 uppercase">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-[18px] font-bold text-gray-700 uppercase">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-[18px] font-bold text-gray-700 uppercase">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-[18px] font-bold text-gray-700 uppercase">
                    Subtotal
                  </th>
                  <th className="px-4 py-3 text-[18px] font-bold text-gray-700 uppercase">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-4 py-[20px] flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[80px] border-[1px] border-[#eee] h-[80px] rounded-md object-cover"
                      />
                      <span className="text-gray-700 text-[18px] font-bold">
                        {product.title}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-[500] text-gray-700 text-[18px]">
                      {product.price}
                    </td>
                    <td className="px-4 py-3 font-[500] text-gray-700 text-[18px]">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(product.id, "decrease")}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="text-[18px] font-medium">{product.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(product.id, "increase")}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-[500] text-gray-700 text-[18px]">
                      {`$${(
                        parseFloat(product.price.slice(1)) * product.quantity
                      ).toFixed(2)}`}
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-gray-400 text-[20px] hover:text-red-500">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Coupon and Update Cart */}
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                APPLY COUPON
              </button>
            </div>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              UPDATE CART
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-[20px] font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-[16px] text-gray-600">Subtotal</span>
              <span className="text-[16px] font-bold">$595.00</span>
            </div>
            <div className="py-4 border-b border-gray-200">
              <p className="text-[16px] text-gray-600">Shipping</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="flat_rate"
                    name="shipping"
                    className="cursor-pointer"
                    defaultChecked
                  />
                  <label
                    htmlFor="flat_rate"
                    className="text-[16px] text-gray-600 cursor-pointer"
                  >
                    Flat rate: $30.00
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="local_pickup"
                    name="shipping"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="local_pickup"
                    className="text-[16px] text-gray-600 cursor-pointer"
                  >
                    Local pickup: $30.00
                  </label>
                </div>
                <p className="text-[14px] text-gray-400 mt-2">
                  Shipping options will be updated during checkout.
                </p>
              </div>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-[18px] font-bold">Total</span>
              <span className="text-[18px] font-bold text-blue-500">$625.00</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* --------------------wishlist-product----------------- */}
    <Footer/>
  </section>
  )
}

export default Cart

import React, { useState } from "react";
import { FaTimes, FaRegUser, FaPhone, FaMapMarkerAlt, FaCommentDots } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import OrderConfirmation from "../../pages/OrderConfirmation";
const BuyNowModal = ({ product, quantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deliveryCharge, setDeliveryCharge] = useState(110); // Default: Outside Dhaka
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const productPrice = product.price * quantity;
  const totalPrice = productPrice + deliveryCharge;
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopupOpen(true)


    if (!name || !phone || !address) {
      toast.error("সব তথ্য পূরণ করুন");
      return;
    }

    const orderData = {
      name,
      phone,
      address,
      comment,
      product: product.name,
      quantity,
      productPrice,
      deliveryCharge,
      totalPrice,
    };

    try {
      // await axios.post("http://localhost:8080/api/orders", orderData);
      toast.success("অর্ডার সফল হয়েছে!");
      setModalOpen(false);
    } catch (error) {
      toast.error("অর্ডার করতে ব্যর্থ হয়েছে, আবার চেষ্টা করুন");
    }
  };

  return (
    <div>
      <Toaster />
      {/* Buy Now Button */}
      <button
        className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md shadow-lg hover:bg-orange-700 hover:animate-shake animate-zoom"
        onClick={() => setIsOpen(true)}
      >
        Buy Now
      </button>

      {/* Modal */}
      {isOpen && (
        <form onSubmit={handleSubmit} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[30%] rounded-lg shadow-lg p-5 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            {/* Header */}
            <h2 className="text-lg font-semibold text-center mb-3 text-gray-700">
              ক্যাশ অন ডেলিভারির অর্ডার করতে আপনার তথ্য দিন
            </h2>

            {/* Input Fields */}
            <div className="space-y-3">
              <div className="flex items-center border p-3 rounded-md bg-gray-100">
                <FaRegUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="আপনার নাম" className="w-full bg-transparent outline-none" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex items-center border p-3 rounded-md bg-gray-100">
                <FaPhone className="text-gray-500 mr-2" />
                <input type="text" placeholder="ফোন নম্বর" className="w-full bg-transparent outline-none" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="flex items-center border p-3 rounded-md bg-gray-100">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input type="text" placeholder="এড্রেস (থানা + জেলা) লিখুন" className="w-full bg-transparent outline-none" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>

            {/* Product Section */}
            <div className="flex items-center my-4 border-b pb-2">
              <img src={`http://localhost:8080/images/${product?.images[0]}`} alt="Wall Holder" className="w-12 h-12 rounded mr-3" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Wall Holder</p>
                <div className="flex justify-start items-center gap-[5px]">
                  <p className="text-gray-600">{product?.price}.00Tk</p>
                  <p><IoCloseOutline /></p>
                  <p className="text-gray-600">{quantity} PCS</p>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <p className="font-semibold text-gray-700">ডেলিভারি চার্জ সিলেক্ট করুন..</p>
            <div className="space-y-2 mt-2">
              <label className="flex items-center space-x-2 border p-3 rounded-md bg-gray-100 cursor-pointer">
                <input type="radio" name="delivery" checked={deliveryCharge === 110} onChange={() => setDeliveryCharge(110)} />
                <span>ঢাকা সিটির বাইরে - 110.00Tk</span>
              </label>
              <label className="flex items-center space-x-2 border p-3 rounded-md bg-gray-100 cursor-pointer">
                <input type="radio" name="delivery" checked={deliveryCharge === 65} onChange={() => setDeliveryCharge(65)} />
                <span>ঢাকা সিটির মধ্যে - 65.00Tk</span>
              </label>
            </div>

            {/* Price Summary */}
            <div className="mt-4 border-t pt-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>{productPrice}.00Tk</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery charge</span>
                <span>{deliveryCharge}.00Tk</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-2 text-gray-800">
                <span>Total</span>
                <span>{totalPrice}.00Tk</span>
              </div>
            </div>

            {/* Comment Box */}
            <div className="flex items-center border p-3 rounded-md mt-3 bg-gray-100">
              <FaCommentDots className="text-gray-500 mr-2" />
              <input type="text" placeholder="কোনো মন্তব্য থাকলে লিখুন..." className="w-full bg-transparent outline-none" value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
 <OrderConfirmation isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
            {/* Order Button */}
            <button type="submit" className="w-full animate-shake bg-orange-500 text-white py-3 rounded-md mt-4 font-semibold">
              Complete your order
            </button>
          </div>
          
        </form>
      )}
       <OrderConfirmation isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default BuyNowModal;

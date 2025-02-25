import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useWindowSize } from "react-use";

const OrderConfirmation = ({ isOpen, onClose }) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full  relative">
        {showConfetti && <Confetti width={width} height={height} />}
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-3/5 p-4">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Order HT1829194</p>
                <h2 className="text-lg font-semibold">Thank you, John!</h2>
                <p className="text-gray-500">Thank you for your purchase! 🎉 We will contact you soon to confirm your order.</p>
              </div>
            </div>
            
            {/* Google Map Embed */}
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116896.32172960606!2d90.2589350972656!3d23.71133500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90092bf7c81%3A0x449c218f50c11dd2!2z..."
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/5 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-center">
              <img src="https://htmlbeans.com/html/schon/images/mt-logo.png" alt="Store Logo" className="w-24" />
            </div>

            <div className="mt-4 flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
              <img src="https://allmart.b-cdn.net/home-one/wp-content/uploads/sites/2/2024/12/Image-8.jpg" alt="Wall Holder" className="w-16 h-16 rounded-lg border border-gray-300" />
              <div>
                <p className="text-gray-700 font-semibold">Wall Holder</p>
                <p className="text-gray-500">৳95.00</p>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>৳95.00</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Shipping</p>
                <p>৳110.00</p>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-2">
                <p>Total</p>
                <p>৳205.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation
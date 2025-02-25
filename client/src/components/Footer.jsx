import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"
export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t font-baji border-gray-200">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-[40px]">
         <div className="logo flex justify-center items-center gap-[10px]">
                     <img className='w-[60px] ' src={logo} alt="" />
                     <p className='text-[28px] font-[600] text-gray-700'>Tech<span className='text-blue-500'>10</span></p>
                 </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-500">
              We know there are a lot of three developers out there, but we pride
              ourselves on being a firm in the industry.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Feature</h3>
            <ul className="text-gray-500 space-y-1">
              <li>About Us</li>
              <li>Terms Condition</li>
              <li>Best Products</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">General Links</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Blog</li>
              <li>Tracking Order</li>
              <li>Become Seller</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Helpful</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Flash Sale</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <FaInstagram className="text-gray-600 hover:text-gray-900 cursor-pointer" size={18} />
            <FaFacebookF className="text-gray-600 hover:text-gray-900 cursor-pointer" size={18} />
            <FaYoutube className="text-gray-600 hover:text-gray-900 cursor-pointer" size={18} />
          </div>

          {/* Copyright */}
          <p>
            ©2022 <span className="font-semibold">Tech10</span> All rights reserved
          </p>

          {/* Payment Methods */}
          <div className="flex space-x-2 mt-4 md:mt-0 gap-[20px]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-[30px]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-[30px]" />
            <img src="https://xxxbetgames.com/icons-xxx/payments/134.svg" alt="PayPal" className="h-[40px]" />
            <img src="https://xxxbetgames.com/icons-xxx/payments/138.svg" alt="Skrill" className="h-[40px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

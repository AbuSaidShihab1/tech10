import { useState } from 'react';
import { FiSearch, FiGlobe, FiBell, FiKey, FiChevronDown } from 'react-icons/fi';

const Header = ({ title }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className='bg-[#071251] font-bai sticky top-0 left-0 z-[10000] shadow-md border-b-[1px] border-gray-700 flex items-center justify-end px-4 py-[17px]'>

  
		{/* Icons and Admin */}
		<div className='flex items-center space-x-4'>
		  <FiGlobe className='text-white text-xl cursor-pointer' />
		  
		  <div className='relative'>
			<FiBell className='text-white text-xl cursor-pointer' />
			<span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1'>18+</span>
		  </div>
  
		  <FiKey className='text-white text-xl cursor-pointer' />
  
		  <div className="relative">
      {/* Profile Button */}
      <div
        className="flex items-center bg-white text-[#071251] px-2 py-1 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://isomorphic-furyroad.vercel.app/avatar.webp"
          alt="Profile"
          className="w-6 h-6 rounded-full"
        />
        <span className="ml-2 font-semibold">admin</span>
        <FiChevronDown className="ml-1 text-[#071251]" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border z-[100] border-gray-200 rounded-lg shadow-lg">
          <div className="flex items-center px-4 py-3">
            <img
              src="https://isomorphic-furyroad.vercel.app/avatar.webp"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-800">Admin</p>
              <p className="text-xs text-gray-800">admin@gmail.com</p>
            </div>
          </div>
          <hr />
          <ul className="py-2">
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-800">My Profile</li>
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-800">Account Settings</li>
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-800">Activity Log</li>
            <hr />
            <li className="px-4 py-2 text-sm cursor-pointer text-red-500 hover:bg-gray-100">Sign Out</li>
          </ul>
        </div>
      )}
    </div>
		</div>
	  </header>
	);
};
export default Header;

import { useState } from "react";
import { FaTachometerAlt, FaShoppingBag, FaDownload, FaMapMarkerAlt, FaUser, FaHeart, FaGift, FaSignOutAlt } from "react-icons/fa";import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FiDownload } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", icon: <RiDashboardHorizontalLine /> },
    { name: "Orders", icon: <BsCart3 /> },
    // { name: "Downloads", icon: <FiDownload /> },
    { name: "Addresses", icon: <MdOutlineLocationOn /> },
    { name: "Wishlist", icon: <LuHeart /> },
    { name: "Account Details", icon: <FiUser /> },
    { name: "Logout", icon: <TbLogout /> },
  ];
  const orders = [
    { id: "#2245", title: "How can I share ?", status: "Pending", action: "Invoice", statusColor: "text-blue-500" },
    { id: "#2220", title: "Send money, but not working", status: "Need your reply", action: "Reply", statusColor: "text-red-500" },
    { id: "#2125", title: "Balance error", status: "Resolved", action: "Invoice", statusColor: "text-green-500" },
    { id: "#2124", title: "How to decline bid", status: "On Hold", action: "Status", statusColor: "text-yellow-500" },
    { id: "#2121", title: "How to contact", status: "Resolved", action: "Invoice", statusColor: "text-green-500" },
  ];
  const wishlistItems = [
    { image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-10-600x600.jpg", title: "Product 1", price: "$50.00" },
    { image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-10-600x600.jpg", title: "Product 2", price: "$30.00" },
  ];
  const handleDelete = (index) => {
    setWishlistItems(wishlistItems.filter((_, i) => i !== index));
  };

  return (
    <section className='w-full font-baji'>
      <Header/>
    <section className="px-[150px] py-[30px] w-full">
    <div className="flex w-[80%] m-auto  p-6">
      {/* Sidebar */}
      <div className="w-1/4 ">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/author1.png"
            alt="User Avatar"
            className="rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">Hello Annie</h2>
          <p className="text-sm text-gray-500">eTrade Member Since Sep 2020</p>
        </div>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center w-full mb-[5px] px-4 py-2 text-left rounded-[5px] transition-all ${
                activeTab === tab.name ? "bg-red-500 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2 text-[22px] font-[500]">{tab.icon}</span> {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white p-6 ml-6 ">
        <h1 className="text-2xl font-semibold mb-4">{activeTab}</h1>
        <div>
          {activeTab === "Dashboard" && (
            <div className="grid grid-cols-4 gap-6">
              {[{ title: "Downloads", value: 2, icon: <FiDownload /> }, { title: "Orders", value: 5, icon: <LiaShoppingBagSolid /> }, { title: "Wishlist", value: 10, icon: <LuHeart /> }, { title: "Gift Box", value: 7, icon: <IoGiftOutline /> }].map((item, index) => (
                <div key={index} className="p-6   border-[1px] border-[#eee] flex flex-col items-center relative">
                  <span className="text-4xl text-black mb-2">{item.icon}</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{item.value}</span>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Orders" && (
            <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Order Id</th>
                <th className="border border-gray-300 p-2">Product Title</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">View</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2 text-blue-500 cursor-pointer">{order.id}</td>
                  <td className="border border-gray-300 p-2">{order.title}</td>
                  <td className={`border border-gray-300 p-2 ${order.statusColor}`}>{order.status}</td>
                  <td className="border border-gray-300 p-2">
                    <button className=" px-4 py-1 rounded border-[1px] text-black border-gray-200">{order.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
          {activeTab === "Downloads" && <p>Manage your downloads.</p>}
          {activeTab === "Addresses" && (
                <div className="grid grid-cols-2 gap-[100px]">
                  <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Billing Address</h2>
                    <button>
                      <BiEdit className="text-[22px]"/>
                    </button>
                    </div>
                    <p>Name: Annie Mario</p>
                    <p>Email: annie@example.com</p>
                    <p>Phone: 1234 567890</p>
                    <p>7398 Smoke Ranch Road</p>
                    <p>Las Vegas, Nevada 89128</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Billing Address</h2>
                    <button>
                      <BiEdit className="text-[22px]"/>
                    </button>
                    </div>
                    <p>Name: Annie Mario</p>
                    <p>Email: annie@example.com</p>
                    <p>Phone: 1234 567890</p>
                    <p>7398 Smoke Ranch Road</p>
                    <p>Las Vegas, Nevada 89128</p>
                  </div>
                </div>
              )}
          {activeTab === "Wishlist" && (
          <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Product Title</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">
                  <img src={item.image} alt={item.title} className="w-16 m-auto border-[1px] border-[#eee] rounded-[5px] h-16 object-cover" />
                </td>
                <td className="border border-gray-300 p-2">{item.title}</td>
                <td className="border border-gray-300 p-2">{item.price}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => handleDelete(index)} className="text-red-500 px-[10px] hover:text-red-700">
                    <AiOutlineDelete size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          )}
          {activeTab === "Account Details" && (
            <form>
              <label className="block mb-2">First Name</label>
              <input className="w-full p-2 border rounded mb-4" type="text" defaultValue="Annie" />
              <label className="block mb-2">Last Name</label>
              <input className="w-full p-2 border rounded mb-4" type="text" defaultValue="Mario" />
              <label className="block mb-2">Country/Region</label>
              <select className="w-full p-2 border rounded mb-4">
                <option>United Kingdom (UK)</option>
              </select>
              <h2 className="text-lg font-semibold mt-4">Password Change</h2>
              <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Current Password" />
              <input className="w-full p-2 border rounded mb-4" type="password" placeholder="New Password" />
              <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Confirm New Password" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
            </form>
          )}
          {activeTab === "Logout" && <p>You have been logged out.</p>}
        </div>
      </div>
    </div>
    </section>
    <Footer/>
    </section>
  );
};

export default AccountPage;

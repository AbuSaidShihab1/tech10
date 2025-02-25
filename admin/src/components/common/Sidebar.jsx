import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineCategory, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { RiCoupon3Line } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {NavLink} from "react-router-dom"
import { TbBrandBinance } from "react-icons/tb";
const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{ 
		name: "Category", 
		icon: MdOutlineCategory, 
		color: "#EC4899", 
		href: "/category/list"
	},
	{ 
		name: "Brand", 
		icon: TbBrandBinance, 
		color: "#2bcbba", 
		href: "/brand/list"
	},
	{ 
		name: "Products", 
		icon: ShoppingBag, 
		color: "#8B5CF6", 
		href: "/products",
		subItems: [
			{ name: "Product List", href: "/products/list" },
			{ name: "Add Product", href: "/products/add" },
		],
	},
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },

	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders",subItems: [
		{ name: "Order List", href: "/category/list" },
		{ name: "Order Details", href: "/category/add" },
		{ name: "Order Invoice", href: "/category/add" },
	], },
	{ name: "Blogs", icon: FaBloggerB, color: "#F59E0B", href: "/orders",subItems: [
		{ name: "Blog List", href: "/category/list" },
		{ name: "Add Blog", href: "/category/add" },
	], },
	{ name: "Reviews", icon: IoIosStar, color: "#F59E0B", href: "/orders" },
	{ name: "Transictions", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Coupons", icon: RiCoupon3Line, color: "#3B82F6", href: "/analytics" },
	{ name: "Moderator", icon: FaRegUserCircle, color: "#F59E0B", href: "/orders",subItems: [
		{ name: "Moderator List", href: "/category/list" },
		{ name: "New Moderator", href: "/category/add" },
	], },
	{ name: "Support", icon: BiSupport, color: "#6EE7B7", href: "/settings" },
	{ name: "Contact", icon: RiContactsBook3Line, color: "#6EE7B7", href: "/settings" },
	{ name: "NewsLetter", icon: MdEmail, color: "#6EE7B7", href: "/settings" },
	{ name: "Shop Information", icon: MdEmail, color: "#6EE7B7", href: "/settings" },
	{ name: "Profile", icon: IoMdInformationCircleOutline, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [openSubMenu, setOpenSubMenu] = useState(null);

	const toggleSubMenu = (name) => {
		setOpenSubMenu(openSubMenu === name ? null : name);
	};

	return (
		<motion.div
			className={`relative z-10 transition-all bg-blue-700 font-baji duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-gray-800 bg-opacity-50 overflow-y-auto custom-scrollbar backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<div key={item.href}>
							<motion.div 
								className='flex items-center justify-between px-4 py-[12px] text-sm font-medium rounded-lg hover:bg-orange-400 transition-colors mb-2 cursor-pointer'
								onClick={() => item.subItems && toggleSubMenu(item.name)}
							>
								<NavLink to={item.href} className='flex items-center'>
									<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
									<AnimatePresence>
										{isSidebarOpen && (
											<motion.span
												className='ml-4 whitespace-nowrap'
												initial={{ opacity: 0, width: 0 }}
												animate={{ opacity: 1, width: "auto" }}
												exit={{ opacity: 0, width: 0 }}
												transition={{ duration: 0.2, delay: 0.3 }}
											>
												{item.name}
											</motion.span>
										)}
									</AnimatePresence>
								</NavLink>

								{item.subItems && (
									<motion.div
										animate={{ rotate: openSubMenu === item.name ? 180 : 0 }}
										transition={{ duration: 0.3 }}
									>
										<MdKeyboardArrowDown size={20} />
									</motion.div>
								)}
							</motion.div>

							{item.subItems && openSubMenu === item.name && (
								<div className='pl-8'>
									{item.subItems.map((subItem) => (
										<Link key={subItem.href} to={subItem.href}>
											<motion.div 
												className='flex items-center p-2 text-sm font-medium rounded-lg hover:bg-orange-400 transition-colors mb-2'
											>
												{subItem.name}
											</motion.div>
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;

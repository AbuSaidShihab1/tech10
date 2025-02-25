import axios from "axios";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"
const categoriesData = [
    { name: "Mobile Phones", products: 16724 },
    { name: "Laptops", products: 533 },
    { name: "Watches", products: 3563 },
    { name: "Cameras", products: 2355 },
    { name: "Electronics", products: 8563 },
    { name: "Furniture", products: 4363 },
    { name: "Clothing", products: 6434 },
    { name: "Shoes", products: 26264 },
    { name: "Sports Equipment", products: 3425 },
    { name: "Beauty Products", products: 16724 },
  ];

const Brandtable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(categoriesData);
	const base_url = import.meta.env.VITE_API_KEY_Base_URL;
    const [brands,set_brands]=useState([]);

	const all_brand=()=>{
		axios.get(`http://localhost:8080/admin/brands`)
		.then((res)=>{
			if(res.data.success){
				set_brands(res.data.data)
				console.log(res)
			}
		}).catch((err)=>{
			console.log(err)
		})
	}
	useEffect(()=>{
        all_brand();
	},[])
	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = categoriesData.filter(
			(product) => product.name.toLowerCase().includes(term) || product.products.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};
	const delete_category = (id) => {
		Swal.fire({
		  title: "Are you sure?",
		  text: "You won't be able to revert this!",
		  icon: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#3085d6",
		  cancelButtonColor: "#d33",
		  confirmButtonText: "Yes, delete it!",
		}).then((result) => {
		  if (result.isConfirmed) {
			axios
			  .delete(`http://localhost:8080/admin/delete-brand/${id}`, {
				headers: {
				  Authorization: localStorage.getItem("token"),
				},
			  })
			  .then((res) => {
				if (res.data.success) {
				  Swal.fire("Deleted!", res.data.message, "success");
				  all_brand();
				}
			  })
			  .catch((err) => {
				Swal.fire("Error", "Something went wrong!", "error");
				console.error(err);
			  });
		  }
		});
	  };
	  
	return (
		<motion.div
			className='border-[1px] border-[#eee] p-6  mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-700'>Brand List</h2>
				{/* <div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div> */}
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-[16px] font-medium text-gray-700 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-[16px] font-medium text-gray-700 uppercase tracking-wider'>
								Category Products
							</th>
						
							<th className='px-6 py-3 text-left text-[16px] font-medium text-gray-700 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-200'>
						{brands.map((category) => (
							<motion.tr
								key={category._id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									<img
										 src={`http://localhost:8080/images/${category.image}`}
										alt='Product img'
										className='size-10 rounded-[4px]'
									/>
									<p className="text-[16px] font-medium text-gray-700">{category.title}</p>
									
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-[16px] font-medium text-gray-700'>
									{category.numberOfProducts}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-[16px] font-medium text-gray-700'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={24} />
									</button>
									<button className='text-red-400 hover:text-red-300' onClick={()=>{delete_category(category._id)}}>
										<Trash2 size={24} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default Brandtable;

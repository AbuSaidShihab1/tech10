import { Route, Routes, useLocation,Navigate } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import Category from "./pages/Category"
import Addproduct from "./pages/Addproduct";
import AdminLogin from "./pages/AdminLogin";
import Brand from "./pages/Brand";

function App() {
	const location = useLocation();
	const hideSidebar = location.pathname === "/hobet-admin-login";
	const isAdminAuthenticated = localStorage.getItem("admin");
	return (
		<div className='flex h-screen  text-gray-100 overflow-hidden'>
		{/* BG */}
		{/* <div className='fixed inset-0 z-0'>
			<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
			<div className='absolute inset-0 backdrop-blur-sm' />
		</div> */}

		{!hideSidebar && <Sidebar />}
		<Routes>
  <Route path="/hobet-admin-login" element={<AdminLogin />} />
  
  {!isAdminAuthenticated ? (
    <Route path="*" element={<Navigate to="/hobet-admin-login" replace />} />
  ) : (
    <>
 		<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/add' element={<Addproduct />} />
				<Route path='/products/list' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/category/list' element={<Category />} />
				<Route path='/brand/list' element={<Brand />} />
				<Route path='/add-new-category' element={<Category />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
    </>
  )}
</Routes>
		</div>
	);
}

export default App;

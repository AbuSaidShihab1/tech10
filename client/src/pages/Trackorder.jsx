import React,{useState} from 'react'
import Header from '../components/Header'
import axios from 'axios';
import Footer from '../components/Footer';
const Trackorder = () => {
    const [orderId, setOrderId] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
  
    const handleTrack = () => {
      if (!orderId || !email) {
        setError("Both fields are required.");
        return;
      }
      setError("");
      
      axios.post("https://your-api-endpoint.com/track", { orderId, email })
        .then(response => {
          console.log("Tracking Data:", response.data);
        })
        .catch(error => {
          console.error("Error tracking order:", error);
          setError("Sorry, the order could not be found. Please contact us if you are having difficulty finding your order details.");
        });
    };
  return (
    <section className='w-full font-baji'>
      <Header/>
    
      <div className="flex flex-col items-center justify-center h-auto py-[100px]  p-6">
      <h2 className="text-[25px] lg:text-[36px] font-bold text-center mb-[12px]">Track Your Order</h2>
      <p className="text-gray-600 text-center mb-[40px] w-[40%]">
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>
      <div className="flex justify-center space-x-4 mb-[50px]">
        <div>
        <img src="https://ecommax.risingbamboo.com/wp-content/uploads/2023/09/order-tracking.png" alt="Order Tracking Step 4" />
        </div>
      </div>
      <div className=" py-[50px] px-[50px] rounded-lg shadow-md w-full md:w-[80%] lg:w-[70%] xl:w-[40%] bg-gray-100">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <label className="block text-gray-700 font-semibold mb-2">Order ID</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Found in your order confirmation email."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />
        <label className="block text-gray-700 font-semibold mb-2">Billing Number</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            placeholder="Mobile Number you used during checkout."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        />
        <button 
          onClick={handleTrack}
          className="w-full bg-blue-500 text-white py-[10px] rounded-md hover:bg-blue-600 transition">
          TRACK
        </button>
      </div>
    </div>
    <Footer/>
    </section>
  )
}

export default Trackorder

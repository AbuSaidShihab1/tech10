import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-blue-900 py-[70px] w-full px-[150px] flex justify-center items-center font-baji">
      <div className=" w-[80%] m-auto px-6 flex flex-col md:flex-row gap-[60px] items-center md:justify-between space-y-4 md:space-y-0">
        <div className="text-white w-[45%]">
          <h2 className="text-2xl font-bold">Sign Up for Newsletter</h2>
          <p className="mt-2 text-sm">Get E-mail updates about our latest products and special offers.</p>
        </div>
        <form className="flex w-full md:w-[45%]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 py-[15px] px-4 rounded-l-[5px] outline-none"
          />
          <button
            type="submit"
            className="bg-[#F02757]  text-white px-[40px] py-2 rounded-r-md font-semibold hover:bg-pink-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;

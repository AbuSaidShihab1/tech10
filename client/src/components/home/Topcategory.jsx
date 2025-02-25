
export default function TopCategories() {
  return (
    <div className="w-full font-baji px-[20px] md:px-[30px] py-[40px] lg:px-[50px] xl:px-[80px] 2xl:px-[150px]">
      <div className="grid grid-cols-4 gap-4">
        {/* Sidebar */}
        <div
          className="bg-cover  bg-center text-white p-6  bg-[url('https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] "
        >
          <h3 className="text-lg font-bold mb-2">Category</h3>
          <ul className="space-y-2">
            <li>MI headphone</li>
            <li>Bluetooth AirPods</li>
            <li>Music system</li>
            <li>JBL bar 5.1</li>
            <li>Edifier Computer Speaker</li>
            <li>Macbook pro</li>
            <li>Men's watch</li>
            <li>Washing machine</li>
          </ul>
        </div>
        {/* Categories */}
        <div className="col-span-3">
      <h2 className="text-2xl leading-0 font-bold mb-4 text-left">Top Categories</h2>
      <div className=" grid grid-cols-3 gap-4">
          <div className="text-center border-[1px] border-[#eee] p-4 transition-all duration-300 hover:shadow-md">
            <img 
              src="https://template.fullstackdeveloper.co.il/stowaa/assets/images/categories/xcategory_1.png.pagespeed.ic.ntdeefcB00.webp" 
              alt="Headphone" 
              width={200} 
              height={200} 
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 font-semibold text-[20px]">Men's Watches</p>
          </div>
          <div className="text-center border-[1px] border-[#eee] p-4 transition-all duration-300 hover:shadow-md">
            <img 
              src="https://template.fullstackdeveloper.co.il/stowaa/assets/images/categories/xcategory_2.png.pagespeed.ic.AxDBK29XoV.webp" 
              alt="Headphone" 
              width={200} 
              height={200} 
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 font-semibold text-[20px]">IPad</p>
          </div>
          <div className="text-center border-[1px] border-[#eee] p-4 transition-all duration-300 hover:shadow-md">
            <img 
              src="https://template.fullstackdeveloper.co.il/stowaa/assets/images/categories/xcategory_3.png.pagespeed.ic.1kNyuUOuuD.webp" 
              alt="Headphone" 
              width={200} 
              height={200} 
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 font-semibold text-[20px]">IPhone</p>
          </div>
        </div>
        </div>
  
      </div>
    </div>
  );
}

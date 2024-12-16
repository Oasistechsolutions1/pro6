export default function Footer () {
    return (
        <footer className="text-gray-600 body-font bg-[#EEEFFB]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
    <div className="lg:w-1/4 md:w-1/2 w-full px- mb-6">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-[35px] mb-3">
        Hekto
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            
            <input
              type="text"
              placeholder="Enter Email Address"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Contact Info</p>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Bitters chicharrones fanny pack waistcoat green juice
        </p>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10 space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Laptops & Computers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Cameras & Photography</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Smart Phones & Tablets</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Video Games & Consoles</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        Customer Care
        </h2>
        <nav className="list-none mb-10 space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">My Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discount</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Orders History</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        Pages
        </h2>
        <nav className="list-none mb-10 space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Browse the Shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Category</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Pre-Built Pages</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">WooCommerce Pages</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          ©Webecy - All Rights Reserved
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       
        <a className="ml-3 text-gray-500">
          <img src="Group 202.png" alt="" />
        </a>
        <a className="ml-3 text-gray-500">
          <img src="Group 203.png" alt="" />
        </a>
        <a className="ml-3 text-gray-500">
         <img src="Group 204.png" alt="" />
        </a>
      </span>
    </div>
  </div>
</footer>

    )
}
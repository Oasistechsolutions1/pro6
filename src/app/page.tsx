
import ProductCard from "./components/ProductCard"
import Card1 from "./components/card1"
import Card2 from "./components/card2"
import Card3 from "./components/card3"
import Imagecom from "./components/image"
import Blogcard from "./components/blogcard"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <section className="bg-[#F2F0FF] md:flex">
        <div className="flex ">
          <img className=" md:left-3 lg:left-12 xl:left-16 2xl:left-[70px] h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[387px]" src="image 32.png" alt="lamp" />
          <div className="md:my-10 xl:my-40">
            <h1 className="text-[#FB2E86] text-[12px] mt-3">Best Furniture For Your Castle....</h1>
            <p className="text-[30px] font-bold md:text-[40px] 2xl:text-[53px]">
              New Furniture Collection
              <br className="" />
              Trends in 2020
            </p>
            <p className="text-[#8A8FB9] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
            <button className="text-white bg-[#FB2E86] rounded-sm px-6 p-1 mt-4 lg:mt-7 ">
              Shop Now
            </button>

          </div>
        </div>

        <div className="my-5 flex justify-center xl:my-7 ">
          <img className="w-[400px]  md:w-[300px] lg:w-[500px] 2xl:w-[706px]" src="sofa promotional header.png" alt="" />
        </div>

      </section>
      <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">Featured Products</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4  ">
        <div >
          <ProductCard
            image="image 1168.png"
            name="Cantilever chair"
            code="Code - Y523201"
            price="$42.00"
          />
        </div>
        <div>
          <ProductCard
            image="image 1168.png"
            name="Cantilever chair"
            code="Code - Y523201"
            price="$42.00"
          />
        </div>
        <div >
          <ProductCard
            image="image 1168.png"
            name="Cantilever chair"
            code="Code - Y523201"
            price="$42.00"
          />
        </div>
        <div >
          <ProductCard
            image="image 1168.png"
            name="Cantilever chair"
            code="Code - Y523201"
            price="$42.00"
          />
        </div>
      </div>
      <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">Leatest Products</h1>
      <nav className="">
        <ul className="flex gap-5 justify-center text-[#151875] active:text-[#FB2E86] my-8">
          <li><Link href="#">New Arrival</Link></li>
          <li><Link href="#">Best Seller</Link></li>
          <li><Link href="#">Featured</Link></li>
          <li><Link href="#">Special Offer</Link></li>
        </ul>
      </nav>
      <div  className=" grid grid-cols-1 md:grid-cols-2 justify-items-center xl:grid-cols-3   ">
        <div>
          <Card1
          image="Image 1166.png"
          name="Comfort Handy Craft"
          price="$42.00"
          deleted="$65.00"
          />
        </div>
        <div>
          <Card1
          image="Image 1166.png"
          name="Comfort Handy Craft"
          price="$42.00"
          deleted="$65.00"
          />
        </div>
        <div>
          <Card1
          image="Image 1166.png"
          name="Comfort Handy Craft"
          price="$42.00"
          deleted="$65.00"
          />
        </div>
        <div>
          <Card1
          image="Image 1166.png"
          name="Comfort Handy Craft"
          price="$42.00"
          deleted="$65.00"
          />
        </div>
        <div>
          <Card1
          image="Image 1166.png"
          name="Comfort Handy Craft"
          price="$42.00"
          deleted="$65.00"
          />
        </div>
        <div>
          <Card1
          image="Image 1166.png"
          name="Comfort Handy Craft"
          price="$42.00"
          deleted="$65.00"
          />
        </div>
      </div>
      <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">What Shopex Offer!</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4  ">
        <div>
          <Card2
          image="Group.png"
          name="24/7 Support"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
        <div>
          <Card2
          image="Group.png"
          name="24/7 Support"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
        <div>
          <Card2
          image="Group.png"
          name="24/7 Support"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
        <div>
          <Card2
          image="Group.png"
          name="24/7 Support"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </div>

      <div className="mx-auto md:flex  justify-center items-center bg-slate-200">
      <div className="my-5 flex justify-center xl:my-7 ">
          <img className="w-[400px]  md:w-[300px] lg:w-[500px] 2xl:w-[706px]" src="sofa promotional header.png" alt="" />
        </div>
        <div>
        <div className="max-w-[450px] mx-auto md:my-10">
            <h1 className="text-[#FB2E86] text-[12px] mt-3">Best Furniture For Your Castle....</h1>
            <p className="text-[30px] font-bold md:text-[27px] 2xl:text-[35px]">
              New Furniture Collection
              <br className="" />
              Trends in 2020
            </p>
            <div className="flex items-center my-3">
            <img className="mr-3 w-2 h-2" src="Ellipse 65.png" alt="" />
            <p className="text-[#8A8FB9] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
            </div>
            <div className="flex items-center my-3">
            <img className="mr-3 w-2 h-2" src="Ellipse 65.png" alt="" />
            <p className="text-[#8A8FB9] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
            </div>
            <div className="flex items-center my-3">
            <img className="mr-3 w-2 h-2" src="Ellipse 65.png" alt="" />
            <p className="text-[#8A8FB9] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
            </div>
            <div className="flex items-center text-center mt-4 pb-4 ">

            <button className="text-white bg-[#FB2E86] rounded-sm px-6 py-2  mr-2  ">
              Add to cart
            </button>
            <div>
            <p className="text-xs">B&B Italian Sofa </p>
            <p className="text-sm">$32.00</p>
            </div>
            </div>

          </div>
        </div>
        
      </div>
      <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">Trending Products</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4  ">
        <div>
            <Card3
            image="Image 1171.png"
            name="Cantilever chair"
            price="$26.00 "
            deleted="$42.00"
            />
        </div>
        <div>
            <Card3
            image="Image 1171.png"
            name="Cantilever chair"
            price="$26.00 "
            deleted="$42.00"
            />
        </div>
        <div>
            <Card3
            image="Image 1171.png"
            name="Cantilever chair"
            price="$26.00 "
            deleted="$42.00"
            />
        </div>
        <div>
            <Card3
            image="Image 1171.png"
            name="Cantilever chair"
            price="$26.00 "
            deleted="$42.00"
            />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center xl:grid-cols-3 space-y-3">
          <div  className=" xl:max-w-[370px] max-w-[370px] bg-[#FFF6FB] p-5">
              <p className="text-[#151875] font-semibold">23% off in all products</p>
              <div className="flex">
                <a className="text-[#FB2E86] underline" href="#">Shop Now</a>
                <img src="Image 1162.png" alt="" />
              </div>
          </div>
          <div className="p-5 bg-slate-200">
          <p className="text-[#151875] font-semibold">23% off in all products</p>
          <a className="text-[#FB2E86] underline" href="#">View Collection</a>
          <img className="float-right" src="Image 1161.png" alt="" />
          </div>
          <div className=" space-y-7">
          <div className="flex justify-center items-center">
            <img className="bg-slate-200 px-3 p-0 mr-1" src="Image 30.png" alt="" />
            <div>
            <p>Executive Seat chair</p>
            <p>$32.00</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="bg-slate-200 px-3 p-0 mr-1" src="Image 30.png" alt="" />
            <div>
            <p>Executive Seat chair</p>
            <p>$32.00</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="bg-slate-200 px-3 p-0 mr-1" src="Image 30.png" alt="" />
            <div>
            <p>Executive Seat chair</p>
            <p>$32.00</p>
            </div>
          </div>
          </div>
      </div>
      <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">Discount Item</h1>
      <nav className="">
        <ul className="flex gap-5 justify-center text-[#151875] active:text-[#FB2E86] my-8">
          <li className="text-[#FB2E86] underline"><Link href="#">Wood Chair</Link></li>
          <li><Link href="#">Plastic Chair</Link></li>
          <li><Link href="#">Sofa Colletion</Link></li>
        </ul>
      </nav>
      <section className=" justify-center md:flex">
        <div className="flex ">
          <div className="md:my-10 xl:my-40">
          <p className="text-[30px] font-bold md:text-[40px] 2xl:text-[53px]">
          20% Discount Of All Products
            </p>
            <h1 className="text-[#FB2E86] text-[21px] mt-3">Eams Sofa Compact</h1>
            
            <p className="text-[#B7BACB] text-[17px] max-w-[650px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
              in phasellus non in justo.</p>
              <div className="flex space-x-7">
              <div className="my-3 space-y-3">
                <p className="flex items-center text-[#B7BACB]"><img className="mr-2" src="Vector.png" alt="" />Material expose like metals</p>
                <p className="flex items-center text-[#B7BACB]"><img className="mr-2" src="Vector.png" alt="" />Material expose like metals</p>
              </div>
              <div className="my-3 space-y-3">
                <p className="flex items-center text-[#B7BACB]"><img className="mr-2" src="Vector.png" alt="" />Material expose like metals</p>
                <p className="flex items-center text-[#B7BACB]"><img className="mr-2" src="Vector.png" alt="" />Material expose like metals</p>
              </div>
              </div>
            <button className="text-white bg-[#FB2E86] rounded-sm px-6 p-1 mt-4 lg:mt-7 ">
              Shop Now
            </button>

          </div>
        </div>

        <div className="my-5 flex justify-center xl:my-7 ">
          <img className="w-[400px]  md:w-[300px] lg:w-[500px] 2xl:w-[706px]" src="tortuga-01-b 1.png" alt="" />
        </div>

      </section>
      <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">Top Categories</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4  ">
        <div>
            <Blogcard
            image="Image 20.png"
            name="Mini LCV chair"
            price="$56.00"
            />
        </div>
        <div>
            <Blogcard
            image="Image 20.png"
            name="Mini LCV chair"
            price="$56.00"
            />
        </div>
        <div>
            <Blogcard
            image="Image 20.png"
            name="Mini LCV chair"
            price="$56.00"
            />
        </div>
        <div>
            <Blogcard
            image="Image 20.png"
            name="Mini LCV chair"
            price="$56.00"
            />
        </div>
      </div>
      <div className=" relative  object-cover">
        <img className="" src="Rectangle 102.png" alt="" />
        <div className=" absolute z-10 top-[7%] md:top-[28%] sm:top-[20%] w-full text-center  ">
        <h1 className=" text-[#151875] text-base leading-6 font-semibold text-center xl:text-[35px] xl:leading-[54px]">Get Latest Update By Subscribe <br />
        0ur Newslater</h1>
        <button className="text-white text-center bg-[#FB2E86] rounded-sm px-4 py-2 z-10 ">
              Shop Now
            </button>
        </div>
      </div>
      
        <Imagecom />
        <h1 className="text-2xl text-center text-[#151875] font-bold md:text-3xl xl:text-[42px] mt-3 md:mt-5 xl:mt-20 mb-10  ">Latest Blog</h1>

        {/* blog card started */}

        <div  className=" grid grid-cols-1 md:grid-cols-2 justify-items-center  xl:grid-cols-3   ">
        <div className=" 2xl:max-w-[370px] max-w-[370px]  justify-between h-[493px] flex-col gap-5">
      <img src="JIUjvqe2ZHg.png" alt="" className="" />
      <div className='flex space-x-8 justify-between mt-4'>
        <div className='flex space-x-2'>
          <img src="Vector (1).png" alt="" />
          <p className="text-[#151875]" >SaberAli</p>
        </div>
        <div className='flex space-x-2'>
          <img src="Vector (2).png" />
          <p className="text-[#151875]">21 August,2020</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between">
      <h3 className='text-[#151875] font-bold'>Top esssential Trends in 2021</h3>
      <p className='text-[#72718F] text-base'>More off this less hello samlande lied much
      over tightly circa horse taped mightly</p>
      <p> <a className="text-[#151875] underline active:text-[#FB2E86]" href="#">Read More</a></p>
      </div>
      
    </div>
    <div className=" 2xl:max-w-[370px] max-w-[370px]  justify-between h-[493px] flex-col gap-5">
      <img src="JIUjvqe2ZHg.png" alt="" className="" />
      <div className='flex space-x-8 justify-between mt-4'>
        <div className='flex space-x-2'>
          <img src="Vector (1).png" alt="" />
          <p className="text-[#151875]" >SaberAli</p>
        </div>
        <div className='flex space-x-2'>
          <img src="Vector (2).png" />
          <p className="text-[#151875]">21 August,2020</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between">
      <h3 className='text-[#151875] font-bold'>Top esssential Trends in 2021</h3>
      <p className='text-[#72718F] text-base'>More off this less hello samlande lied much
      over tightly circa horse taped mightly</p>
      <p> <a className="text-[#151875] underline active:text-[#FB2E86]" href="#">Read More</a></p>
      </div>
      
    </div>
    <div className=" 2xl:max-w-[370px] max-w-[370px]  justify-between h-[493px] flex-col gap-5">
      <img src="JIUjvqe2ZHg.png" alt="" className="" />
      <div className='flex space-x-8 justify-between mt-4'>
        <div className='flex space-x-2'>
          <img src="Vector (1).png" alt="" />
          <p className="text-[#151875]" >SaberAli</p>
        </div>
        <div className='flex space-x-2'>
          <img src="Vector (2).png" />
          <p className="text-[#151875]">21 August,2020</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between">
      <h3 className='text-[#151875] font-bold'>Top esssential Trends in 2021</h3>
      <p className='text-[#72718F] text-base'>More off this less hello samlande lied much
      over tightly circa horse taped mightly</p>
      <p> <a className="text-[#151875] underline active:text-[#FB2E86]" href="#">Read More</a></p>
      </div>
      
    </div>
        </div>
        
    </div>
  )
}
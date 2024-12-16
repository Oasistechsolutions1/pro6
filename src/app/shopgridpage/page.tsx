import ProductCard from "../components/ProductCard"

export default function Shopgriddefalt () {
    return (
        <div className="" >
         <div className=" md:flex space-x-4 justify-items-center items-center max-w-[1170px] mx-auto justify-around my-20">
            <div>
                <p className="text-[#151875] text-lg md:text-[22px] font-bold">Ecommerce Acceories & Fashion item </p>
                <p className="text-[#8A8FB9] text-sm">About 9,620 results (0.62 seconds)</p>
            </div>
            <div className=" text-center">
                <span>Per Page:</span>
                <input className="border max-w-16" type="text" />
            </div>
            <div>
                <span>Sort By:</span>
                <select className="border">
                <option className="text-[#8A8FB9]" value="">Best Match</option>
            </select>
            </div>
            <div className="flex space-x-4">
                <div className="flex items-center">
                    <p>View:</p>
                    <img src="clarity_grid-view-solid.png" alt="" />
                    <img src="fa-solid_list.png" alt="" />
                </div>
                <input className="border max-w-16" type="text" />
            </div>
         </div>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4  ">
        <div >
          <ProductCard
            image="image 1168.png"
            name="Cantilever chair"
            code="Group 44.png"
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
            code=""
            price="$42.00"
          />
        </div>
      </div>
        </div>
    )
}
"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import  {useState}  from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Bnavbar () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-between lg:justify-evenly my-2 lg:my-[19px] mx-3">
        <button className=" hamburger md:hidden "
        onClick={() => setIsOpen(!isOpen)}
        >
            < GiHamburgerMenu />
        </button>
        <div className="flex items-center gap-8">
        <h1 className=" hidden md:block text-[34px] text-[#0D0E43] font-bold leading-[34px]">Hekto</h1>
        <nav className={`${(isOpen ? "block" : "hidden")} md:block md:space-x-3 flex flex-col top-32 left-0`}>
            <select className="text-[#FB2E86]">
                <option value=""><Link className=" cursor-pointer" href="#">Home</Link></option>
            </select>
        <Link href="#">Pages</Link>
        <Link href="#">Products</Link>
        <Link href="#">Blog </Link>
        <Link href="#">Shop</Link>
        <Link href="#">Contact</Link>
        </nav>
        </div>
        <div className="flex">
        <input type="text" className="border-[#E7E6EF] border-l-2 border-b-2 border-t-2" />
        <button className="bg-[#FB2E86] w-[40px] text-center justify-items-center">
        <CiSearch />
        </button>
        </div>
        </div>
    )
}
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail, MdOutlinePhoneInTalk, MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar () {
    return (
        <div className="bg-[#7E33E0] justify-items-center text-white lg:flex lg:justify-evenly">
            <div className=" my-2 gap-2 items-center sm:flex">
                <div className="flex justify-center items-center gap-1">
                <MdOutlineEmail />
                <span>khanballpoolgamer@gmail.com</span>
                </div>
           <div className="flex justify-center items-center gap-1">
           <MdOutlinePhoneInTalk />
           <span>0335-1260612</span>
           </div>
            
            </div>
            <div className="flex bg-[#7E33E0] gap-2 items-center">
                <select className="bg-[#7E33E0]" name="" id="">
                    <option value="English">English</option>
                </select>
                <select className="bg-[#7E33E0]" name="" id="">
                    <option value="USD">USD</option>
                </select>
                    <span>Login</span>
                    <GoPerson />
                    <div className="flex items-center">
                    <span>Wishlist</span>
                    <CiHeart />
                    </div>
                    < MdOutlineShoppingCart />
            </div>
        </div>
    )
}



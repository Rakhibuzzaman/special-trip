import { useState } from "react";
import {FaBars} from "react-icons/fa"
import { FaFacebook, FaTwitter,FaGoodreadsG, FaInstagram} from "react-icons/fa"


const Navbar = () => {
    const [nav ,setNav]= useState(false);
    
    const handlNav= ()=>{
        setNav(!nav)    
    }
    
    return (
        <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-800/80" >
            <ul className="hidden  sm:flex px-4 ">
                <li><a href="/">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#cotact">Contact</a></li>
            </ul>
            <div className="flex justify-between">
                <FaFacebook className="mx-4"/>
                <FaTwitter className="mx-4"/>
                <FaGoodreadsG className="mx-4"/>
                <FaInstagram className="mx-4"/>
            </div>
            {/* hamberger icon */}
            <div onClick={handlNav} className="sm:hidden z-10">
                <FaBars size={20} className="mr-4 cursor-pointer"/>
            </div>
            {/* mobile menu */}
            <div className={nav?"overflow-y-hidden sm:hidden ease-in duration-300  absolute text-gray-400 left-0 top-0 w-full h-screen bg-black/90   px-4 py-7 flex flex-col":"absolute top-0 h-screen left-[-100%] ease-in duration-500"}>
                <ul className="h-full w-full text-center pt-12 text-white">
                    <li className="text-2xl py-8"><a href="/">Home</a></li>
                    <li className="text-2xl py-8"><a href="#gallery">Gallery</a></li>
                    <li className="text-2xl py-8"><a href="#deals">Deals</a></li>
                    <li className="text-2xl py-8"><a href="#cotact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
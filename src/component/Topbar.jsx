import {AiFillPhone, AiOutlineClockCircle} from "react-icons/ai"
import {BsChatSquareDots} from "react-icons/bs"

const Topbar = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2">
           <div className="flex items-center">
                <BsChatSquareDots size={20} className=" text-[var(--primary-dark)] mr-2" />         
                <h1 className=" text-xl font-bold text-gray700">Welcome</h1>
           </div>
           <div className="flex">
                <div className="hidden md:flex items-center px-6 ">
                    <AiOutlineClockCircle size={20} className=" text-[var(--primary-dark)] mr-2"/>
                    <p className="text-sm text-gray-700"> 9am-5pm</p>
                </div>  
                <div className="hidden md:flex items-center px-6 ">                   
                    <AiFillPhone size={20} className="text-[var(--primary-dark)] mr-2"/>
                    <p className="text-sm text-gray-700">+99 7232-87871</p>
                </div>   
                <button>Get a free Quite</button>  
           </div>
        </div>
    );
};
export default Topbar;
import {BsChatSquareDots} from "react-icons/bs"

const Footer = () => {
    return (
        <div className="max-w-[1140px] flex items-center justify-center py-4 ">
            <BsChatSquareDots className=" text-[var(--primary-dark)] mr-2"/>
            <h2 className=" text-gray-700">WEEKAMARY</h2>
        </div>
    );
};

export default Footer;
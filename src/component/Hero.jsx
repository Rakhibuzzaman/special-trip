import nature from "./img/nature.jpg"

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img src={nature} alt="" className="w-full h-full object-cover" />
            <div className="max-w-[1140px] m-auto">
                <div className=" absolute top-[40%] w-full max-w-[600px] h-full flex flex-col p-4 text-white">
                    <h1 className="font-bold text-4xl">Find your special trip</h1>
                    <h2 className=" text-4xl italic py-4">Width weekaway</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, deleniti. Perferendis ipsum ipsa provident, nam fugit cupiditate voluptates sequi esse.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
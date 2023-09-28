import nature from "./img/nature.jpg"

const Contuct = () => {
    return (
        <div id="cotact" className=" max-w-[1140px] m-auto p-4 py-16">
            <h2 className="text-center  text-gray-700">Send us a message</h2>
            <p className="text-center  text-gray-700 py-4">We stand by</p>
            <div className="grid md:grid-cols-2 py-4">
              <img src={nature} className="w-full md:h-full p-2 max-h-[500px] object-cover" alt="" />
              <form action="" className="grid grid-cols-2">
                <input type="text" className="border p-2 m-2"  placeholder=" Fast name"/>
                <input type="text" className="border p-2 m-2"  placeholder=" Last name"/>
                <input type="text" className="border p-2 m-2"  placeholder=" Email"/>
                <input type="text"  className="border p-2 m-2" placeholder="  Phon"/>
                <input type="text" className="border p-2 m-2 col-span-2"  placeholder=" Addrage"/>
                <textarea name=""  className="border p-2 m-2 col-span-2" id="" cols="30" rows="10"></textarea>
                <button type="submite"  className="m-2 col-span-2">Submit</button>
              </form>
            </div>

        </div>
    );
};

export default Contuct;
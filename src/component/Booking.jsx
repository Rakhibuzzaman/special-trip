

const Booking = () => {
    return (
        <div id="deals" className="max-w-[1140px]  m-auto p-4">
            <form className="lg:flex lg:justify-between w-full items-center">
                <div className=" flex flex-col my-2 py-2">
                    <label htmlFor="">Distination</label>
                    <select className=" lg:w-[300px] md:w-full border  rounded-md p-2">
                        <option value="">Sent martin</option>
                        <option value="">Sent martin</option>
                        <option value="">Sent martin</option>
                        <option value="">Sent martin</option>
                        <option value="">Sent martin</option>
                   
                    </select>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:mx-w-[250px] my-2 p-2 ">
                        <label htmlFor="">Check in</label>
                        <input type="date" className=" border rounded-md p-2" />
                    </div>
                    <div  className="flex flex-col w-full lg:mx-w-[250px] my-2 p-2 ">
                        <label htmlFor="">check out</label>
                        <input type="date"  className=" border rounded-md p-2" />
                    </div>
                </div>
                <div className=" flex flex-col w-full my-2 p-2">
                    <label htmlFor="">Search</label>
                    <button className=" w-full">Reates & aviablabletis</button>
                </div>
            </form>
        </div>
    );
};

export default Booking;
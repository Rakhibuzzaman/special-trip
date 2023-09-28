import seeunder4 from './img/seeunder (4).jpg'
import seeunder6 from './img/seeunder (6).jpg'
import seeunder7 from './img/seeunder (7).jpg'


const Activites = () => {
    return (
        <div className=' max-w-[1140px] m-auto w-full  md:flex mt-[-74px] text-white'>
            <div className=' relative p-4'>
                <h3 className=' absolute z-10 top-[50%] left-[50%]  font-bold text-2xl  translate-x-[-50%] translate-y-[-50%] '>Restors</h3>
                <img src={seeunder4} className=' w-full h-full object-cover  relative border-4 border-white shadow-lg' alt="img" />
            </div>
            <div className=' relative p-4'>
                <h3 className=' absolute z-10 top-[50%] left-[50%]  font-bold text-2xl  translate-x-[-50%] translate-y-[-50%]' >Restors</h3>
                <img src={seeunder6}  className=' w-full h-full object-cover  relative border-4 border-white shadow-lg' alt="img" />
            </div>
            <div className=' relative p-4'>
                <h3 className='  absolute z-10 top-[50%] left-[50%]  font-bold text-2xl  translate-x-[-50%] translate-y-[-50%]'>Restors</h3>
                <img src={seeunder7}  className=' w-full h-full object-cover  relative border-4 border-white shadow-lg' alt="img" />
            </div>
            <div className=' relative p-4'>
                <h3 className=' absolute z-10 top-[50%] left-[50%]  font-bold text-2xl  translate-x-[-50%] translate-y-[-50%]'>Restors</h3>
                <img src={seeunder4}  className=' w-full h-full object-cover  relative border-4 border-white shadow-lg' alt="img" />
            </div>
        </div> 
    );
};

export default Activites;
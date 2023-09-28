import pc from './img/4102879_971.jpg'

const Gallery = () => {
    return (
        <div id='gallery' className="max-w-[1140px] m-auto px-4 py-18 ">

             <h2 className='text-center p-4'>Gallery</h2>

             <div className='grid  sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img src={pc} className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <img src={pc} className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <img src={pc} className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <img src={pc} className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <img src={pc} className='w-full h-full object-cover' alt="" />
                </div>
             </div>
        </div>
    );
};

export default Gallery;
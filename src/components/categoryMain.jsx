import React from 'react';

const CategoryMain = () => {

    let data = [
        { head: "RESIDENTIAL SPACES", desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation." },
        { head: "COMMERCIAL CONTRUCTION", desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation." },
        { head: "ARCHITECTURAL SPACES", desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation." },
    ];

    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-screen bg-fixed category_main_image cursor-pointer'>
            {data.map((x, i) => (
                <div key={i} className='flex flex-col items-center gap-3 justify-center relative group border border-[#ffffff3d] '>

                    <div className='absolute inset-0 transition-all duration-300 backdrop-blur-md lg:backdrop-blur-none lg:group-hover:backdrop-blur-[21px]'></div>

                    <div className='z-[10] flex flex-col gap-1 sm:gap-2 translate-y-6 group-hover:translate-y-0 transition-all duration-300'>
                        <div className='text-white text-[40px] tracking-wider leading-10 uppercase nigelina whitespace-pre-line text-center'>
                            {x.head?.replace(" ", "\n")}
                        </div>
                    </div>

                    <div className='z-[10] w-[50%] text-white text-[12px] font-extralight opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-[1500ms text-center leading-4'>
                        {x.desc}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CategoryMain;
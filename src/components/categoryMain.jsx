import React from 'react';

const CategoryMain = () => {
    let data = [
        { head: "RESIDENTIAL SPACES", desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation." },
        { head: "COMMERCIAL CONSTRUCTION", desc: "Experience high-end commercial spaces tailored for functionality and aesthetics. Our innovative designs ensure a professional yet inviting atmosphere." },
        { head: "ARCHITECTURAL SPACES", desc: "Step into masterfully designed spaces that redefine modern architecture. Every detail is crafted to enhance aesthetics and functionality." },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen bg-fixed category_main_image">
            {data.map((x, i) => (
                <div 
                    key={i} 
                    className="flex flex-col items-center gap-3 justify-center relative border border-[#ffffff3d] p-6 transition-all"
                >
                    {/* Background Blur Removed on Mobile, Available on Larger Screens */}
                    <div className="absolute inset-0 transition-all duration-300 lg:group-hover:backdrop-blur-[21px]"></div>

                    {/* Title */}
                    <div className="z-10 flex flex-col gap-1 sm:gap-2">
                        <div className="text-white text-[28px] sm:text-[34px] md:text-[40px] tracking-wider leading-10 uppercase nigelina text-center whitespace-pre-line">
                            {x.head?.replace(" ", "\n")}
                        </div>
                    </div>

                    {/* Description (Always Visible, No Hover Effect on Mobile) */}
                    <div className="z-10 w-[80%] sm:w-[60%] text-white text-[14px] sm:text-[12px] font-light text-center leading-5 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 sm:group-hover:duration-[1500ms]">
                        {x.desc}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryMain;

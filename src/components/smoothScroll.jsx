import React from 'react'
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

import hs1 from "../assets/hs-1.png";
import { ArrowRight } from "lucide-react";
import slider1 from "../assets/slider-1.jpg";

const SmoothScroll = () => {
    return (
        <div className=''>
            {
                [{}].map((_, index) => (
                    <div key={index} className="grid grid-cols-2 h-screen relative">
                        <img src={slider1} className="absolute bottom-[9%] left-[37%] w-[400px] h-[300px] z-[10]" />
                        <div className="flex items-center">
                            <div className="flex flex-col gap-3 relative">
                                <div className="w-52 h-[1.5px] bg-[#707070]" />
                                <div className="flex flex-col gap-2 pl-20 w-[50%]">
                                    <div className="text-[#515151] text-[11px] uppercase">
                                        {index} privacy & space
                                    </div>
                                    <div className="text-[#515151] text-[45px] nigelina leading-12 w-[80%]">
                                        EXPLORE OUR HOME
                                    </div>
                                    <div className="text-[#515151] text-[13px]">
                                        From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.
                                    </div>
                                    <button className="cursor-pointer flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300">
                                        <span className="text-[10px] font-medium">View More</span>
                                        <ArrowRight size={13} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={hs1} alt="" className="object-cover w-full h-full" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SmoothScroll

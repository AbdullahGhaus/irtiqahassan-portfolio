import React from 'react'

import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"
import { ArrowRight } from 'lucide-react';

const PageTwoSectionTwo = () => {
    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-8 flex flex-col'>
                <div className='grid grid-cols-2 h-full'>
                    <img className='object-cover w-full h-full' src={hs1} />
                    <img className='object-cover w-full h-full' src={hs1} />
                </div>
                <div className='grid grid-cols-3'>
                    <img className='object-cover w-full h-full' src={test2} />
                    <img className='object-cover w-full h-full' src={test3} />
                    <img className='object-cover w-full h-full' src={test4} />
                </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center gap-3">
                <div className="flex flex-col gap-2 pl-20 ">
                    <div className="text-[#515151] text-[11px] uppercase relative">
                        <div className="absolute -top-5 right-0 w-full h-[1.5px] bg-[#707070]" />
                        privacy & space
                    </div>
                    <div className="text-[#515151] text-[45px] nigelina leading-12 w-[60%]">
                        EXPLORE OUR HOME
                    </div>
                    <div className="text-[#515151] text-[13px] w-[60%]">
                        From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.
                    </div>
                    <div className='p-2' />
                    <button className="flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300">
                        <span className="text-[10px] font-medium">View More</span>
                        <ArrowRight size={13} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageTwoSectionTwo

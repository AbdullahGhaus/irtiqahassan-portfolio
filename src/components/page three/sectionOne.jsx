import React from 'react'
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"
import horizontalImage from "../../assets/horizontalImage.png"
import residentalbg from "../../assets/residential-bg.jpg"

const PageThreeSectionOne = () => {

    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-2 h-full'>
                <img className='object-cover w-full h-full' src={hs1} />
                <img className='object-cover w-full h-full' src={residentalbg} />
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-8 flex flex-col'>
                    <div className='grid grid-cols-2'>
                        <img className='object-cover w-full h-full' src={test2} />
                        <img className='object-cover w-full h-full' src={test3} />
                    </div>
                    <div>
                        <img className='object-cover w-full h-full' src={test4} />
                    </div>
                </div>
                <div className='col-span-4'>
                    <img className='object-cover w-full h-full' src={horizontalImage} />
                </div>
            </div>
        </div>
    )
}

export default PageThreeSectionOne




import React from 'react'
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";
import horizontalImage from "../../assets/horizontalImage.png";
import residentalbg from "../../assets/residential-bg.jpg";
import { Image } from 'antd';

const PageThreeSectionOne = () => {
    return (
        <div className=" flex flex-col">
            <div className="grid grid-cols-2 h-1/2">
                <Image height={"100%"} width={"100%"} className="max-w-full object-cover" src={hs1} />
                <Image height={"100%"} width={"100%"} className="max-w-full object-cover" src={residentalbg} />
            </div>
            <div className="grid grid-cols-12 h-1/2">
                <div className="col-span-8 flex flex-col">
                    <div className="grid grid-cols-2 h-1/2">
                        <Image height={"100%"} width={"100%"} className="max-w-full object-cover" src={test2} />
                        <Image height={"100%"} width={"100%"} className="max-w-full object-cover" src={test3} />
                    </div>
                    <div className="h-1/2">
                        <Image height={"100%"} width={"100%"} className="max-w-full object-cover" src={test4} />
                    </div>
                </div>
                <div className="col-span-4">
                    <Image height={"100%"} width={"100%"} className="max-w-full object-cover" src={horizontalImage} />
                </div>
            </div>
        </div>
    );
};

export default PageThreeSectionOne;

import React from 'react'
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";
import horizontalImage from "../../assets/horizontalImage.png";
import residentalbg from "../../assets/residential-bg.jpg";

const PageThreeSectionOne = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-2 h-1/2">
                <img className="max-w-full object-cover w-full h-full transition-transform duration-400 hover:scale-115" src={hs1} />
                <img className="max-w-full object-cover w-full h-full transition-transform duration-400 hover:scale-115" src={residentalbg} />
            </div>
            <div className="grid grid-cols-12 h-1/2">
                <div className="col-span-8 flex flex-col">
                    <div className="grid grid-cols-2 h-1/2">
                        <img className="max-w-full object-cover w-full h-full transition-transform duration-400 hover:scale-115" src={test2} />
                        <img className="max-w-full object-cover w-full h-full transition-transform duration-400 hover:scale-115" src={test3} />
                    </div>
                    <div className="h-1/2">
                        <img className="max-w-full object-cover w-full h-full transition-transform duration-400 hover:scale-115" src={test4} />
                    </div>
                </div>
                <div className="col-span-4">
                    <img className="max-w-full object-cover w-full h-full transition-transform duration-400 hover:scale-115" src={horizontalImage} />
                </div>
            </div>
        </div>
    );
};

export default PageThreeSectionOne;

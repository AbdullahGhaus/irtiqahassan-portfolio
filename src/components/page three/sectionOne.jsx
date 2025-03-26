import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";
import horizontalImage from "../../assets/horizontalImage.png";
import residentalbg from "../../assets/residential-bg.jpg";

const PageThreeSectionOne = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="flex flex-col">
            {/* Image Grid */}
            <div className="grid grid-cols-2 h-1/2">
                <img onClick={() => handleImageClick(hs1)} className="max-w-full object-cover cursor-pointer" src={hs1} style={{ height: "100%", width: "100%" }} />
                <img onClick={() => handleImageClick(residentalbg)} className="max-w-full object-cover cursor-pointer" src={residentalbg} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="grid grid-cols-12 h-1/2">
                <div className="col-span-8 flex flex-col">
                    <div className="grid grid-cols-2 h-1/2">
                        <img onClick={() => handleImageClick(test2)} className="max-w-full object-cover cursor-pointer" src={test2} style={{ height: "100%", width: "100%" }} />
                        <img onClick={() => handleImageClick(test3)} className="max-w-full object-cover cursor-pointer" src={test3} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="h-1/2">
                        <img onClick={() => handleImageClick(test4)} className="max-w-full object-cover cursor-pointer" src={test4} style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>
                <div className="col-span-4">
                    <img onClick={() => handleImageClick(horizontalImage)} className="max-w-full object-cover cursor-pointer" src={horizontalImage} style={{ height: "100%", width: "100%" }} />
                </div>
            </div>

            {/* Full-Screen Overlay with Animation */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.img 
                            src={selectedImage} 
                            className="w-screen h-screen object-contain"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PageThreeSectionOne;

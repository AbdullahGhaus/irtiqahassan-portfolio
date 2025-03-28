import React, { useState } from "react";
import { motion } from "framer-motion";
import hs1 from "../../assets/hs-1.png";
// import test2 from "../../assets/test-2.jpg";


const PageTwoSectionThree = () => {
    const [hoveredFirstGrid, setHoveredFirstGrid] = useState(null);
    const [hoveredSecondGrid, setHoveredSecondGrid] = useState(null);

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-center px-5 pt-5 md:!mt-10">
                <span className="text-[45px] nigelina uppercase text-[#515151] relative">
                    <span className="absolute top-[50%] -left-20 w-[50px] h-[2px] bg-[#C0A07A]" />
                    <span className="hidden md:flex absolute top-[50%] -right-20 w-[50px] h-[2px] bg-[#C0A07A]" />
                    Explore your retreat
                </span>
            </div>
            <div className="h-full flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col gap-3 w-[75%] h-[80%] max-h-full overflow-hidden">
                    <div className="flex relative h-1/2 gap-3 transition-all duration-300">
                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${hs1})` }}
                            initial={{ width: "50%" }}
                            animate={{
                                width:
                                    hoveredFirstGrid === "left"
                                        ? "55%"
                                        : hoveredFirstGrid === "right"
                                            ? "45%"
                                            : "50%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredFirstGrid("left")}
                            onMouseLeave={() => setHoveredFirstGrid(null)}
                        >
                            {hoveredFirstGrid === "left" && (
                                <motion.div
                                    className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            )}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[2] uppercase text-white">
                                Residential
                            </span>
                        </motion.div>

                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${hs1})` }}
                            initial={{ width: "50%" }}
                            animate={{
                                width:
                                    hoveredFirstGrid === "right"
                                        ? "55%"
                                        : hoveredFirstGrid === "left"
                                            ? "45%"
                                            : "50%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredFirstGrid("right")}
                            onMouseLeave={() => setHoveredFirstGrid(null)}
                        >
                            {hoveredFirstGrid === "right" && <motion.div
                                className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[1] uppercase text-white">
                                Commercial
                            </span>
                        </motion.div>
                    </div>
                    <div className="flex relative h-1/2 gap-3 transition-all duration-300">
                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${hs1})` }}
                            initial={{ width: "50%" }}
                            animate={{
                                width:
                                    hoveredSecondGrid === "left"
                                        ? "55%"
                                        : hoveredSecondGrid === "right"
                                            ? "45%"
                                            : "50%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredSecondGrid("left")}
                            onMouseLeave={() => setHoveredSecondGrid(null)}
                        >
                            {hoveredSecondGrid === "left" && (
                                <motion.div
                                    className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            )}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[2] uppercase text-white">
                                Architecture
                            </span>
                        </motion.div>

                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${hs1})` }}
                            initial={{ width: "50%" }}
                            animate={{
                                width:
                                    hoveredSecondGrid === "right"
                                        ? "55%"
                                        : hoveredSecondGrid === "left"
                                            ? "45%"
                                            : "50%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredSecondGrid("right")}
                            onMouseLeave={() => setHoveredSecondGrid(null)}
                        >
                            {hoveredSecondGrid === "right" && <motion.div
                                className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[1] uppercase text-white">
                                Furniture
                            </span>
                        </motion.div>
                    </div>
                    {/* <div className="flex relative h-1/2 gap-3 transition-all duration-300">
                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${test2})` }}
                            initial={{ width: "33%" }}
                            animate={{
                                width:
                                    hoveredSecondGrid === "left"
                                        ? "40%"
                                        : hoveredSecondGrid
                                            ? "35%"
                                            : "33%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredSecondGrid("left")}
                            onMouseLeave={() => setHoveredSecondGrid(null)}
                        >
                            {hoveredSecondGrid === "left" && <motion.div
                                className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[2] uppercase text-white">
                                Residential
                            </span>
                        </motion.div>

                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${test3})` }}
                            initial={{ width: "33%" }}
                            animate={{
                                width:
                                    hoveredSecondGrid === "middle"
                                        ? "40%"
                                        : hoveredSecondGrid
                                            ? "35%"
                                            : "33%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredSecondGrid("middle")}
                            onMouseLeave={() => setHoveredSecondGrid(null)}
                        >
                            {hoveredSecondGrid === "middle" && <motion.div
                                className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[2] uppercase text-white">
                                Residential
                            </span>
                        </motion.div>

                        <motion.div
                            className="relative flex items-center justify-center rounded-md cursor-pointer overflow-hidden bg-fixed bg-cover bg-center"
                            style={{ backgroundImage: `url(${test4})` }}
                            initial={{ width: "33%" }}
                            animate={{
                                width:
                                    hoveredSecondGrid === "right"
                                        ? "40%"
                                        : hoveredSecondGrid
                                            ? "35%"
                                            : "33%",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseEnter={() => setHoveredSecondGrid("right")}
                            onMouseLeave={() => setHoveredSecondGrid(null)}
                        >
                            {hoveredSecondGrid === "right" && <motion.div
                                className="absolute inset-0 backdrop-blur-[3px] bg-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />}
                            <span className="nigelina text-[20px] md:text-[35px] tracking-wider z-[2] uppercase text-white">
                                Residential
                            </span>
                        </motion.div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PageTwoSectionThree;

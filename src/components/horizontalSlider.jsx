import React, { useRef, useState, useEffect } from "react";
import hs1 from "../assets/hs-1.png";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import slider1 from "../assets/slider-1.jpg";
import { HiOutlineArrowRight } from "react-icons/hi";

const HorizontalSlider = () => {
    const slides = 3;
    const targetRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Ensure horizontal scroll stops at the last slide
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(slides - 1) * 100}%`]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30, mass: 1 });

    const arrowPosition = useTransform(scrollYProgress, [0, 1], ["0%", `${70 * (slides - 1)}%`]);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setIsInView(latest > 0.05 && latest < 0.95);
        });
    }, [scrollYProgress]);

    return (
        <div ref={targetRef} className="relative" style={{ height: `${slides * 100}vh` }}>
            {/* Scroll Progress Line */}
            <motion.div
                style={{ opacity: isInView ? 1 : 0, visibility: isInView ? "visible" : "hidden" }}
                className="fixed bottom-[10%] right-[0%] w-[95%] h-[1px] bg-white z-50 transition-opacity duration-500"
            >
                <motion.div
                    style={{ left: arrowPosition }}
                    className="absolute -top-0 translate-x-1/2 -translate-y-[16px] bg-white p-2 rounded-full"
                >
                    <HiOutlineArrowRight />
                </motion.div>
            </motion.div>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x: smoothX }} className="flex ">
                    {[{}, {}, {}].map((_, index) => (
                        <div key={index} className="grid grid-cols-2 h-screen w-screen relative">
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
                                        <button className="flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300">
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
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalSlider;




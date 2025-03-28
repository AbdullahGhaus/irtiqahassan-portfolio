import React, { useRef } from "react";
import hs1 from "../../assets/hs-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"

const PageOneSectionFour = () => {
    const swiperRef = useRef(null);
    const slides = [
        {
            img: hs1,
            text: "Our experience with IHI was truly remarkable. Their attention to detail and commitment to quality made the entire process seamless and stress-free.",
            by: "Ali Raza",
            address: "4 BHK Apartment, Clifton, Karachi"
        },
        {
            img: test2,
            text: "IHI transformed our dream home into reality. The 10-year maintenance warranty gives us peace of mind, knowing our home is in expert hands.",
            by: "Sarah Khan",
            address: "5 BHK Duplex, Bahria Town, Karachi"
        },
        {
            img: test3,
            text: "From planning to execution, everything was flawless. The professionalism and transparency of IHI exceeded our expectations.",
            by: "Omer Javed",
            address: "3 BHK Penthouse, Emaar Oceanfront, Karachi"
        },
        {
            img: test4,
            text: "Choosing IHI was the best decision for our home construction. Their dedication and after-sales support are unmatched in the industry.",
            by: "Ayesha Sheikh",
            address: "6 BHK Villa, D.H.A Phase 8, Karachi"
        },
    ];


    return (
        <div className="min-h-screen relative">
            {/* Title and Border Lines */}
            <div className="relative flex items-center justify-center z-[10]">
                <div className="hidden md:flex absolute left-0 top-[85px] w-[53%] border-t border-white"></div>
                <h2 className="absolute top-16 md:left-[55%] left-[20%] text-[50px] nigelina text-white leading-14 tracking-wider">
                    CUSTOMER <br /> STORIES
                </h2>
                <div className="hidden md:flex absolute right-0 top-[140px] w-[31%] border-t border-white"></div>
            </div>

            {/* Swiper with Fade Effect and Custom Navigation */}
            <div className="relative">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={false}
                    modules={[Navigation, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop
                    className="w-full min-h-screen"
                >
                    {slides.map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative min-h-screen">
                                <img
                                    src={_?.img}
                                    className="absolute inset-0 object-cover w-full h-full z-[0]"
                                    alt="Customer Story"
                                />
                                <div className="absolute bg-black inset-0 opacity-40"></div>

                                <div className="absolute top-[30%] left-[20%]  z-[20] w-[60%] md:w-[500px] h-[380px] rounded-2xl backdrop-blur-xl border-2 border-[#C6C6C6] p-3 flex flex-col justify-between">
                                    <div className="absolute top-[-80px] left-8 text-white text-[200px]">"</div>
                                    <div className="text-[15px] text-white p-5 pt-10">"{_?.text}"</div>
                                    <div className="flex items-center justify-end pb-3 pr-3">
                                        <div className="flex flex-col">
                                            <span className="text-white font-semibold">{_?.by}</span>
                                            <span className="text-white text-[12px]">{_?.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    className={`absolute top-1/2 left-[10%] z-10 p-3 rounded-full transition bg-black/30 cursor-pointer`}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <ChevronLeft size={32} color="#C0A07A" />
                </button>

                <button
                    className={`absolute top-1/2 right-[10%] z-10 p-3 rounded-full transition bg-black/30 cursor-pointer`}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronRight size={32} color="#C0A07A" />
                </button>
            </div>
        </div>
    );
};

export default PageOneSectionFour;

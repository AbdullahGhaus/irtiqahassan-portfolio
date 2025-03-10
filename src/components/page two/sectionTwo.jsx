import React, { useRef } from 'react'

import hs1 from "../../assets/hs-1.png";
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';

const PageTwoSectionTwo = () => {

    const swiperRef = useRef(null);
    const slides = [
        {
            images: {
                row_one: {
                    first: hs1,
                    second: hs1
                },
                row_two: {
                    first: hs1,
                    second: hs1,
                    third: hs1
                }
            },
            tag: "privacy & space",
            main_heading: "EXPLORE OUR HOME",
            description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
            url: "https://67443c.myshopify.com/pages/gallery"
        },
        {
            images: {
                row_one: {
                    first: test2,
                    second: test2
                },
                row_two: {
                    first: test2,
                    second: test2,
                    third: test2
                }
            },
            tag: "privacy & space",
            main_heading: "EXPLORE OUR HOME",
            description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
            url: "https://67443c.myshopify.com/pages/gallery"
        },
        {
            images: {
                row_one: {
                    first: test3,
                    second: test3
                },
                row_two: {
                    first: test3,
                    second: test3,
                    third: test3
                }
            },
            tag: "privacy & space",
            main_heading: "EXPLORE OUR HOME",
            description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
            url: "https://67443c.myshopify.com/pages/gallery"
        },
        {
            images: {
                row_one: {
                    first: test4,
                    second: test4
                },
                row_two: {
                    first: test4,
                    second: test4,
                    third: test4
                }
            },
            tag: "privacy & space",
            main_heading: "EXPLORE OUR HOME",
            description: "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
            url: "https://67443c.myshopify.com/pages/gallery"
        },
    ];

    return (
        <>
            <div className="relative min-h-screen">
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
                            <div className='grid grid-cols-12 h-screen'>
                                <div className='col-span-8 flex flex-col'>
                                    <div className='grid grid-cols-2 h-full'>
                                        <img className='object-cover w-full h-full' src={_?.images?.row_one?.first} />
                                        <img className='object-cover w-full h-full' src={_?.images?.row_one?.second} />
                                    </div>
                                    <div className='grid grid-cols-3'>
                                        <img className='object-cover w-full h-full' src={_?.images?.row_two?.first} />
                                        <img className='object-cover w-full h-full' src={_?.images?.row_two?.second} />
                                        <img className='object-cover w-full h-full' src={_?.images?.row_two?.third} />
                                    </div>
                                </div>
                                <div className="col-span-4 flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-2 pl-20 ">
                                        <div className="text-[#515151] text-[11px] uppercase relative">
                                            <div className="absolute -top-5 right-0 w-full h-[1.5px] bg-[#707070]" />
                                            {_?.tag}
                                        </div>
                                        <div className="text-[#515151] text-[45px] nigelina leading-12 w-[60%]">
                                            {_?.main_heading}
                                        </div>
                                        <div className="text-[#515151] text-[13px] w-[60%]">
                                            {_?.description}
                                        </div>
                                        <div className='p-2' />
                                        <Link to={_?.url} target="_top" className=' max-w-fit'>
                                            <button className="flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300 cursor-pointer">
                                                <span className="text-[10px] font-medium">View More</span>
                                                <ArrowRight size={13} />
                                            </button>
                                        </Link>
                                        <div className='flex items-center pt-5 gap-5'>
                                            <button
                                                className={` z-10 p-3 rounded-full transition border cursor-pointer hover:shadow-md`}
                                                onClick={() => swiperRef.current?.slidePrev()}
                                            >
                                                <ChevronLeft size={15} color="black" />
                                            </button>

                                            <button
                                                className={` z-10 p-3 rounded-full transition border cursor-pointer hover:shadow-md`}
                                                onClick={() => swiperRef.current?.slideNext()}
                                            >
                                                <ChevronRight size={15} color="black" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </>
    )
}

export default PageTwoSectionTwo

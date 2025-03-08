import React, { useState } from "react";
import luxuryhotel from "../../assets/luxury-hotel.jpg";
import residentialbg from "../../assets/residential-bg.jpg";
import architecturebg from "../../assets/architecture.jpg";
import commercialbg from "../../assets/commercialbg.jpg";
import furniturebg from "../../assets/furniturebg.jpg";
import { Link } from "react-router-dom";

const PageOneSectionTwo = () => {

    // const navigate = useNavigate()
    const [hoveredItem, setHoveredItem] = useState(null);

    const images = {
        0: residentialbg,
        1: commercialbg,
        2: architecturebg,
        3: furniturebg,
        default: luxuryhotel,
    };

    const data = [
        {
            head: "RESIDENTIAL SPACES",
            url: "https://67443c.myshopify.com/pages/residential",
            desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation.",
        },
        {
            head: "COMMERCIAL CONSTRUCTION",
            url: "https://67443c.myshopify.com/pages/residential",
            desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation.",
        },
        {
            head: "ARCHITECTURAL SPACES",
            url: "https://67443c.myshopify.com/pages/residential",
            desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation.",
        },
        {
            head: "FURNITURE",
            url: "https://67443c.myshopify.com/pages/residential",
            desc: "Discover unmatched privacy and comfort in every corner of our home. Enjoy elegant dining spaces, cozy living spaces, and stylish bedrooms, all thoughtfully designed for your ultimate relaxation.",
        },
    ];

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-screen bg-fixed bg-center cursor-pointer transition-all duration-500"
            style={
                {
                    backgroundImage: `url(${images[hoveredItem] || images.default})`,
                    backgroundSize: "100% 100vh"
                }
            }
        >
            {data.map((item, index) => (
                <Link
                    to={item?.url}
                    key={index}
                    target="_top"
                    className="flex flex-col items-center gap-3 justify-center relative group border border-[#ffffff3d]"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    aria-label={item.head}
                // onClick={() => navigate(item?.url)}
                >
                    <div className="absolute inset-0 transition-all duration-300 bg-black/50 backdrop-blur-md lg:backdrop-blur-none lg:group-hover:backdrop-blur-[21px]"></div>

                    <div className="z-10 flex flex-col gap-1 sm:gap-2 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                        <div className="text-white text-[40px] tracking-wider leading-10 uppercase nigelina whitespace-pre-line text-center">
                            {item.head?.replace(" ", "\n")}
                        </div>
                    </div>

                    <div className="z-10 w-[50%] text-white text-[12px] font-extralight opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-[1500ms] text-center leading-4">
                        {item.desc}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PageOneSectionTwo;

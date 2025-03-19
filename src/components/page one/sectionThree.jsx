import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./sectionThree.module.css";
import { ArrowRight } from "lucide-react";
import "react-nice-scroll/dist/styles.css";
import hs1 from "../../assets/hs-1.png";
import slider1 from "../../assets/slider-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    title: "EXPLORE OUR HOME",
    description:
      "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
  },
  {
    title: "EXPLORE OUR OFFICE",
    description:
      "From the moment you step into the expansive office area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
  },
  {
    title: "EXPLORE OUR HOME",
    description:
      "From the moment you step into the expansive living area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
  },
  {
    title: "EXPLORE OUR OFFICE",
    description:
      "From the moment you step into the expansive office area, you’ll be immersed in the awe-inspiring sea views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and inviting bedrooms create a refined and welcoming ambiance.",
  }
];

const HorizontalScroll = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(`.${styles.horizontalSection}`);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: `#${styles.container}`,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(`#${styles.container}`).offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id={styles.container}>
      {sectionsData.map((section, index) => (
        <section key={index} className={styles.horizontalSection}>
          <div className="grid grid-cols-2 min-h-screen relative">
            <img
              src={slider1}
              className="absolute bottom-[9%] left-[37%] w-[400px] h-[300px] z-[10]"
            />
            <div className="flex items-center">
              <div className="flex flex-col gap-3 relative">
                <div className="w-52 h-[1.5px] bg-[#707070]" />
                <div className="flex flex-col gap-2 pl-20 w-[50%]">
                  <div className="text-[#515151] text-[11px] uppercase">
                    privacy & space
                  </div>
                  <div className="text-[#515151] text-[45px] nigelina leading-12 w-[80%]">
                    {section.title}
                  </div>
                  <div className="text-[#515151] text-[13px]">
                    {section.description}
                  </div>
                  <button className="cursor-pointer flex items-center justify-center gap-2 px-3 py-2 max-w-fit bg-black text-white rounded-md transition duration-300">
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
        </section>
      ))}
    </main>
  );
};

export default HorizontalScroll;
import React from 'react'

const PageTwoSectionOne = () => {
    return (
        <div className='flex flex-col gap-6 items-center justify-center md:h-[400px] bg-[#0F0F0FE8] relative'>
            <div className='md:absolute inset-0 z-[0]' style={{ background: "transparent linear-gradient(180deg, #09030400 0%, #0A040519 69%, #0F0F0FE8 86%, #101010 100%) 0% 0% no-repeat padding-box" }} />
            <div className="mt-[30px] md:mt-[0px] text-[30px] nigelina text-[#C0A07A] leading-9 relative w-[50%] text-center z-[1]">
                <span className="md:absolute top-[25%] -left-10 w-[30px] h-[2px] bg-[#C0A07A]" />
                <span className="md:absolute top-[25%] -right-10 w-[30px] h-[2px] bg-[#C0A07A]" />
                What matters to us is a timeless design, sustainable, quality and ecological awareness.
            </div>
            <div className='pb-[30px] flex items-center justify-center text-center w-[70%] text-white z-[1]'>IHI is a high-end Architecture, Interior Design and Furniture studio driven by exquisite taste, unparalleled service and unmatched quality. From planning spaces with utmost precision, creating unique styles from Modern Luxury to French Parisian and executing designs with high-end furniture and finishes. Be it residential, commercial or retail, at IHI, we don't just design interiors, we design a lifestyle.</div>
        </div>
    )
}

export default PageTwoSectionOne

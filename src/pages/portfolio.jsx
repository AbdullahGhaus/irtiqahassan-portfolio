import React, { useEffect } from 'react'
import CategoryMain from '../components/categoryMain'
import SmoothScroll from '../components/smoothScroll'
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";
import CustomerCare from '../components/customerCare';


const Portfolio = () => {

    useEffect(() => {
        const sendHeight = () => {
            const height = document.body.scrollHeight;
            window.parent.postMessage({ type: "iframeResize", height }, "*");
        };

        sendHeight(); // Send initial height
        window.addEventListener("resize", sendHeight); // Update height on resize

        return () => {
            window.removeEventListener("resize", sendHeight);
        };
    }, []);

    return (
        <div className='flex flex-col'>
            <CategoryMain />
            <SmoothScroll />
            <CustomerCare />
        </div>
    )
}

export default Portfolio

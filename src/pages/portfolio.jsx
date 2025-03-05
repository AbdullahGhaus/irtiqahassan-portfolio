import React, { useEffect } from 'react'
import CategoryMain from '../components/categoryMain'
import SmoothScroll from '../components/smoothScroll'
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";
import CustomerCare from '../components/customerCare';


const Portfolio = () => {

    return (
        <div className='flex flex-col'>
            <CategoryMain />
            <SmoothScroll />
            <CustomerCare />
        </div>
    )
}

export default Portfolio

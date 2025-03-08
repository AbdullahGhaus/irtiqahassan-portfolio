import React, { useEffect } from 'react'
import CategoryMain from '../components/page one/sectionTwo'
import SmoothScroll from '../components/page one/sectionThree'
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";
import CustomerCare from '../components/page one/sectionFour';


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

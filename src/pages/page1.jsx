import React from 'react'
import PageOneSectionOne from '../components/page one/sectionOne'
import PageOneSectionTwo from '../components/page one/sectionTwo'
import PageOneSectionThree from '../components/page one/sectionThree'
import PageOneSectionFour from '../components/page one/sectionFour'
import PageTwoSectionTwo from '../components/page two/sectionTwo'

const Page1 = () => {
  return (
    <>
        <PageOneSectionOne/>
        <PageOneSectionTwo/>
        <PageTwoSectionTwo/>
        {/* <PageOneSectionThree/> */}
        <PageOneSectionFour/>
    </>
  )
}

export default Page1
import React from 'react'
import MainCrosel from '../../components/Home/MainCrosel'
import HomeSectionCrosel from '../../components/HomeSectionCrosel/HomeSectionCrosel'
import { men_cloths } from "../../Data/women_hair";

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCrosel data={men_cloths} sectionName={"Women's Hair"}/>
            <HomeSectionCrosel data={men_cloths} sectionName={"Men's Shirt"}/>
            <HomeSectionCrosel data={men_cloths} sectionName={"Women's Shirt"}/>
            <HomeSectionCrosel data={men_cloths} sectionName={"Women's Dress"}/>
            <HomeSectionCrosel data={men_cloths} sectionName={"Men's Trouser"}/>
        </div>
    </div>
  )
}

export default HomePage
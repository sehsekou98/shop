import React from 'react'
import MainCrosel from '../../components/Home/MainCrosel'
import HomeSectionCrosel from '../../components/HomeSectionCrosel/HomeSectionCrosel'

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCrosel />
            <HomeSectionCrosel />
            <HomeSectionCrosel />
            <HomeSectionCrosel />
            <HomeSectionCrosel />
        </div>
    </div>
  )
}

export default HomePage
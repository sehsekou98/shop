import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col bg-white
    rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' 
            src="https://ae01.alicdn.com/kf/Hee7efa65f5fa4ba78598036edef1d2bak/Chorliss-Jumbo-Braid-Hair-24inch-Color-Synthetic-Braiding-Hair-Extension-Wholesale-Pre-Stretched-Yaki-Kane-kalon.jpg_220x220xz.jpg_.webp"
             alt="" />
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Expression</h3>
            <p className='mt-2 text-sm text-gray-500'>
              Chorliss 24 Inch Pre-Stretched Yaki Kane Kalon Ombre
             Braiding Hair.</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
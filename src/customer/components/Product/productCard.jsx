import React from 'react'
import './ProductCard.css'


const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all
    cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top'
             src="https://ae01.alicdn.com/kf/S2605a9d9948b461c9c95117741b520a7q/Silky-French-Curl-Braiding-Hair-22-Inch-Loose-Wave-Spanish-Curly-Crochet-Braids-Pre-Stretched-Bouncy.jpg_220x220xz.jpg_.webp" alt="" />
        </div>
        <div className='textPart bg-white p-3'>
          <div>
            <p className='font-bold opacity-60'>Stretched Length : 24 inchess</p>
            <p>Kalon Ombre Braiding Hair Synthetic Braiding Hair</p>
          </div>
          <div className='flex items-center space-x-2'>
            <p className='font-semibold'>$200</p>
            <p className='line-through opacity-50'>$2000</p>
            <p className='text-green-600 font-semibold'>50% off</p>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
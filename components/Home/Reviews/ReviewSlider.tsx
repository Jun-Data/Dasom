"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import { reviewData } from '@/data'

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={'creative'}
        grabCursor={true}
        modules={[EffectCreative]}
        className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]'
        creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [180, 0, 0],
            },
            next: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [-180, 0, 0],
            },
          }}
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
            <div className='w-[80%] mx-auto mt-10'>
              {/* review text */}
              <p className='text-xs sm:text-sm md:text-base font-semibold'>
                {data.review}
              </p>
              {/* star icon */}
              <div className='flex items-center mt-4'>
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
              </div>
              {/* user image */}
              <div className='mt-5'>
                <div className='flex items-center space-x-4'>
                    <div className='h-[60px] w-[60px] rounded-full overflow-hidden relative'>
                    <Image src={data.image} alt='client' fill  sizes="(min-width: 768px) 60px, 40px" className='object-cover' />
                    </div>
                </div>
              </div>
              <p className='mt-3 text-sm sm:text-lg font-semibold'>{data.name}</p>
              <p className='mt-5 text-gray-600 text-xs sm:text-base'>사용하신 제품 : {data.product}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewSlider

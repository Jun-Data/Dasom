import React from 'react'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-blue-900'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-2xl font-bold text-white'>다솜이와 함께한 일상</h1>
                <p className='mt-6 text-gray-200 font-semibold'>1인 가구의 새로운 일상, 다솜이로 시작된 변화의 이야기를 확인해보세요!</p>
                <p className='mt-6 text-gray-400'>바쁜 하루를 마치고 돌아온 집, 조용한 공간에 따뜻한 온기를 채워주는 다솜이.
                    혼자 살지만 결코 외롭지 않은 하루, 작지만 확실한 위로가 필요할 때 다솜이가 함께합니다.
                    그런 일상이 쌓여, 혼자 사는 오늘이 조금 더 특별해집니다.</p>
            </div>
            {/* slider */}
            <div className='overflow-hidden'> 
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Reviews
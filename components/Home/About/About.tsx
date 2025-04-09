import SectionHeading from '@/components/Helper/SectionHeading'
import AboutCards from './AboutCards'
import React from 'react'

const About = () => {
  return (
    <div className='pt-20 pb-20'>
        <SectionHeading heading='About' explanation='다솜이의 엄청난 장점들을 확인해보세요!'/>
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            <div><AboutCards image="/images/price.png" title="할인된 가격으로 부담 없이 시작" content='지금 다솜이와 함께라면 특별 할인 혜택으로 따뜻한 일상을 시작할 수 있어요'/></div>
            <div><AboutCards image="/images/easy.png" title="어떤 기기로도 쉽게 사용" content='스마트폰, PC 어디서든 간편하게 다솜이와 소통할 수 있어요'/></div>
            <div><AboutCards image="/images/support.png" title="언제든지 곁에 있는 든든한 지원" content='다솜이 이용 중 궁금한 점이 있다면, 24시간 운영되는 고객센터가 함께합니다'/></div>
        </div>
    </div> 
 
  )
}

export default About
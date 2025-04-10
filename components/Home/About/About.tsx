import SectionHeading from '@/components/Helper/SectionHeading'
import AboutCards from './AboutCards'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='pt-20 pb-20 scroll-mt-10 bg-rose-50/60'>
        <SectionHeading heading='About' explanation='다솜이의 엄청난 장점들을 확인해보세요!'/>
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center"><AboutCards image="/images/price.png" title="할인된 가격으로 부담 없이 시작" content='부담 없이 시작하세요. 첫 가입 고객 할인 중!'/></div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="150"><AboutCards image="/images/easy.png" title="어떤 기기로도 쉽게 사용" content='스마트폰, PC 어디서든 간편하게 다솜이와 소통할 수 있어요'/></div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300"><AboutCards image="/images/support.png" title="언제든지 곁에 있는 든든한 지원" content='다솜이 고객센터는 24시간, 언제든지 여러분을 기다리고 있어요'/></div>
        </div>
    </div> 
  )
}

export default About
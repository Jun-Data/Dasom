import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { productData } from '@/data'
import OptionsCard from './OptionsCard'

const Options = () => {
  return (
    <div className='pt-20 pb-20 bg-violet-50'>
        <SectionHeading heading='Options' explanation={'사용가능한 다솜이 옵션들을 확인해보세요!'}/>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
                {/* Product Card */}
                {productData.map((data,i)=>{
                    return(
                        <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i*100}`}>
                            <OptionsCard product={data}/>
                        </div>
                    )
                })}
            </div>
    </div> 
  )
}

export default Options
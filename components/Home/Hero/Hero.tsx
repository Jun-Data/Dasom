import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative w-full h-[100vh]'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-purple-100 opacity-70'></div>
        {/* Video */}
        <video src="/images/elder.mp4" autoPlay muted loop preload='metadata' playsInline className='w-full h-[100vh] object-cover'></video>
        {/* TextContent */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
            <h1 className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[44px] font-bold text-center text-gray-800 leading-relaxed tracking-normal">
              1인 노인가구를 위한&nbsp;
              <span className="font-semibold">따뜻한 반려 로봇</span>
            </h1>
            <h2 className="mt-2 text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] text-violet-500 font-extrabold text-center tracking-widest">
              다솜이 DASOM
            </h2>

                <p className='md:text-base mt-7 text-center text-lg text-black font-semibold [word-spacing:5px]'>지금 바로 사용해보세요!</p>
                <Link href="/chat" className='rounded px-14 md:px-55 py-3 mt-5 py-2.5 overflow:hidden group bg-violet-400 relative hover:bg-violet-600 text-white hover:scale-110 transition-all ease-out duration-300'>
                  <span className='font-bold'>대화하기</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
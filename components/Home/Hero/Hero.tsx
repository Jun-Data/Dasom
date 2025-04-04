import React from 'react'

const Hero = () => {
  return (
    <div className='relative -mt-[12hv] w-full h-[120vh] sm:h-[100vh]'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-purple-100 opacity-70'></div>
        {/* Video */}
        <video src="/images/elder.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover'></video>
        {/* TextContent */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
                <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-black font-bold uppercase'>1인 노인가구 반려 로봇 다솜이</h1>
                <p className='md:text-base text-center text-lg text-black font-semibold [word-spacing:5px]'>지금 바로 사용해보세요!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
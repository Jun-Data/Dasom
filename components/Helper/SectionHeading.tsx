import React from 'react'

type Props = {
    heading:string
    explanation: string
}

const SectionHeading = ({heading, explanation} : Props) => {
  return (
    <div className='w-[80%] mx-auto'>
        <h1 className='text-xl sm:text-3xl text-violet-900 font-bold'>{heading}</h1>
        <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>{explanation}</p>
    </div>
  )
}

export default SectionHeading
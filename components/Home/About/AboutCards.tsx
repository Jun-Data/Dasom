import React from 'react'
import Image from 'next/image'

type Props = {
    image: string
    title: string
    content: string
}

const AboutCards = ({image, title, content}: Props) => {
  return (
    <div>
        <Image src={image} width={70} height={70} className='mx-auto' alt='image' />
        <h1 className='mt-6 text-center text-blue-900 font-bold text-2xl'>{title} </h1>
        <p className='mt-2 text-center text-xs font-medium text-gray-700'>{content}</p>
    </div>
  )
}

export default AboutCards
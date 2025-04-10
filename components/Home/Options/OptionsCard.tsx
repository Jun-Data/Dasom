import React from 'react'
import Image from 'next/image'

type Props = {
    product: {
    id: number;
    image: string;
    name: string;
    description: string;
    rating: number;
    reviews: string;
    price: string;
}}

const OptionsCard = ({product}:Props) => {
    return(
    <div>
    <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
    {/* overlay */}
            <div className='absolute inset-0 bg-black opacity-20 z-10'></div>

    {/* image */}
    <Image src={product.image} alt={product.name} width={500} height={500} className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110'/>
    </div>

    {/* content */}
    <div>
            <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200'>
                {product.name}
            </h1>
            <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>
                {product.description}
            </p>
            </div>
    {/* ratings */}
            <div className='flex items-center space-x-2'>
                <div className='px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs'>
                    {product.rating}
                </div>
                <p className='text-sm font-bold text-gray-800'>{product.reviews} 사용자 리뷰</p>
            </div>
    {/* prices */}
            <p className='mt-3 text-gray-700 font-medium'>
            가격 : {""}
            <span className='text-blue-600 font-bold'>{product.price} ₩</span>
            </p>
    </div>
    )
}

export default OptionsCard
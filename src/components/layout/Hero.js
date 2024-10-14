import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

export default function Hero() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 my-5'>
       <div className='py-12'>
       <h1 className='text-4xl font-semibold'>Welcome to the tuk cafeteria where you can order things</h1>
       <p className='my-5 text-gray-500'>We have variety of food suitable for all Students at affordable price
        Here you can make orders with us and easily pick up your already made orders</p>
       <div className='flex gap-4'>
        <button className='bg-primary flex gap-2 text-white px-8 py-2 rounded-full'>
            Order Now
            <Right/>
        </button>
        
       </div>
       </div>

        <div className=' relative'>
        <Image 
          src={'/heroimage.png'}
          layout={'fill'}
          objectFit={'contain'}
          alt={'Hero Image'}
        />
        </div>
    </section>
  )
}

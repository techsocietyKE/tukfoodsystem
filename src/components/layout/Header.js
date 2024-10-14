import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-primary font-semibold text-2xl' href='/'>
      Tuk Cafeteria
      </Link>
      <nav className='flex gap-8 items-center text-gray-500 font-semibold'>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Menu</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>
       
      </nav>
      <nav className='flex gap-8 items-center text-gray-500 font-semibold'>
        <Link href={'/login'}>Login</Link>
        <Link className='bg-primary text-white px-8 py-2 rounded-full' href={'/register'}>Register</Link>
      </nav>
    </header>
  )
}

export default Header
"use client";
import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Image from 'next/image';

type Props = {
    openNav: ()=>void
}

const Nav = ({openNav}:Props) => {
    const user = false;
    const [navBg, setNavBg] = useState(false);
    useEffect(()=>{
        const handler = () => {
            if (window.scrollY >=90) setNavBg(true);
            if (window.scrollY <90) setNavBg(false);
        };
        window.addEventListener("scroll",handler);
        return ()=> window.removeEventListener("scroll", handler);  
    },[]);

  return (
    <div className= {`${navBg ? "fixed": "bg-indigo-100 p-6 shadow-sm"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center'>
                <div className='w-12 h-12'><Image src="/images/test.png" width={48} height={48} alt="logo" /></div>
                <h1 className='text-xl md:text-2xl text-black uppercase font-bold'>Dasom</h1>
            </div>
            {/* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link)=>{
                    return <Link href={link.url} key={link.id}>
                        <p className='hover:text-purple-300 transition-colors duration-200'>{link.label}</p>
                    </Link>
                })}
            </div>

            {/* User Profile */}
            {user ? <div className='flex space-x-4'>
                <Link href="/profile">
                <Image src="/images/avatar.png" alt='profile'width={38} height={38}/>
                </Link>
                <button>Logout</button>
                </div> : 
                <div className='flex items-center space-x-4'>
                    <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-blue-100 cursor-pointer transition-all duration-200 rounded-lg'>Login</button>
                </div>}
            {/* Burger Menu */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
        </div>
    </div>
  )
}

export default Nav
"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Options from './Options/Options'
import Reviews from './Reviews/Reviews'
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(()=>{
    const initAOS = async()=>{
      await import('aos')
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom',
      })
    }
    initAOS()
  },[])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Options />
      <Reviews />
      <Footer/>
    </div>
  )
}

export default Home
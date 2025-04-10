import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Options from './Options/Options'
import Reviews from './Reviews/Reviews'
import Footer from './Footer/Footer'

const Home = () => {
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
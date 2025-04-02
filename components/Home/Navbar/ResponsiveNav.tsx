"use client";
import {useState} from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleNavShow = () => setShowNav(true);
    const handleCloseNave = () => setShowNav(false);

    return (
    <div>
        <Nav openNav={handleNavShow}/>
        <MobileNav showNav={showNav} closeNav={handleCloseNave}/>
    </div>
  )
}

export default ResponsiveNav
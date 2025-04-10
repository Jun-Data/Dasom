import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-white text-gray-700">
      <div className="w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 왼쪽: Copyright */}
        <p className="text-center md:text-left text-sm">
          © 2025 SSAFY. All rights reserved.
        </p>

        {/* 오른쪽: SNS 링크 */}
        <div className="flex items-center gap-4">
          <span className="text-sm">Social :</span>
          <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm pointer-events-none">
          <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm pointer-events-none">
          <FaGithub />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm pointer-events-none">
          <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

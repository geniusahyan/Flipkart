import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='w-screen bg-white px-10 h-[4rem] flex justify-between ' >
            <div className="navbar flex justify-between w-[30rem] ">
              <Link href="/" >
                <Image src="/Flipkart-Logo.png " width={100} height={50} title='Flipkart' />
              </Link>
              <div className="form-control">
                <input type="text" placeholder="Search" className="input text-black bg-gray-300 input-bordered w-40 h-8 md:w-auto" />
              </div>
            </div>
            <div className="flex items-center">
              <ul>
                <li>
                <button className="btn">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  Button
                </button>
                </li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
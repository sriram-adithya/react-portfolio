import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'



const links = [
    {
        id: 1,
        link: 'Home'
    },
    {
        id: 1,
        link: 'About'
    },
    {
        id: 1,
        link: 'Portfolio'
    },
    {
        id: 1,
        link: 'Experience'
    },
    {
        id: 1,
        link: 'Contact'
    },
]

const NavBar = () => {
    const [nav,setNav] = useState(false)

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
        <div>
            <h1 className="text-5xl font-signature ml-2">Sriram Adithya</h1>
        </div>
        <ul className="hidden md:flex">

            {/* To render navBar from Object */}
            {links.map(({ id,link }) => (
            <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-150">{link}</li>

            ))}    
        </ul>
                  {/* Right Icon check */}
        <div 
        onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* If nav true show content else dont */}
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            
        {/* Render navContent for phone view inside fabars & fatimes icon */}
        {links.map(({ id,link }) => (
        <li key={id} className="px-4 py-6 cursor-pointer text-4xl">{link}</li>

        ))}
        </ul>

        )}

    </div>
  )
}

export default NavBar
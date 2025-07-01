import React from 'react'
import Container from './container/Container'
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import dipok from "../assets/06.jpg";



const Navber = () => {

   const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Portfolio", "Blog", ];
  return (
    <>
      {/* <nav className='bg-white shadow-md fixed w-full z-50 py-5'>

        <Container>
            <div className="flex justify-between items-center ">
                <div className="text-2xl font-bold font-main text-[#000]">Dipok Das</div>
                <div className="flex items-center space-x-6">
                  <ul className="flex space-x-6">
                    <li><a href="#home" className="py-2 px-4 bg-linear-to-r/increasing from-indigo-500 to-teal-400">Home</a></li>
                    <li><a href="#about" className="py-2 px-4 bg-linear-to-r/increasing from-indigo-500 to-teal-400">About</a></li>
                    <li><a href="#services" className="py-2 px-4 bg-linear-to-r/increasing from-indigo-500 to-teal-400">Services</a></li>
                    <li><a href="#portfolio" className="py-2 px-4 bg-linear-to-r/increasing from-indigo-500 to-teal-400">Portfolio</a></li>
                    <li><a href="#contact" className="py-2 px-4 bg-linear-to-r/increasing from-indigo-500 to-teal-400">Blog</a></li>
                </ul>
                <button className='py-3 px-6 bg-amber-400'>Contact</button>
                </div>
            </div>
        </Container>
        
      </nav> */}


        <nav className="w-full fixed top-0 left-0 z-50  backdrop-blur-sm shadow-md">
      <Container>
        <div className=" mx-auto flex items-center  justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={dipok} className='lg:w-[80px] w-[50px] lg:h-[80px] h-[50px] rounded-full' alt="" />
          <div className="text-2xl font-bold font-main ">Dipok das</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8  font-medium items-center">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-[#000] transition">
                {link}
              </a>
            </li>
          ))}
           <div className="group   py-3 px-8 border-2 border-[#3BB9FF] rounded-xl duration-300 ease-in-out hover:scale-105  relative after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-[#3BB9FF] after:rounded-xl after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">
          
          
                      <a href="" className=" text-center  font-semibold text-xl font-main group-hover:text-[#fff] transition duration-300 relative z-10">
                        Contact
                      </a>
          
                    </div>
          <button className=' bg-amber-500'></button>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <GiTireIronCross size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
      </Container>
    </nav>
    </>
  )
}

export default Navber
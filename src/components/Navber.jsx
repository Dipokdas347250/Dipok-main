import React from 'react'
import Container from './container/Container'

const Navber = () => {
  return (
    <>
      <nav className='bg-white shadow-md fixed w-full z-50 py-5'>

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
        
      </nav>
    </>
  )
}

export default Navber
import React from 'react'
import Container from './container/Container'
import Dipok from "../assets/Dipok0.jpg"
import { FaDownload } from "react-icons/fa6";



const About = () => {
  return (
    <>
      <section className='py-20 ' id='about'>
        <Container>
          <div className="relative">
            <h1 className='  text-9xl font-bold text-center opacity-10'>RESUME</h1>
            <h2 className=' absolute top-[40px] left-[50%] translate-x-[-50%] text-6xl font-main underline text-[#3BB9FF] '><span className='text-[#000]'>About</span> Me</h2>

          </div>
          <div className=" flex lg:flex-row   justify-between lg:gap-x-20 gap-x-0 lg:gap-y-0 gap-y-10 mt-[50px]">
            <div className="w-[30%]">
              <img className='w-[90%] rounded-3xl fill-cyan-500 drop-shadow-2xl drop-shadow-cyan-500/50' src={Dipok} alt="" />
            </div>
            <div className="w-[70%]">
              <h2 className=' text-2xl font-main font-bold underline'>PERSONAL INFOS</h2>
              <div className="lg:flex justify-between mt-7 ">
                <div className="w-[45%] ">
                  <div className="">
                    <h2 className='font-main font-medium text-xl  '>First Name : <span className='text-[#3BB9FF] font-semibold text-2xl font-main'>Dipok Chandra </span></h2>
                  </div>
                  <div className="py-[20px]">
                    <h2 className='font-main font-medium text-xl  '>Last Name : <span className='text-[#3BB9FF] font-semibold text-2xl font-main'>Das </span></h2>
                  </div>
                  <div className="py-[20px]">
                    <h2 className='font-main font-medium text-xl  '>Age : <span className='text-[#3BB9FF] font-semibold text-2xl font-main'>24 </span></h2>
                  </div>

                  <div className="py-[20px]">
                    <h2 className='font-main font-medium text-xl  '> Phone : <span className='text-[#3BB9FF] font-semibold text-2xl font-main'><a href="tel:+8801871118902">+8801871118902</a> </span></h2>

                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="">
                    <h2 className='font-main font-medium text-xl  '>Address : <span className='text-[#3BB9FF] font-semibold text-2xl'>Tangail</span></h2>
                  </div>
                  <div className="py-[20px]">
                    <h2 className='font-main font-medium text-xl  '>Nationality : <span className='text-[#3BB9FF] font-semibold text-2xl'>Bangladshi </span></h2>
                  </div>

                  <div className="py-[20px]">
                    <h2 className='font-main font-medium text-xl  '>Langages : <span className='text-[#3BB9FF] font-semibold text-2xl'>Bangla , English </span></h2>
                  </div>
                  <div className="py-[20px]">
                    <h2 className='font-main font-medium text-xl  '>Email : <span className='text-[#3BB9FF] font-semibold text-2xl'><a href="mailto:dipakdas24680@gmail.com">dipakdas24680@gmail.com</a> </span></h2>

                  </div>

                </div>

              </div>
              <div className="">
                <p className='text-xl  mb-10 w-[80%] mt-10 font-main'>I am Dipok das . Front-end Developer focused on crafting clean & user-friendly experiences , i am passionate about building excellent software that improves the loves of those around me.</p>
              </div>


            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between lg:gap-x-5 gap-x-0 lg:gap-y-0 gap-y-10 mt-[50px]">
            <div className="w-[25%]">
              <div className="pt-5 pb-3 px-5 border-2 border-[#3BB9FF] rounded-xl bg-white shadow-lg shadow-[#3BB9FF]/50 duration-300 ease-in-out hover:rotate-2 hover:scale-105">
                <h2 className='text-7xl font-secondary text-[#3BB9FF]'>02+</h2>
                <p className='text-xl text-gray-600 mb-10 w-[80%] mt-5 font-main'>YEARS OF EXPERIENCE</p>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="pt-5 pb-3 px-5 border-2 border-[#3BB9FF] rounded-xl bg-white shadow-lg shadow-[#3BB9FF]/50 duration-300 ease-in-out hover:rotate-2 hover:scale-105">
                <h2 className='text-7xl font-secondary text-[#3BB9FF]'>30+</h2>
                <p className='text-xl text-gray-600 mb-10 w-[80%] mt-5 font-main'>COMPLETED PROJECTS</p>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="pt-5 pb-3 px-5 border-2 border-[#3BB9FF] rounded-xl bg-white shadow-lg shadow-[#3BB9FF]/50 duration-300 ease-in-out hover:rotate-2 hover:scale-105 ">
                <h2 className='text-7xl font-secondary text-[#3BB9FF]'>20+</h2>
                <p className='text-xl text-gray-600 mb-10 w-[80%] mt-5 font-main'>HAPPY CUSTOMERS IN PROJECT</p>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="pt-5 pb-3 px-5 border-2 border-[#3BB9FF] rounded-xl bg-white shadow-lg shadow-[#3BB9FF]/50 duration-300 ease-in-out hover:rotate-2 hover:scale-105">
                <h2 className='text-7xl font-secondary text-[#3BB9FF]'>04+</h2>
                <p className='text-xl text-gray-600 mb-10 w-[80%] mt-5 font-main'>FIVE STAR RATINGS ON PROJECTS</p>
              </div>
            </div>
          </div>
          <div className="group flex justify-around items-center mt-14 py-5 px-10 border-2 border-[#3BB9FF] rounded-xl duration-300 ease-in-out hover:scale-105 w-[20%] m-auto relative after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-[#3BB9FF] after:rounded-xl after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">

            <FaDownload className="text-[#3BB9FF] font-semibold text-xl font-main group-hover:text-[#fff] transition duration-300 relative z-10" />

            <a href="" className="   font-semibold text-xl font-main group-hover:text-[#fff] transition duration-300 relative z-10">
              Download CV
            </a>

          </div>


        </Container>
      </section>
    </>
  )
}

export default About
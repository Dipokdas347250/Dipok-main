import React from 'react'
import Container from './container/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";

import Slider from "react-slick";
import eco from "../assets/eco.png";
import eco1 from "../assets/eco1.png";
import mar from "../assets/mar.png";
import pot from "../assets/pot.png";
import fin from "../assets/fin.png";
import age from "../assets/age.png";
import shop from "../assets/shop.png";
import ag01 from "../assets/ag01.png";
import ag02 from "../assets/ag02.png";
import ag03 from "../assets/ag03.png";
import ag04 from "../assets/ag04.png";
import ag05 from "../assets/ag05.png";
import ag06 from "../assets/ag06.png";
import ag07 from "../assets/ag07.png";
import ag08 from "../assets/ag08.png";
import mrk from "../assets/mrk.png";
import rac from "../assets/rac.png";
import pis from "../assets/pis.png";
import oma from "../assets/oma.png";
import unr from "../assets/unr.png";
import dos from "../assets/dos.png";
import gk from "../assets/gk.png";


function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-amber-500 rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:right-[-20px] right-[-10px]  cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-amber-500 rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:left-[-20px] left-[-10px]  cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
       <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
      </div>
     
    );
  }

const Portfolio = () => {

     const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <>
            <section className='py-20 px-3 ' id='portfolio'>
                <Container>
                    <div className="relative">
                        <h1 className='  lg:text-9xl text-7xl font-bold text-center opacity-10'>WORKS</h1>
                        <h2 className=' absolute lg:top-[40px] top-[25px] left-[50%] translate-x-[-50%] lg:text-6xl text-2xl font-main underline text-[#3BB9FF] '><span className='text-[#000]'>My</span> Portfolio</h2>
                        <p className="text-center mt-7 font-medium font-main text-2xl">Here are some of my recent projects.</p>

                    </div>
                    <div className="">

                        <Tabs>
                            <TabList className="lg:flex grid grid-cols-2 justify-center gap-4 mt-10 border-b-2 border-[#3BB9FF] pb-0.5">
                                <Tab
                                    selectedClassName="bg-amber-400 text-white"
                                    className="py-6 lg:px-14 text-center bg-[#3BB9FF] border-2 border-[#3BB9FF] hover:bg-amber-500 rounded-t-3xl font-medium font-main lg:text-xl text-sm cursor-pointer transition"
                                >
                                    E-Commerce
                                </Tab>
                                <Tab
                                    selectedClassName="bg-amber-400 text-white"
                                    className="py-6 lg:px-14 text-center bg-[#3BB9FF] border-2 border-[#3BB9FF] hover:bg-amber-500 rounded-t-3xl font-medium font-main lg:text-xl text-sm cursor-pointer transition"
                                >
                                    Lending Page
                                </Tab>
                                <Tab
                                    selectedClassName="bg-amber-400 text-white"
                                    className="py-6 lg:px-14 text-center bg-[#3BB9FF] border-2 border-[#3BB9FF] hover:bg-amber-500 rounded-t-3xl font-medium font-main lg:text-xl text-sm cursor-pointer transition"
                                >
                                    Business

                                </Tab>
                                <Tab
                                    selectedClassName="bg-amber-400 text-white"
                                    className="py-6 lg:px-14 text-center bg-[#3BB9FF] border-2 border-[#3BB9FF] hover:bg-amber-500 rounded-t-3xl font-medium font-main lg:text-xl text-sm cursor-pointer transition"
                                >
                                    Webflow
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <div className="">
                                    <h2 className="text-center font-main text-3xl my-10 underline">E-Commerce Projects</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                                        {/* Example project cards */}
                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://fascinating-palmier-19a67f.netlify.app/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Finsweet Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={eco} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies.</p>

                                        </div>


                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://steady-dasik-77e244.netlify.app" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Finsweet Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={eco1} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Hekto is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies.</p>

                                        </div>


                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://cap-project001.netlify.app/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Finsweet Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={mar} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Ortencey  is a fully functional Digital Marketing site with a user-friendly interface and product management, built with modern technologies.</p>

                                        </div>


                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://dipokdas347250.github.io/30-jan/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Finsweet Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={fin} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I</p>

                                        </div>
                                       

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="">
                                    <h2 className="text-center font-main text-3xl my-10 underline">Lending Projects</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                                        {/* Example project cards */}
                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://wondrous-yeot-05ac40.netlify.app/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Emprise Landing Page</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={pot} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies.</p>

                                        </div>


                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://steady-dasik-77e244.netlify.app" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>BWFC Agency</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={age} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I</p>

                                        </div>


                                        <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://shophub000.netlify.app/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>SHOPhub Agency</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={shop} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Shophub is a stylish agency website built with React and Tailwindcss. It features clean design and comprehensive service details.</p>

                                        </div>
                                       

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="">
                                    <h2 className="text-center font-main text-3xl my-10 underline">Innovate Projects</h2>
                                    
                                        <Slider {...settings} >
                                        {/* Example project cards */}

                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 01</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag01} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home03" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 02</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag02} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home04" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 03</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag03} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home05" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 04</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag04} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home06" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 05</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag05} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home07" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 06</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag06} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home08" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 07</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag07} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:rounded-lg after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://graceful-malabi-0d13eb.netlify.app/home09" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Innovate Multipage 08</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={ag08} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>Innovate Agency's website contains 27 pages built with Bootstrap. Responsive designed to work smoothly on different devices.</p>

                                        </div>
                                        </div>
                                        </Slider>

                                   
                                </div>
                               
                            </TabPanel>
                            <TabPanel>
                                 
                                   <div className="">
                                    <h2 className="text-center font-main text-3xl my-10 underline">No-code Client Projects</h2>
                                    
                                        <Slider {...settings} >
                                        {/* Example project cards */}

                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://meghans-dandy-site-a90984.webflow.io/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>MRketable Multipage </h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={mrk} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients</p>
                                            <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                            </div>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://racheldela-site.webflow.io/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Racheldela Lending page</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={rac} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients</p>
                                            <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <IoStarHalfSharp/>
                                            </div>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://piscator.webflow.io/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Piscator Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={pis} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients</p>
                                            <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate className='text-[#000]'/>
                                            </div>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://oma-web.webflow.io/landing-page" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Oma Lending page</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={oma} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients.</p>
                                             <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                
                                            </div>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://unrppd-site.webflow.io/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Unrppd Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={unr} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients</p>
                                            <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                 <MdOutlineStarRate className='text-[#000]'/>
                                            </div>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://dos-amigos-custom-fencing.webflow.io/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Amigos Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={dos} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients</p>
                                            <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                 <MdOutlineStarRate className='text-[#000]'/>
                                            </div>

                                        </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="  bg-[#3BB9FF] rounded-lg  p-5 border-2 border-[#000] shadow-xl  duration-500 ease-in-out  hover:scale-105    px-5 w-full   relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[#3BB9FF] after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer ">
                                            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                                <a href="https://gk-healthcare.webflow.io/" target='blank' className=' bg-[#fff] border-2 border-[#000]   text-[#000] px-6 py-4  rounded-lg  duration-300 ease-in-out cursor-pointer hover:bg-[#3BB9FF] hover:text-[#fff] '> Live Site</a>
                                            </div>
                                            <h2 className='text-center font-medium font-main text-xl mb-4 underline '>Gk Multipage</h2>
                                            <img className='h-[300px] w-full rounded-t-2xl' src={gk} alt="" />
                                            <p className='  font-extralight font-main text-[14px] mt-4'>We craft high-performing, responsive, and SEO-optimized websites using the power of Webflow — built to grow your brand and convert visitors into clients</p>
                                            <div className=" card-rating flex justify-center items-center mt-4 text-3xl text-amber-300">
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                <MdOutlineStarRate/>
                                                 <MdOutlineStarRate className='text-[#000]'/>
                                            </div>

                                        </div>
                                        </div>
                                        
                                        </Slider>

                                   
                                </div>
                               
                            </TabPanel>
                        </Tabs>
                    </div>


                </Container>
            </section>
        </>
    )
}

export default Portfolio
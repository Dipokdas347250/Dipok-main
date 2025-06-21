import React from 'react'
import Container from './container/Container'
import FA from "../assets/fig.webp"
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaFigma , FaGithubSquare} from "react-icons/fa";
import { SiTailwindcss, SiWebflow } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";






const Service = () => {
    return (
        <>
            <section className='py-20 px-3 ' id='services'>
                <Container>
                    <div className="relative">
                        <h1 className='lg:text-9xl text-7xl font-bold text-center opacity-10'>SERVICES</h1>
                        <h2 className='absolute lg:top-[40px] top-[25px] left-[50%] translate-x-[-50%] lg:text-6xl  text-2xl font-main underline text-[#3BB9FF] '><span className='text-[#000]'>My</span> Services</h2>
                    </div>
                    <div className="mt-8">
                        <h2 className='text-2xl font-main font-bold text-[#000]'>My <span className='text-[#3BB9FF]'>Special Service</span> For your Business Development</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-[50px]">
                        <div className="bg-white border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className='text-2xl font-bold font-main text-[#3BB9FF] mb-4'>Web Development</h3>
                            <p className='text-gray-600 font-main font-light text-[18px]'>Creating responsive and dynamic websites using the latest technologies.</p>
                        </div>
                        <div className="bg-white border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className='text-2xl font-bold font-main text-[#3BB9FF] mb-4'>Responsive Web Design</h3>
                            <p className='text-gray-600 font-main font-light text-[18px]'>Responsive web design for any device</p>
                        </div>

                        <div className="bg-white border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className='text-2xl font-bold font-main text-[#3BB9FF] mb-4'>React Development</h3>
                            <p className='text-gray-600 font-main font-light text-[18px]'>Be a part of front end revolutionary tech like React js.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-[50px]">
                        <div className="bg-white border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className='text-2xl font-bold font-main text-[#3BB9FF] mb-4'>Figma Design</h3>
                            <p className='text-gray-600 font-main font-light text-[18px]'>Designing user-friendly interfaces that enhance user experience.</p>
                        </div>
                        <div className="bg-white border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className='text-2xl font-bold font-main text-[#3BB9FF] mb-4'>Email Signature</h3>
                            <p className='text-gray-600 font-main font-light text-[18px]'>Transform your digital presence with our tailored email signature service. </p>
                        </div>
                        <div className="bg-white border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className='text-2xl font-bold font-main text-[#3BB9FF] mb-4'>Webflow Development</h3>
                            <p className='text-gray-600 font-main font-light text-[18px]'>We create fast, responsive, and SEO-optimized websites using the power of Webflow.</p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className='text-3xl font-main underline  text-center'>My Skills</h2>
                    </div>
                    <div className="lg:flex justify-around">
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between items-center px-5">
                                <div className="flex items-center gap-x-3">
                                    <IoLogoHtml5 className='text-[30px] text-[#3BB9FF]' />
                                    <h2 className=" text-[18px] font-semibold">Html</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">85%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[85%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <FaCss3Alt className='text-[30px] text-[#3BB9FF]' />
                                <h2 className=" text-[18px] font-semibold">Css</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">80%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[80%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-around">
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between items-center px-5">
                                <div className="flex items-center gap-x-3">
                                    <FaFigma className='text-[30px] text-[#3BB9FF]' />
                                    <h2 className=" text-[18px] font-semibold">Figma</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">50%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[50%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <FaJsSquare className='text-[30px] text-[#3BB9FF]' />
                                <h2 className=" text-[18px] font-semibold">Javascript</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">65%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[65%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-around">
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <SiNextdotjs className='text-[30px] text-[#3BB9FF]' />
                                <div className=" text-[18px] font-semibold">Next JS</div>
                                </div>
                                <div className="text-[18px] font-semibold">60%</div>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[60%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <FaBootstrap className='text-[30px] text-[#3BB9FF]' />
                                <div className=" text-[18px] font-semibold">Bootstrap 5</div>
                                </div>
                                <div className="text-[18px] font-semibold">70%</div>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[70%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="lg:flex justify-around">
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <FaReact className='text-[30px] text-[#3BB9FF]' />
                                <h2 className=" text-[18px] font-semibold">React js</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">70%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[70%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <SiTailwindcss className='text-[30px] text-[#3BB9FF]' />
                                <h2 className=" text-[18px] font-semibold">Tailwind css</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">80%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[80%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="lg:flex justify-around">
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <SiWebflow className='text-[30px] text-[#3BB9FF]' />
                                <h2 className=" text-[18px] font-semibold">Webflow</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">70%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[70%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                        <div className="lg:w-[45%] w-full mt-10">
                            <div className=" flex justify-between px-5">
                                <div className="flex items-center gap-x-3">
                                    <FaGithubSquare className='text-[30px] text-[#3BB9FF]' />
                                <h2 className=" text-[18px] font-semibold">Github</h2>
                                </div>
                                <h3 className="text-[18px] font-semibold">80%</h3>
                            </div>
                            <div className="h-[35px] w-[100%] border-[7px] border-[#000] text-center rounded-full  relative ">
                                <div className="after:absolute after:contain-['']  after:h-[100%] after:w-[80%] after:top-0 after:left-0  after:rounded-full after:border-[10px] after:border-[#3BB9FF] ">


                                </div>

                            </div>
                        </div>
                       
                        
                    </div>
                   

                </Container>
            </section>
        </>
    )
}

export default Service
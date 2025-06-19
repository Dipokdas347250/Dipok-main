import React from 'react'
import Container from './container/Container'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter, } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <section id="contact" className="relative z-10 py-24 px-6 md:px-12 lg:px-32 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
                <Container>
                    <div className="max-w-9xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-extrabold font-main mb-5 underline">Contact Me</h2>
                            <p className=" text-xl font-extrabold font-main">Let's build something amazing together. Drop a message!</p>
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/10">

                            {/* 👤 Contact Info */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="">
                                        <MdAttachEmail className="text-2xl text-blue-400" />
                                    </div>
                                   <div className="">
                                    <h4 className='text-xl font-bold font-main'>Mail me</h4>
                                     <span className=' text-lg'><a href=" mailto:dipakdas24680@gmail.com">dipakdas24680@gmail.com</a> </span>
                                   </div>
                                </div>
                                <div className="flex items-center gap-4">
                                   <div className="">
                                        <FaPhoneAlt className="text-2xl text-blue-400" />
                                   </div>
                                    <div className="">
                                         <h4 className='text-xl font-bold font-main'>Call me</h4>
                                        <span className=' text-lg '><a href="tel:+8801871118902">+8801871118902</a> </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="">
                                        <FaMapMarkerAlt className="text-2xl text-blue-400" />
                                    </div>
                                    <span className="text-lg">Dhaka, Bangladesh</span>
                                </div>

                                <div className="flex lg:gap-x-10 gap-x-5 my-16">
                                    <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                                    <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                                    <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                                    <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>
                               </div>
                            </div>

                            {/* ✍️ Contact Form */}
                            <form className="space-y-8">
                                {/* Floating input style */}
                                <div className="relative">
                                    <input type="text" id="name" name="name" placeholder=" " className="peer w-full px-4 py-3 text-white bg-transparent border-b border-gray-500 focus:border-blue-500 focus:outline-none" required />
                                    <label htmlFor="name" className="absolute text-gray-400 text-sm left-4 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-400 transition-all">
                                        Your Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input type="email" id="email" name="email" placeholder=" " className="peer w-full px-4 py-3 text-white bg-transparent border-b border-gray-500 focus:border-blue-500 focus:outline-none" required />
                                    <label htmlFor="email" className="absolute text-gray-400 text-sm left-4 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-400 transition-all">
                                        Email Address
                                    </label>
                                </div>

                                <div className="relative">
                                    <textarea id="message" name="message" rows="4" placeholder=" " className="peer w-full px-4 py-3 text-white bg-transparent border-b border-gray-500 focus:border-blue-500 focus:outline-none" required></textarea>
                                    <label htmlFor="message" className="absolute text-gray-400 text-sm left-4 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-400 transition-all">
                                        Your Message
                                    </label>
                                </div>

                                <button type="submit" className="w-full py-3 px-6 mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </Container>
            </section>



        </>
    )
}

export default Contact
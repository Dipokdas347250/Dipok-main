import React from 'react'
import Container from './container/Container'
import { ImBriefcase } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

const Exper = () => {
  return (
    <>


      <section className="  py-16 px-3 md:px-20" id="experience">
        <Container>
        <h2 className="text-3xl md:text-4xl font-bold font-main mb-10 text-center ">
          Experiences <span className='text-[#3BB9FF]'>&</span> Education
        </h2>

        <div className="grid md:grid-cols-2  gap-10">
          {/* 🧑‍💻 Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold font-main underline mb-4 text-[#3BB9FF]">Professional Experience</h3>

            <div className="space-y-6 mt-10 ">
             <div className=" border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 lg:p-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className=' lg:flex items-start  gap-4 '>
                <div className="w-[50px] h-[50px]  bg-[#3BB9FF]  text-[24px] rounded-full ">

                <ImBriefcase className=' m-auto top-[50%] translate-y-[50%]'  />
                </div>
               <div className="">
                 <h4 className="text-2xl font-bold font-main lg:mt-0 mt-3 ">Frontend Developer – Softvance</h4>
                <p className="text-lg font-medium font-main mt-3  ">Mohakhali, Dhaka • May 2024 – Present</p>
                <p className="text-[16px] font-medium font-main mt-3 ">
                  - Developed responsive websites using Webflow, React, and Tailwind CSS. <br />
                  - Collaborated with designers to implement interactive user interfaces. <br />
 
                  - Focused on performance optimization, SEO, and mobile-first design.
                </p>
               </div>
              </div>
             </div>


             <div className=" border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 lg:p-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className=' lg:flex items-start gap-4'>
                <div className="w-[50px] h-[50px] bg-[#3BB9FF] text-[24px] rounded-full ">

                <FaGlobe  className=' m-auto top-[50%] translate-y-[50%]' />
                </div>
               <div className="">
                 <h4 className="text-2xl font-bold font-main lg:mt-0 mt-3">Freelance Web Developer</h4>
                <p className="text-lg font-medium font-main mt-3  ">Remote • 2024 – 2025</p>
                <p className="text-[16px] font-medium font-main mt-3">
                  - Worked with global clients to deliver high-quality websites. <br />
                  - Specialized in landing pages, portfolios, and small business sites. <br />
                  - Built custom features like sliders, chatbots, and theme switchers.
                </p>
               </div>
              </div>
             </div>

             <div className=" border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 lg:p-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className=' lg:flex items-start gap-4'>
                <div className="lg:w-[70px] w-[50px] h-[50px] bg-[#3BB9FF] text-[24px] rounded-full  ">

                <FaGlobe className=' m-auto top-[50%] translate-y-[50%]'  />
                </div>
               <div className="">
                 <h4 className="text-2xl font-bold font-main lg:mt-0 mt-3 ">Front-End DEVELOPER - Fiverr</h4>
                <p className="text-lg font-medium font-main mt-3  "> 2024 – 2024</p>
                <p className="text-[16px] font-medium font-main mt-3">
                 Fiverr front-end dev: Customized web solutions for diverse clients worldwide, honing versatility and client rapport.
                </p>
               </div>
              </div>
             </div>

              
            </div>
          </div>

          {/* 🎓 Education Section */}
          <div>
            <h3 className="text-2xl font-semibold font-main underline mb-4 text-[#3BB9FF]">Education</h3>

            <div className="space-y-6 mt-10">
              <div className=" border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 lg:p-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className=' lg:flex items-start gap-4'>
                <div className="w-[50px] h-[50px] bg-[#3BB9FF] text-[24px] rounded-full ">

                <FaGraduationCap  className=' m-auto top-[50%] translate-y-[50%]' />
                </div>
               <div className="">
                 <h4 className="text-2xl font-bold font-main lg:mt-0 mt-3 ">Higher Secondary Certificate (HSC)</h4>
                <p className="text-lg font-medium font-main mt-3  "> Bhasha Shahid College 2020-2022</p>
                <p className="text-[16px] font-medium font-main mt-3">
                   - Completed HSC from the Humanities group. <br />
    - Focused on Civics, History, and Bengali Literature.
                </p>
               </div>
              </div>
             </div>
              <div className=" border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 lg:p-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className=' lg:flex items-start gap-4'>
                <div className="w-[50px] h-[50px] bg-[#3BB9FF] text-[24px] rounded-full ">

                <FaGraduationCap className=' m-auto top-[50%] translate-y-[50%]'  />
                </div>
               <div className="">
                 <h4 className="text-2xl font-bold font-main lg:mt-0 mt-3">Frontend Development Course</h4>
                <p className="text-lg font-medium font-main mt-3  ">Creative it institute -2023</p>
                <p className="text-[16px] font-medium font-main mt-3">
                  - Learned HTML, CSS, JavaScript, React, Tailwind CSS. <br />
                  - Built multiple live projects with real-world functionality.
                </p>
               </div>
              </div>
             </div>
              <div className=" border-2 border-[#3BB9FF] shadow-[#3BB9FF]/50 lg:p-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className=' lg:flex items-start gap-4'>
                <div className="lg:w-[70px] w-[50px] h-[50px] bg-[#3BB9FF] text-[24px] rounded-full ">

                <FaGraduationCap  className=' m-auto top-[50%] translate-y-[50%]' />
                </div>
               <div className="">
                 <h4 className="text-2xl font-bold font-main lg:mt-0 mt-3">Diploma DEGREE - creative it</h4>
                <p className="text-lg font-medium font-main mt-3  ">Creative it institute 2023-2025</p>
                <p className="text-[16px] font-medium font-main mt-3">
                  Diploma graduate from Creative IT Institute, achieving excellence and distinction in web development with top honors.
                </p>
               </div>
              </div>
             </div>

             
            </div>
            
          </div>
          
        </div>
        </Container>  
      </section>





    </>
  )
}

export default Exper
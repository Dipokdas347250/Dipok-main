// import React from 'react'
// import Container from './container/Container'
// import { TypeAnimation } from 'react-type-animation';
// import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter, } from "react-icons/fa";

// const Banner = () => {
//   return (
//     <>
//       <section className='2xl:py-65 py-44 xl:py-44 px-3 ' id='home'>
//         <Container>
//           <div className="flex flex-col items-center justify-center text-center">
//             <h1 className='lg:text-6xl text-4xl font-bold font-main mb-4 animate-name'><span className='text-[#3BB9FF]'>Hello,</span> I'm Dipok Chandra Das</h1>
//             <p className='lg:text-2xl text-[16px]  lg:mb-10 mb-4 lg:w-[60%] w-full lg:mt-10 font-main'>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highlyfunctional websites.</p>
//             <div>
//               <div className="mb-10">
//                 <TypeAnimation
//                   preRenderFirstString={true}
//                   sequence={[
//                     1000,
//                     'Front-end Developer With React', // initially rendered starting point
//                     3000,
//                     'Front-end Developer With Tailwind CSS',
//                     3000,
//                     'Front-end Developer With Next.js',
//                     3000,
//                     'Front-end Developer With JavaScript',
//                     3000,
//                     'Front-end Developer With webflow',
//                     1000,
//                   ]}
//                   speed={50}
//                   style={{ fontSize: '2em', fontWeight: 'semibold', color: '#3BB9FF', fontFamily: 'Edu SA Hand, sans-serif' }}
//                   repeat={Infinity}
//                 />
//               </div>
//             </div>
//             <div className="flex lg:gap-x-10 gap-x-5 lg:mb-10">
//                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
//                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
//                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
//                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>



//                 </div>
            
//           </div>

//         </Container>
//       </section>
//     </>
//   )
// }

// export default Banner




// new version


import React, { useEffect, useRef } from "react";
import Container from "./container/Container";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import gsap from "gsap";

const Banner = () => {
  const helloRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      helloRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        nameRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section className="2xl:py-65 py-44 xl:py-44 px-3" id="home">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Animated Heading */}
          <h1 className="lg:text-6xl text-4xl font-bold font-main mb-4">
            <span ref={helloRef} className="text-[#3BB9FF] inline-block mr-2">
              Hello,
            </span>
            <span ref={nameRef} className="inline-block">
              {"I'm Dipok Chandra Das".split("").map((char, i) => (
                <span key={i} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <p className="lg:text-2xl text-[16px] lg:mb-10 mb-4 lg:w-[60%] w-full lg:mt-10 font-main">
            A passionate web developer based from Bangladesh. With a keen eye for
            detail and a passion for web design, I specialize in creating visually
            captivating and highly functional websites.
          </p>

          {/* Type Animation */}
          <div className="mb-10">
            <TypeAnimation
              sequence={[
                1000,
                "Front-end Developer With React",
                3000,
                "Front-end Developer With Tailwind CSS",
                3000,
                "Front-end Developer With Next.js",
                3000,
                "Front-end Developer With JavaScript",
                3000,
                "Front-end Developer With Webflow",
              ]}
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                fontWeight: "600",
                color: "#3BB9FF",
                fontFamily: "Edu SA Hand, sans-serif",
              }}
            />
          </div>

          {/* Social Icons */}
          <div className="flex lg:gap-x-10 gap-x-5 lg:mb-10">
                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                   <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>
                 </div>

        </div>
      </Container>
    </section>
  );
};

export default Banner;


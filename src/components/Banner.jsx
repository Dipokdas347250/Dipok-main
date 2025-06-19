import React from 'react'
import Container from './container/Container'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter, } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className='py-65  ' id='home'>
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className='text-6xl font-bold font-main mb-4'><span className='text-[#3BB9FF]'>Hello,</span> I'm Dipok Chandra Das</h1>
            <p className='text-2xl  mb-10 w-[60%] mt-10 font-main'>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highlyfunctional websites.</p>
            <div>
              <div className="mb-10">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    1000,
                    'Front-end Developer With React', // initially rendered starting point
                    3000,
                    'Front-end Developer With Tailwind CSS',
                    3000,
                    'Front-end Developer With Next.js',
                    3000,
                    'Front-end Developer With JavaScript',
                    3000,
                    'Front-end Developer With webflow',
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: '2em', fontWeight: 'semibold', color: '#3BB9FF', fontFamily: 'Edu SA Hand, sans-serif' }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="flex lg:gap-x-10 gap-x-5 mb-10">
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.facebook.com/dipak.chandradas.104?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://www.linkedin.com/in/dipok-chandra-das-75a549305?" target='blank'><FaLinkedin /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://github.com/Dipokdas347250" target='blank'><FaGithubSquare /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] p-[14px]  fill-cyan-500 drop-shadow-xl drop-shadow-cyan-500/50 duration-300 ease-in-out hover:scale-120' href="https://x.com/DipakDas19940?t=1__0t9nOT8WTK0xEh-yIwA&s=07" target='blank'><FaTwitter /></a>



                </div>
            
          </div>

        </Container>
      </section>
    </>
  )
}

export default Banner
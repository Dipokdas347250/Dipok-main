import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Chat from '../components/Chat'
import Exper from '../components/Exper'
import Contact from '../components/Contact'
import Blog from '../components/Blog'


const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Service/>
    <Portfolio/>
    <Exper/>
   <Blog/>
    <Chat/>
    <Contact/>
   
    </>
  )
}

export default Home
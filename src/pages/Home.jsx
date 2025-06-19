import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Bolg from '../components/Bolg'
import Chat from '../components/Chat'
import Exper from '../components/Exper'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Service/>
    <Portfolio/>
    <Exper/>
    <Bolg/>
    <Chat/>
    <Contact/>
   
    </>
  )
}

export default Home
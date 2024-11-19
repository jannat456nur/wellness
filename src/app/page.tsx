"use client";


import React from 'react'
import Header from './components/Header/page'
import Hero from './components/Hero/page'
import Course from './components/Course/page'
import WeProvide from './components/WeProvide/page'
import Review from './components/Review/page'
import Footer from './components/Footer/page'

const page = () => {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Course />
      <WeProvide />
      <Review />
      <Footer/>
    </div>
  )
}

export default page
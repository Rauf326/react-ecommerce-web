import React from 'react'
import HeroSection from './components/HeroSection'
import AboutHelper from './components/AboutHelper'
const About = () => {
  const data = {
    sname: "We are Great Retailer",
    simage: "./images/hero2.jpg",
    sheading: "About Us"

  }
  return (
    <>
      <HeroSection myData={data} />
      <AboutHelper />
    </>
  )
}

export default About
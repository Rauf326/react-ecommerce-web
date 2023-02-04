import React from 'react'
import HeroSection from './components/HeroSection';
import Services from "./components/services"
import Trusted from './components/Trusted';
import FeatureProduct from './components/featureProduct';
const Home = () => {
  const data = {
    sname: "Tech Store",
    simage: "./images/hero.jpg",
    sheading: "Welcome to"
  }
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />  
      <Services />
      <Trusted />

    </>
  )
};


export default Home
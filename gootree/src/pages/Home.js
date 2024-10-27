import React from 'react'
import Banner from '../components/Banner/Banner'
import { HeroSection2 } from '../components/HeroSection2/HeroSection2'
import BestSellers from '../components/BestSellers/BestSellers'
import HeroSection3 from '../components/HeroSection3/HeroSection3'
import Section4 from '../components/Section4/Section4'



const Home = () => {
  return (
    <div>
        <Banner/>
        <HeroSection2/>
        <BestSellers/>
        <HeroSection3/>
        <Section4/>

    </div>
  )
}

export default Home
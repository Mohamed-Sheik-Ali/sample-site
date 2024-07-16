import React from 'react'
import Header from '../Components/Header'
import Services from '../Components/Services'
import Features from '../Components/Features'
import Clients from '../Components/Clients'
import Weapons from '../Components/Weapons'
import Testimonial from '../Components/Testimonial'
import Samples from '../Components/Samples'
import Differences from '../Components/DIfferences'
import Footer from '../Components/Footer'

const Home = () => {
  return (
      <div>
          <Services />
          <Features />
          <Clients />
          <Weapons />
          <Testimonial />
      <Samples />
      <Differences />
    </div>
  )
}

export default Home
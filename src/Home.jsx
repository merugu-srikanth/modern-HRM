import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import DataQualitySection from './components/DataQualitySection'
import TrustedBySection from './components/TrustedBySection'
import TrustedbySession2 from './components/TrustedbySession2'
import WhatWeOffer from './components/WhatWeOffer'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        <Navigation />
        <Hero />
        <DataQualitySection />
        <WhatWeOffer />
        <TrustedBySection />
        
        <Footer />
        {/* < TrustedbySession2/> */}
        {/* <DataQualitySection /> */}
    </div>
  )
}

export default Home
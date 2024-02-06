import React from 'react'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero'
import Category from './compnents/Category'
import FeatureSectionFruits from './compnents/FeatureSectionFruits'
import FeatureSectionBakery from './compnents/FeatureSectionBakery'



const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBakery/>
    </main>
  )
}

export default App
import React from 'react'
import AboutSection from './about/AboutSection'
import TestimonialSlider from './about/TestimonialSlider'
import AboutUsHeader from './about/AboutUsHeader'

export default function About() {
  return (
    <div className=''>
      <AboutUsHeader />
      <AboutSection />
      <TestimonialSlider />
    </div>
  )
}

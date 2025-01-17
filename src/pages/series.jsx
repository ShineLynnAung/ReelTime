import React from 'react'
import Header from '../components/Header'
import SeriesList from '../components/SeriesList'
import Slider from '../components/Slider'

function series() {
  return (
    <div>
        <Header />
        <Slider />
        <SeriesList />
    </div>
  )
}

export default series
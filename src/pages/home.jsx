import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Productons from '../components/Productons'
import GenereMoviesList from '../components/GenereMoviesList'

function home() {
  return (
    <div>
        <Header />
        <Slider />
        <Productons />
        <GenereMoviesList />
    </div>
  )
}

export default home
import React from 'react'
const Image_Base_Url = "https://image.tmdb.org/t/p/original";


function SeriesCard({movie}) {
  return (
    <>
        <img src={Image_Base_Url +movie.poster_path} alt={movie.title}  className='w-1/5  md:w-[300px] rounded-lg hover:border-[3px] border-gray-200
        hover:scale-110 transition-all duration-150 ease-in '/>
    </>
  )
}

export default SeriesCard
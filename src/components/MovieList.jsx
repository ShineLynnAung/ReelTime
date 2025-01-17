import React, { useEffect, useState } from 'react'
import GlobalApi from '../assets/services/GlobalApi'
import MovieCard from './MovieCard';


function MovieList({genereId}) {
    const[movielist,setMovielist]=useState([]);
    useEffect(()=>{
        GetMoviesByGenereId();
    },[genereId])
    const GetMoviesByGenereId=()=>{
        GlobalApi.GetMoviesByGenereId(genereId).then(resp=>{
            setMovielist(resp.data.results);
        }).catch(err=>{
            console.error("Error fetching trending videos:", err);
        })
    }
  return (
    <div className='flex overflow-x-auto scrollbar-none scroll-smooth gap-8 pt-5 px-3 pb-10 mt-8'>
        {movielist.map((item,index)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
  )
}

export default MovieList
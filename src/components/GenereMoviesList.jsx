import React from 'react'
import MovieList from './MovieList';

function GenereMoviesList() {
    const genere = [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 10751,
            name: "Family"
        }
    ];
    
  return (
    <div>
        {genere.map((item) =>(
            <div className='p-8 px-8 md:px-16 '>
                <h1 className='text-[20px] font-bold'>{item.name}</h1>
                <MovieList genereId={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default GenereMoviesList
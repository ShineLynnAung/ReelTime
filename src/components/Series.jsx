import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import GlobalApi from '../assets/services/GlobalApi'
import SeriesCard from './SeriesCard';

function Series({ genereId }) {
    const [serieslist, setSerieslist] = useState([]);

    useEffect(() => {
        GetMoviesByGenereId();
    }, [genereId]);

    const GetMoviesByGenereId = () => {
        GlobalApi.GetMoviesByGenereId(genereId).then(resp => {
            setSerieslist(resp.data.results);
        }).catch(err => {
            console.error("Error fetching trending videos:", err);
        });
    };

    return (
        <div className='flex flex-wrap overflow-x-auto scrollbar-none scroll-smooth gap-32 pt-5 px-3 pb-10 mt-8 mb-8'>
            {serieslist.map((item) => (
                <SeriesCard key={item.id} movie={item} />
            ))}
        </div>
    )
}

export default Series

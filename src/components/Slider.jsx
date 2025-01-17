import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Image_Base_Url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.screen.width;

function Slider() {
  const [movielist, setMovielist] = useState([]);
  const elementRef = useRef();

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        console.log(resp.data.results);
        setMovielist(resp.data.results);
      })
      .catch((err) => {
        console.error("Error fetching trending videos:", err);
      });
  };

  const sliderRight = (elemet) => {
    elemet.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (elemet) => {
    elemet.scrollLeft -= screenWidth - 110;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRight(elementRef.current);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    getTrendingVideos();
  }, []);

  return (
    <div className="mt-24">
      <HiChevronLeft
        className="hidden md:block text-[30px] absolute mx-9 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-[30px] absolute mt-[150px] cursor-pointer right-9"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef} 
      >
        {movielist.map((item) => (
          <img
            src={Image_Base_Url + item.backdrop_path}
            className="min-w-full md:h-[410px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-200 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

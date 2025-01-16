import axios from "axios";

const moviebaseUrl = "https://api.themoviedb.org/3";
const apikey = "aff30fe24d81bcb551901ac3733f4734";

const getTrendingVideos = () => {
  return axios.get(`${moviebaseUrl}/trending/all/week?api_key=${apikey}`);
};

const GetMoviesByGenereId = (genereId) => {
  return axios.get(
    `${moviebaseUrl}/discover/movie?api_key=${apikey}&with_genres=${genereId}`
  );
};

export default {
  getTrendingVideos,
  GetMoviesByGenereId,
};

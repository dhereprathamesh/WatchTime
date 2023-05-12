import React, { useEffect, useState } from "react";
import Carousel from "../Home/Carousel/carousel";
import Navbar from "../Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import TopRatedMovies from "./TopRatedMovies/TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies";
import PopularMovie from "./PopularMovies/PopularMovie";
import './Home.css'
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ba56c49122fce3438dfb91df34f669ad"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .then((data) => console.log(data));
  },[]);

  return (
    <div>
      <Navbar />
    <div className="home-page">
        
  
      <Carousel movies={popularMovies} />
    <div className="movies-set">
        
    
      <h3 style={{ margin: "1rem" }}>Popular</h3>
      <PopularMovie/>

      <h3 style={{ margin: "1rem" }}>Top rated</h3>
      <TopRatedMovies />

      <h3 style={{ margin: "1rem" }}>Upcoming</h3>
      <UpcomingMovies />
      </div>
      </div>
    </div>
  );
};

export default Home;

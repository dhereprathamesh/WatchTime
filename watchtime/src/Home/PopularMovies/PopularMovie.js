import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PopularMovies.css"

const PopularMovie = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ba56c49122fce3438dfb91df34f669ad"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Carousel responsive={responsive}>
        {
            popularMovies.map(popularMovies => {
                return (
                    <>
                    <Link style={{textDecoration:"none",color:"white"}} to={`/home/${popularMovies.id}`}>
                    <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${popularMovies && popularMovies.backdrop_path}`} />
                <div className="cards__overlay">
                    <div className="card__title"> {popularMovies.original_title}</div>
                    <div className="card__runtime">
                        <span className="card__rating">{popularMovies.vote_average}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{popularMovies.overview}</div>
                </div>
            </div>
            </Link>
            </>
                )
                })
        }
        
        </Carousel>
    </>
  )
}

export default PopularMovie

import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css";

function carousel({movies}) {
  return (
    <div className="poster">
    <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
    >
        {
            movies.map(movie => {
                   return (
                    <>
                     <Link style={{textDecoration:"none",color:"white"}} to={`/home/${movie.id}`}>
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                    </div>
                    <div className="posterImage__overlay">
                        <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                        <div className="posterImage__runtime">
                            {movie ? movie.release_date : <CircularProgress />}
                            <span className="posterImage__rating">
                                {movie ? movie.vote_average :<CircularProgress />}
                                <i className="fas fa-star" />{" "}
                            </span>
                        </div>
                        <div className="posterImage__description">{movie ? movie.overview : <CircularProgress />}</div>
                    </div>
                    </Link>
                    </>
              )}
            )
        }
    </Carousel>
  </div>
  );
}

export default carousel;

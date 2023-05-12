import React,{useState, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './MovieDetail.css'
import {add_to_watchlist_saga, remove_from_watchlist_saga} from "../Store/Watchlist/watchlist.action"
import { useDispatch } from 'react-redux';

const MovieDetail = ({add_to_watchlist}) => {
    const [currentMovieDetail, setcurrentMovieDetail] = useState()
    const [currentShortMovieDetail, setCurrentShortMovieDetail] = useState()
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        getData()
      },[]);

      const getData = () => fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ba56c49122fce3438dfb91df34f669ad`
      )
        .then(res => res.json())
        .then(data => {
            const shortMovieData = {
                "image": data.backdrop_path,
                "id" : data.id,
                "title": data.original_title,
                "vote": data.vote_average,
                "description":data.overview
                
            } 
            setCurrentShortMovieDetail(shortMovieData);
            setcurrentMovieDetail(data)
        })
    return (
    <div>
       <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : <CircularProgress />}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : <CircularProgress />}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title :<CircularProgress />}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : <CircularProgress />}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : <CircularProgress />}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : <CircularProgress />}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : <CircularProgress />}</div>
                        {/* <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div> */}
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : <CircularProgress />}</div>
                    </div>
                    <div>
                        <button className='add_to_watchlist_btn' type="button" onClick={() => add_to_watchlist(currentShortMovieDetail)}> Add to Watchlist</button>
                    </div>
                    
                </div>
            </div>
        </div>
     </div>
  )
}

const mapStateToProps = (state) => {
    return {
      watchlist: state.WatchlistReducer.watchList,
    };
  };
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        add_to_watchlist: add_to_watchlist_saga,
        remove_from_watchlist: remove_from_watchlist_saga,
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);


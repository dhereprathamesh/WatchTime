import React from 'react'
import { connect } from 'react-redux';
import Carousel from "react-multi-carousel";
import { bindActionCreators } from 'redux' 
import { add_to_watchlist_saga, remove_from_watchlist_saga } from '../../Store/Watchlist/watchlist.action'

import './moviesCard.css'

function moviesCard({watchlist, remove_from_watchlist}) {
   console.log("mywatchlist" + watchlist)

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
  return (
    <>
    <div className="watchlist-box">
      <h3>My Watchlist</h3>
      {
              watchlist ? "" : <div>
                your watch list is empty
              </div>
       }
    <div className="list-of-watchlist">
      
       {
        watchlist.map((list)=>{
          return (
            <>
            <div className="manage-cards">
             <div className="cards">
              
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${list && list.image}`} />
                <div className="cards__overlay">
                <span className="remove-movielist-div" onClick= { () => remove_from_watchlist(list)}>x</span>
                    <div className="card__title"> {list.title}
                    {/* <div>x</div> */}
                    </div>
                    
                    <div className="card__runtime">
                        <span className="card__rating">{list.vote}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{list.description}</div>
                </div>
            </div>
            </div>
           
            </>
          )
        })

      }
    </div>
    </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(moviesCard);
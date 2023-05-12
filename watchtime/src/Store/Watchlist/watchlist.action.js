const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
const ADD_TO_WATCHLIST_SAGA = 'ADD_TO_WATCHLIST_SAGA';
const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
const REMOVE_FROM_WATCHLIST_SAGA = 'REMOVE_FROM_WATCHLIST_SAGA';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action Creators
const add_to_watchlist = (currentMovieDetail) => ({ type: ADD_TO_WATCHLIST, payload: currentMovieDetail });
const add_to_watchlist_saga = (payload) => ({type: ADD_TO_WATCHLIST_SAGA, payload});
const remove_from_watchlist = (list) => ({ type: REMOVE_FROM_WATCHLIST, payload: list });
const remove_from_watchlist_saga = (payload) => ({ type: REMOVE_FROM_WATCHLIST_SAGA, payload });
const increment = () => (console.log("increment action called"),{ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export {
    ADD_TO_WATCHLIST,
    ADD_TO_WATCHLIST_SAGA,
    REMOVE_FROM_WATCHLIST,
    REMOVE_FROM_WATCHLIST_SAGA,
    INCREMENT,
    DECREMENT,
    add_to_watchlist,
    add_to_watchlist_saga,
    remove_from_watchlist,
    remove_from_watchlist_saga,
    increment,
    decrement
}
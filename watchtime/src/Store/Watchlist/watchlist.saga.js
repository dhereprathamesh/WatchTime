import {put , takeLatest} from "redux-saga/effects";
import { add_to_watchlist,remove_from_watchlist,ADD_TO_WATCHLIST_SAGA,REMOVE_FROM_WATCHLIST_SAGA } from "./watchlist.action";
// import {INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement} from "./counter.action";

function* add_to_watchlist_saga(action) {
    yield put (add_to_watchlist(action.payload));
}

function* remove_from_watchlist_saga(action) {
    console.log("remove watchlist saga called")
    yield put (remove_from_watchlist(action.payload));
}

export function* watchlistSaga(){
    
    yield takeLatest(ADD_TO_WATCHLIST_SAGA, add_to_watchlist_saga);
    yield takeLatest(REMOVE_FROM_WATCHLIST_SAGA, remove_from_watchlist_saga);
}

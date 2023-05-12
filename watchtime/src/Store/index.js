import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects";

// import counterReducer from "./Counter/counter.reducer"
import WatchlistReducer from "./Watchlist/watchlist.reducer";
// import { counterSaga } from "./Counter/counter.saga";
// import { cartSaga } from "./Cart/cart.saga";
import { watchlistSaga } from "./Watchlist/watchlist.saga";




const combinedReducer = combineReducers({ WatchlistReducer});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([watchlistSaga()]);

}
sagaMiddleware.run(rootSaga)

export default store;


const initialState = {
    watchList: [],
    total: 0
}

const WatchlistReducer = (state = initialState, action) => {
    console.log("reducer called", action)
    switch (action.type){
        case "ADD_TO_WATCHLIST":
            console.log("Add_to_watchlist reducer called", action)
            state.watchList.push(action.payload);
            
            return {...state, total: state.total + 1 };
   
        case "REMOVE_FROM_WATCHLIST":
            console.log("remove_from_cart reducer called", action)
                return { ...state,  total: state.total - 1, watchList: state.watchList.filter((list) => list.id !== list.id)};

            // return {...state, cartItems: state.cartItems.pop(action.payload)};
    default:
        return state;
        // .filter((list) => list.id !== action.list.id,)
    }
}


export default WatchlistReducer;
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import "./App.css";
import LoginPage from "./Auth/LoginPage/LoginPage";
import SignUp from "./Auth/SignIn/SignUp";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import MovieDetail from "./MovieDetails/MovieDetail";
import watchlistCard from "./LOWComponents/Watchlist-Card/watchlistCard";
import MoviesCard from "./WatchList/MoviesCard/moviesCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MaybeShowNavbar from "./Navbar/MaybeShowNavbar";

function App() {
  const location = useLocation();

  return (
    <div className="">
      <Provider store={store}>

        <MaybeShowNavbar >
          <Navbar/>
        </MaybeShowNavbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<MovieDetail />}></Route>
          <Route exact path="/signin" element={<SignUp />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/home/mywatchlist" element={<MoviesCard />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

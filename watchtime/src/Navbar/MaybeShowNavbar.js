import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar";

const MaybeShowNavbar = ({children}) =>{
    const location = useLocation();

    const [showNavbar, SetShowNavbar] = useState(false);
    useEffect(()=>{
        console.log(location)
        if (location.pathname === "/login" || location.pathname === "/signin"){
            SetShowNavbar(false)
        } else {
            SetShowNavbar(true)  
        }
    },[location])

    return (
        <div>
            <span>{showNavbar}</span>
            {showNavbar && children }
        </div>
    )
}

export default MaybeShowNavbar;
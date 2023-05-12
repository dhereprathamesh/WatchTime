import React, {useState} from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const useName = JSON.parse(localStorage.getItem("user"))
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

    const handleLogout= ()=>{
      localStorage.removeItem("loggedin")
      navigate("/login");
    }
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/home" className="decoration">
            <span className="nav-title">Watch Time</span>
            </Link>
            {/* <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtZgGANYLx0kNK-Tce5lCtDudgv68L9-I9g&usqp=CAU"
              alt="Amazon Logo"
              className="nav-logo"
            />
          </a> */}
          </div>
          <div className="search">
            <form class="example" action="action_page.php">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                className="input-feild"
              />
              <button type="submit" className="searh-btn">
                search
              </button>
            </form>
          </div>
         
          <div className="account">
          <div className="user-title">
            Hello {useName.name},
          </div>
          {/* <Link to="/home/mywatchlist">
            <div className="dropdown">My Watchlist</div>
          </Link> */}
            <div onClickAway={handleClickAway} className="btn-section">
              <div className="btn-div">
                <div onClick={handleClick}>
                <img className="profile-img" src="data:image/jpeg;base64,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" alt=""/>
                </div>
                {open ? 
                <>
               
                <div className="dropdown-box">
                <Link to="/home/mywatchlist" className="link">
                  <div className="dropdown">My Watchlist</div>
                  </Link>
                
                <div className="dropdown">My Favourites</div>
                <div className="dropdown">Your Profile</div>
                <div className="dropdown" onClick={handleLogout} >Logout</div>
                </div>
                
               
                </>
                : ""}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

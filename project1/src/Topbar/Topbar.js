import React from "react";
import { Link } from "react-router-dom";
import './Topbar.css'

const TopBar = ()=>{
    return(
        <div className="mainTop">
        <nav>
        <Link to='/home' className="links">Home</Link>
        <Link to='/about' className="links">About</Link>
      </nav>
        </div>
    );
}

export default TopBar;
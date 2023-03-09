import React from "react";
import {Link} from "react-router-dom"
import "../styles/navbar.css"

function Navbar (){
    return (
        <div className= "navbar">
            <div className= "toggleButton">
                <div className= "name" > Jailene Veras</div>
                
            </div>
            <div className= "Links">
                <Link to = "/" >Home </Link>
                <Link to = "/aboutme" >about me </Link>
                <Link to= "/contact" >Contact </Link>
                <Link to= "/portfolio"> Portfolio </Link>
                <Link to ="/resume"> Resume </Link>
        </div>
        </div>
    )
}

export default Navbar;
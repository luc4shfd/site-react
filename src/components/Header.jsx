import { useState } from "react";
import  './Header.css';

function Header(){

    return(
        <div className="Header">
            <h1>Logo</h1>

            <div className="links">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}




export default Header
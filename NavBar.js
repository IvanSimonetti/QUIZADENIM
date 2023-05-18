import './NavBar.css';
import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";

const NavBar = () => {
    return(      
        <nav id='Nav'>
            <Link to= '/'>
                <h3  className="NavBar">QuizaDenim</h3>
            </Link>
            
            
            <div id="divA"  class="Categories">
                <a href="./remeras.html">Remeras</a>
                <a href="./buzos.html">Buzos</a>
                <a href="./outlet.html">Outlet</a>
                <CartWidget/>
            </div>  
        </nav>

    )
}

export default NavBar;
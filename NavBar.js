import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(      
        <nav className="NavBar">
            <Link to= '/'>
                <h3>QuizaDenim</h3>
            </Link>
            
            
            <div id="divNav"  class="Categories">
                <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Remeras</NavLink>
                <NavLink to={`/category/buzos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
                <NavLink to={`/category/outlet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Outlet</NavLink>
                <CartWidget/>
            </div>  
        </nav>

    )
}

export default NavBar;
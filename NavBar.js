import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(      
        <nav>
            <div className="tituloUno">
                <h3>QuizaDenim</h3>
            </div>
            
            <div id="divNav"  class="d-grid gap-1 d-md-block">
                <button id="boton" class="btn btn-primary" type="button">Sale</button>
                <button id="boton" class="btn btn-primary" type="button">Buzos</button>
                <button id="boton" class="btn btn-primary" type="button">Outlet</button>
                <CartWidget/>
            </div>  
        </nav>
    )
}

export default NavBar
import ItemCount from "../ItemCount/ItemCount";

const ItemDetalle = (nombre,img,stock,precio,detalle) =>{

    return(

            <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"></img>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {stock}
                </p>
                <p className="Info">
                    Descrip: {detalle}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada')}/>
            </footer>
        </article>
    )

}

export default ItemDetalle;
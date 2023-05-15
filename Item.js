import { Link } from 'react-router-dom';
import './Item.css';

const Item =({id,nombre,img,precio,stock}) => {

    return(
        <article className='card'>
            <header className='Header'>
                <h2 className='Itemheader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='Itemimg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock: {stock}
                </p>
            </section>
            <footer className='Itemfooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;
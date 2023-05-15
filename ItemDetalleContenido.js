import './ItemDetalleContenido.css';
import { useState,useEffect } from 'react';
import { getProductosById } from '../../productos';
import ItemDetalle from '../ItemDetalle/ItemDetalle';
import { useParams } from 'react-router-dom';

const ItemDetalleContenido = () => {
    const [productos, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductosById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])

    return(
        <div className='ItemDetalleConenido'>
            <ItemDetalle {...productos}/>
        </div>
    )
}

export default ItemDetalleContenido;
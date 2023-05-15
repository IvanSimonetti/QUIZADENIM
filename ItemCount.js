import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock,initial,onAdd})=> {
    const[quantity,setQuantity] = useState(initial);
    const sube = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const baja = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const refresca = () => {
        if(quantity > 0){
            setQuantity(quantity - quantity + 1)
        }
    }

    return(
        <div class="d-grid gap-1 d-md-block" className='Counter'>
            <div className='Control'>
                <button id="boton" class="btn btn-primary" className='boton' onClick={baja}>-</button>
                <p className='numero'>{quantity}</p>
                <button id="boton" class="btn btn-primary" className='boton' onClick={sube}>+</button>
            </div>
            <div>
                <button id="boton" class="btn btn-primary" className='boton' onClick={refresca}>
                    Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
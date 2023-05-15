import { getProductos, getProductosById} from "../../productos";
import { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductosById : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <Itemlist productos={productos}/>
        </div>
    )
}

export default ItemListContainer;

import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useContext} from "react";
import { Link } from "react-router-dom"
import "./ItemDetail.css"
import { Context } from "../CartContext/CartContext"
import { WishContext } from "../WishContext/WishContext"

const ItemDetail = ({producto}) => {

    const [irCarrito, setIrCarrito] = useState(false)

    const {addItem} = useContext(Context)
    const {addItemW} = useContext(WishContext)

    const onAdd = (contador) => {
        setIrCarrito(true)
        addItem(producto, contador)
    }

    const onAddW = (contador) => {
        addItemW(producto, contador)
    }

    return(
        <>
        <div className="bordeCardD">
        <img className="imagenD" src={producto.image} alt="Imagen del Producto"/>
        <div className="cardD">
        <p>{producto.title}</p>
        <p>${producto.price}</p>
        <p>{producto.stock}</p>
        <span>{producto.description}</span>
        {irCarrito === true
        ?
        <Link to={"/carrito"}>
        <button className="botones">Terminar Compra</button>
        </Link>
        :
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} onAddW={onAddW}/>
        }
        </div>
        </div>
        </>
    )
}

export default ItemDetail
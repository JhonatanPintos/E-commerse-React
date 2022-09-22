import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    const onAdd = (contador) => {
        console.log("Se agrego a tu carrito")
    }
    const stockTemporal = Math.floor(Math.random() * 100)
    return(
        <>
        <div className="bordeCardD">
        <img className="imagenD" src={producto.image}/>
        <div className="cardD">
        <p>{producto.title}</p>
        <p>${producto.price}</p>
        <p>{stockTemporal}</p>
        <span>{producto.description}</span>
        <ItemCount stock={stockTemporal} initial={1} onAdd={onAdd}/>
        </div>
        </div>
        </>
    )
}

export default ItemDetail
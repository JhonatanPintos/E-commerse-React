import "./Item.css"
import ItemCount from "../../Components/ItemCount"

const Item = ({product}) => {
    const onAdd = (contador) => {
        console.log("Se agrego a tu carrito")
    }
    return(
        <>
        <div className="cards">
        <p>{product.product}</p>
        <img className="imagen" src={product.image}/>
        <p>${product.price}</p>
        <span>{product.description}</span>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default Item
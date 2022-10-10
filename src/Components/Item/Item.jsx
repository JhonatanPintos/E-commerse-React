import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link, NavLink } from "react-router-dom"


const Item = ({product}) => {
    const onAdd = (contador) => {
        console.log("Se agrego a tu carrito")
    }
    return(
        <>
        <div className="cards">
        <p>{product.title}</p>
        <Link to={`/producto/${product.id}`}>
        <img className="imagen" src={product.image}/>
        </Link>
        <p>${product.price}</p>
        </div>
        </>
    )
}

export default Item
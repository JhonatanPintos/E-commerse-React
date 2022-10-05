import React, { useContext } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../CartContext/CartContext"

export const CartWidget = () => {

    const { cantidad } = useContext(Context)
    return (
        <>
        <div className="imgCarrito">
            {cantidad === 0 ? "" : cantidad}
            <ShoppingCartIcon color="success" fontSize="large" />
        </div>
        </>
    )
}

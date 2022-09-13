import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { products } from "../../assets/productos"
import { customFetch } from "../../utils/customFetch"
import ItemList from "../ItemListContainer/ItemList"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [])

    return (
        <>
            <h1 className="titulo">{greeting}</h1>
            {loading 
                ?
                <div className="spinners">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="primary" />
                </div>
                :
                <div className= "contenedorCards">
                <ItemList listProducts={listProducts} />
                </div>
            }
        </>
    )
}

export default ItemListContainer

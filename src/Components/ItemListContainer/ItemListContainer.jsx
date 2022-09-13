import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { products } from "../../assets/productos"
import { customFetch } from "../../utils/customFetch"
import ItemList from "../ItemList/ItemList"
import ScaleLoader from "react-spinners/ScaleLoader";
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
                <ScaleLoader color="blueviolet" />
                <ScaleLoader color="cyan" />
                <ScaleLoader color="blueviolet" />
                <ScaleLoader color="cyan" />
                <ScaleLoader color="blueviolet" />
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
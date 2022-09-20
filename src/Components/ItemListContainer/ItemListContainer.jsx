import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import ScaleLoader from "react-spinners/ScaleLoader";
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            const lista = data.map((product)=>{
                return {...product, stock:Math.floor(Math.random() * 100)}
            })
            setListProducts(lista)
            .catch(() =>{
                console.log("No responde la API")
                console.error("No responde la API")
            })
            .finally(()=>{
                setLoading(false)
            })
        })
    }, [])

    return (
        <>
            <h1 className="titulo">{greeting}</h1>
                <div className= "contenedorCards">
                <ItemList listProducts={listProducts} />
                </div>
        </>
    )
}

export default ItemListContainer
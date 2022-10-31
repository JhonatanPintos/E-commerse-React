import React, { useEffect } from "react"
import logo from "../../assets/logo.jpg"
import { Nav } from "./Nav/Nav"
import { CartWidget } from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../AuthContext/AuthContext"
import { db } from "../Firebase/Firebase"
import { getDocs, collection } from "firebase/firestore"
import { useState } from "react"

const Navbar = () => {

    const { user, logOut } = useAuth()
    const [listaCat, setListaCat] = useState()
    const [confirmar, setConfirmar] = useState(false)

    useEffect(() => {
        const category = collection(db, "categorias")
        getDocs(category)
            .then((data) => {
                const listaData = data.docs.map((list) => {
                    return {
                        ...list.data()
                    }
                })
                setListaCat(listaData)
                setConfirmar(true)
            })
            .catch(() => {
                console.log("No responde la API")
                console.error("No responde la API")
            })
    }, [])

    const handleLogout = async () => {
        await logOut()
    }

    return (
        <>
            {confirmar === true ?
                (user === null ? "" :
                    <header className="containerNav">
                        <Link to={"/"}>
                            <img className="imagenNav" src={logo} alt="logo" />
                        </Link>
                        <h1>Bienvenido {user.displayName || user.email}</h1>
                        <Nav listaCat={listaCat} confirmar={confirmar} />
                        <Link to={"/micompra"}>
                            <p>Mis compras</p>
                        </Link>
                        <Link to={"/wishlist"}><p>Mi WishList</p></Link>
                        <button className="botones" onClick={handleLogout}>Logout</button>
                        <Link to={"/carrito"}>
                            <CartWidget />
                        </Link>
                    </header>
                )
                : ""}
        </>
    )
}

export default Navbar
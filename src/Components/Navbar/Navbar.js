import React from "react"
import logo from "../../assets/logo.jpg"
import {Nav} from "./Nav/Nav"
import { CartWidget } from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({nombre, apellido, id}) => {

const categorias = [
    {id:0, nombre: "Electronics", ruta:"/categoria/electronics"},
    {id:1, nombre: "Jewelery", ruta:"/categoria/jewelery"},
    {id:2, nombre: "Men's Clothing", ruta:"/categoria/men's clothing"},
    {id:3, nombre: "Women's Clothing", ruta:"/categoria/women's clothing"}
]

    return(
        <>
        <header className="containerNav">
            <Link to={"/"}>
                <img className="imagenNav" src={logo} alt="logo" />
            </Link>
                <h1>Bienvenido {nombre}</h1>
        <Nav categorias={categorias} />
            <Link to={"/carrito"}>
                <CartWidget />
            </Link>
        </header> 
        </>
    )
}

export default Navbar
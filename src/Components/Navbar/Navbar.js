import React from "react"
import logo from "../../assets/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import "./Navbar.css"

const Navbar = () => {
    return(
        <header style={styles.container}>
        <img style={styles.imagen} src={logo} alt="logo" />
        <h1>Titulo</h1>
        <nav>
            <a style={styles.links} href="">Categoria 1</a>
            <a style={styles.links} href="">Categoria 2</a>
            <a style={styles.links} href="">Categoria 3</a>
        </nav>
        <ShoppingCartIcon color="success" fontSize="large" />
        </header> 
    )
}

const styles = {
    container:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagen:{
        width: "10%"
    },
    links:{
        padding: 10
    }
}


export default Navbar
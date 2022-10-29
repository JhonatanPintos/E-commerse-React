import React from "react"
import { NavLink } from "react-router-dom"

export const Nav = ({categorias}) => {
    return(
        <nav>
            {categorias.map ((categoria)=>{
                return <NavLink key={categoria.id} style={styles.links} to={categoria.ruta}>{categoria.nombre}</NavLink>
            })}
        </nav>
    )
}

const styles = {
     links:{
        padding: 10
    }
}
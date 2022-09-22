import React from "react"
import { Link, NavLink } from "react-router-dom"

export const Nav = ({categorias}) => {
    return(
        <nav>
           <nav>
            {categorias.map ((categoria)=>{
                return <NavLink key={categoria.id} style={styles.links} to={categoria.ruta}>{categoria.nombre}</NavLink>
            })}
        </nav>
        </nav>
    )
}

const styles = {
     links:{
        padding: 10
    }
}
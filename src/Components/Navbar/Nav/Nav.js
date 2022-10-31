import React from "react"
import { NavLink } from "react-router-dom"

export const Nav = ({listaCat}) => {

    return(
        <nav>
            {listaCat.map ((categoria)=>{
                return <NavLink key={categoria.key} style={styles.links} to={`/categoria/${categoria.key}`}>{categoria.nombre}</NavLink>
            })}
        </nav>
    )
}

const styles = {
     links:{
        padding: 10
    }
}
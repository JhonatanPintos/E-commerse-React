import React, { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/Firebase"
import "./Micompra.css"



const Micompra = () => {

    const [venta, setVenta] = useState()
    const [confirmar, setConfirmar] = useState(false)
    const [compra, setCompra] = useState("")
    const [prod, setProd] = useState()


    useEffect(() => {
        const productCollection = collection(db, "ventas")
        const refDoc = doc(productCollection, (venta === undefined ? " " : venta))
        getDoc(refDoc)
            .then((result) => {
                setCompra({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch(() => {
                console.log("No responde la API")
                console.error("No responde la API")
            })
    }, [venta])

    const handleChange = (e) => {
        setVenta(e.target.value)
    }

    const averiguar = () => {
        console.log(compra)
        if (venta === compra.id) {
            setConfirmar(true)
            setProd(compra.productos)
        } else {
            setConfirmar(false)
        }
    }




    return (
        <div className="contenedorAbsolutoM">  
            <div className="contenedorFormM">
                <h2>Ingrese su ID de Compra</h2>
            <input className="formulario" onChange={handleChange} type="text" placeholder="Ingrese su ID" />
            <button className="botones" onClick={averiguar}>Consultar</button>
            </div>
            {confirmar === false
                ? ""
                :
                <div className="contenedorTotalM">
                        <h2>Datos del comprador</h2>
                    <div className="contenedorCompradorM">
                        <p className="columnaM">Nombre: {compra.datosComprador.nombre}</p>
                        <p className="columnaM">Apellido: {compra.datosComprador.apellido}</p>
                        <p className="columnaM">Email: {compra.datosComprador.email}</p>
                    </div>
                    <div>
                        <h2>Detalles de los Productos</h2>
                        <div className="indicieM">
                           <div className="columnaIndiceM prodM"><p>Producto</p></div>
                           <div className="columnaIndiceM"><p>Categoria</p></div>
                           <div className="columnaIndiceM"><p>Precio</p></div>
                           <div className="columnaIndiceM"><p>Cantidad</p></div>
                           <div className="columnaIndiceM"><p>Total</p></div> 
                        </div>
                        {prod.map((item) => {
                            return (
                                <div className="contenedorM" key={item.id}>
                                    <img className="imgM columnaM" src={item.image} alt="Imagen del Producto" />
                                    <p className="columnaM">{item.title}</p>
                                    <p className="columnaM">{item.category}</p>
                                    <p className="columnaM">${item.price}</p>
                                    <p className="columnaM">{item.cantidad}</p>
                                    <p className="columnaM">${item.price * item.cantidad}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                    <h2>Total de su compra fue ${compra.totalCompra}</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default Micompra
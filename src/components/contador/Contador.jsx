import "./Contador.css"
import React from "react"
import { Button } from "react-bootstrap"
import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0)
    const sumarCantidad = () => {
        setContador(contador + 1)
    }
    const restarCantidad = () => {
        setContador(contador - 1)
    }

    return (
        <div className="contenedor">
            <Button variant="primary">Añadir al Carrito</Button>
            <button onClick={sumarCantidad}> + </button>
            <p className="contador">{contador}</p>
            <button onClick={restarCantidad}> - </button>
        </div>
    )
}

export default Contador
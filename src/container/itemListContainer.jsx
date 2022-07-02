import './itemListContainer.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { getProducto } from '../bd'
import ItemList from '../components/itemList/ItemList'

const ItemListContainer = ({mensaje}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducto().then(response => {
            setProductos(response)
        })
    }, [])

    return (
        <section>
            <h1 className="titulo">{mensaje}</h1>
            <ItemList productos={productos} />
        </section>
    )
}

export default ItemListContainer
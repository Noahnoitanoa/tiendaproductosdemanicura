import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { getProducto } from '../../bd'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const {id} = useParams()

    useEffect(() => {
        getProducto().then(response => {
            setProducto(response.find(res => res.id = id))
            
        }
        )
    }, [])

    return (
        <section>
            <ItemDetail producto={producto} />
        </section>
    )
}

export default ItemDetailContainer
import { Text, Spinner, Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../../bd'
import ItemList from "../itemList/ItemList"

import { useProducts } from "services/firebase/firestore/products"
import { db } from "../../services/firebase"
import { collection, getDoc, query, where } from "firebase/firestore"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useProducts()

    useEffect(() => {
        setLoading(true)

        const collectionRef= categoryId ? (
            query(collection( db, 'products'), where('category', '==', categoryId))
        ) : (collection( db, 'products'))

        getDoc(collectionRef).then(response => {
            console.log(response)
            const productFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
        })     
            setProducts(productFormatted)
    }).cath(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)   

     })
    }, [categoryId])
}
    //     getProducts().then(products => {
    //         setProducts(products)
    //     }).catch(error => {
    //         console.log(error)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    // }, []) //eslint-disable-line

//     if(loading) {
//         return (
//             <Flex height='100%' flexDirection='column' justifyContent='center'>
//                 <Spinner />
//             </Flex>
//         )
//     }

//     return (
//         <Flex height='100%' flexDirection='column' justifyContent='flex-start' alignItems='center'>
//             <Text fontSize='2xl'>Products</Text>
//             <ItemList products={products}/>
//         </Flex>
//     )
// }

 export default ItemListContainer
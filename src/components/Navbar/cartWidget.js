import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function CartIcon() {
    return <>
        <Icon className='pe-4' icon={faShoppingCart}/>
    </>
}
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from "react-bootstrap"
import CartIcon from './cartWidget'
import { Link } from 'react-router-dom'
import '../Navbar.css'

const NavBar = () => {
    return <>
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <CartIcon className="cart-widget__icon" />
                    <Navbar.Brand href="#home">Golden Byte</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/Ecommerce">Inicio</Link>    
                        <Link className='nav-link' to="/productos">Productos</Link>   
                        <Nav.Link href="#pricing">Proximamente</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
}

export default Navbar
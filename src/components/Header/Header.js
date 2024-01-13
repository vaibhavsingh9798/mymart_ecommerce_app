import { Container, Nav, Navbar , Badge, Button} from "react-bootstrap";
import  styles from './Header.module.css'
import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import {NavLink } from "react-router-dom";
import CartCtx from "../Store/Cart-auth"
const Header = () =>{
        const [showCart,setShowCart] = useState(false)

     const cartCtx = useContext(CartCtx)
     console.log('h---',cartCtx)
        
    return(
        <>
       
       <Navbar bg="info" text="red" variant="dark" expand="lg" fixed="top" fluid >
       <Container>
        <Nav className="mx-auto">
          
          <Navbar className="m-3 text-white">
          <NavLink  to="/home" className={styles.active} >HOME</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/products"  className={styles.active}>STORE</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/about"  className={styles.active}>ABOUT</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/contact-us"  className={styles.active}>CONTACT Us</NavLink>
          </Navbar>
     

        </Nav>
        <Nav className="ml-auto">
          
            <Nav.Item>
            <Button  onClick={() => cartCtx.handleShowCart(true)} className="border">cart</Button>
            <Badge pill variant="danger" className={styles.count}>{cartCtx.totalItem}</Badge>
            </Nav.Item>
         
        </Nav>
      </Container>
    </Navbar>
  
     <header className={styles.header}>
        <h1 >My Mart</h1>
      </header>
         {cartCtx.showCart && <Cart />}
        </>
    )
}

export default Header;


 
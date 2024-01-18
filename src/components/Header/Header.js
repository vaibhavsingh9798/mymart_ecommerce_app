import { Container, Nav, Navbar , Badge, Button} from "react-bootstrap";
import  styles from './Header.module.css'
import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import {Link, NavLink } from "react-router-dom";
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
          <NavLink  to="/home" className={styles.heading} >HOME</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/products"  className={styles.heading}>STORE</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/about"  className={styles.heading}>ABOUT</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/contact-us"  className={styles.heading}>CONTACT Us</NavLink>
          </Navbar>
     

        </Nav>
      
        <Nav>
        <Nav.Item className={styles.login}>
          <Link to="/auth">
          <Button variant="info" size="lg">{cartCtx.isLogin ? 'Logout' : 'Login'}</Button>
          </Link>
        </Nav.Item>
            <Nav.Item>
            <Button variant="info" size="lg" onClick={() => cartCtx.handleShowCart(true)} className="border">cart</Button>
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


 
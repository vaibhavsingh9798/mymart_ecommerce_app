import { Container, Nav, Navbar , Badge, Button} from "react-bootstrap";
import  styles from './Header.module.css'
import { useState } from "react";
import Cart from "../Cart/Cart";
import {NavLink} from "react-router-dom";

const Header = () =>{
        const [showCart,setShowCart] = useState(false)

   

    return(
        <>
       
       <Navbar bg="info" text="red" variant="dark" expand="lg" fixed="top" fluid >
       <Container>
        <Nav className="mx-auto">
          
          <Navbar className="m-3 text-white">
          <NavLink to="/home" className="fs-5 ">HOME</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/store" className="fs-5 ">STORE</NavLink>
          </Navbar>
          <Navbar className="m-3">
          <NavLink to="/about" className="fs-5 ">ABOUT</NavLink>
          </Navbar>

     

        </Nav>
        <Nav className="ml-auto">
          <NavLink to="cart">
          
            <Button  onClick={() => setShowCart(!showCart)} className="border">cart</Button>
            <Badge pill variant="danger" className={styles.count}>{0}</Badge>
           
            </NavLink>
        </Nav>
      </Container>
    </Navbar>
  
     <header className={styles.header}>
        <h1 >My Mart</h1>
      </header>
         {showCart && <Cart />}
        </>
    )
}

export default Header;


 
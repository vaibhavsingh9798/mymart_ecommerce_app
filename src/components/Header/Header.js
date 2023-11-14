import { Container, Nav, Navbar , Badge, Button} from "react-bootstrap";
import  styles from './Header.module.css'
import { useState } from "react";
import Cart from "../Cart/Cart";

const Header = () =>{
        const [showCart,setShowCart] = useState(false)
    return(
        <>
       
       <Navbar bg="primary" variant="dark" expand="lg" fixed="top" fluid >
       <Container>
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="fs-5 ">HOME</Nav.Link>
          <Nav.Link href="#about" className="fs-5 ">STORE</Nav.Link>
          <Nav.Link href="#about" className="fs-5 ">ABOUT</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#cart">
          
            <Button  onClick={() => setShowCart(!showCart)} className="border">cart</Button>
            <Badge pill variant="danger" className={styles.count}>{0}</Badge>
           
            </Nav.Link>
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


 
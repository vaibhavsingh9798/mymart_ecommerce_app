import { Container, Nav, Navbar , Badge, Button} from "react-bootstrap";
import  styles from './Header.module.css'
import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import {Link, NavLink } from "react-router-dom";
import MartCtx from "../Store/mymart-auth"
const Header = () =>{
        const [showCart,setShowCart] = useState(false)

     const martCtx = useContext(MartCtx)

     function handleLogin(){
        if(martCtx.isLogin){
          console.log(martCtx)
        martCtx.handleLogin()
        martCtx.handleToken(null)
        }
        else{
          console.log(martCtx)
        }
     }
    
    return(
        <>
       
       <Navbar bg="info" text="red" variant="dark" expand="lg" fixed="top" fluid >
       <Container>
     
        <Nav className="mx-auto">
        
          <Navbar className="m-3 text-white">
          { martCtx.isLogin &&   <NavLink  to="/home" className={styles.heading} >HOME</NavLink> }
          </Navbar>
          <Navbar className="m-3">
          { martCtx.isLogin &&  <NavLink to="/products"  className={styles.heading}>STORE</NavLink> }
          </Navbar>
          <Navbar className="m-3">
          { martCtx.isLogin &&  <NavLink to="/about"  className={styles.heading}>ABOUT</NavLink> }
          </Navbar>
          <Navbar className="m-3">
          { martCtx.isLogin &&   <NavLink to="/contact-us"  className={styles.heading}>CONTACT Us</NavLink> }
          </Navbar>
     
        
        </Nav>
      
        <Nav>
        <Nav.Item className={styles.login}>
       { martCtx.isLogin &&  <Link to='/profile'>
         <Button variant="info" size="lg" >Profile</Button>
         </Link> }
       </Nav.Item>
        <Nav.Item className={styles.login}>
          <Link to={`/auth`}>
          <Button variant="info" size="lg" onClick={handleLogin}>{martCtx.isLogin ? 'Logout' : 'Login'}</Button>
          </Link>
        </Nav.Item>
            <Nav.Item>
            
            { martCtx.isLogin &&     <Button variant="info" size="lg" onClick={() => martCtx.handleShowCart(true)} className="border">cart</Button> }
            { martCtx.isLogin &&  <Badge pill variant="danger" className={styles.count}>{martCtx.totalItem}</Badge> }
            
            </Nav.Item>
         
        </Nav>
      </Container>
    </Navbar>
  
     <header className={styles.header}>
        <h1 >My Mart</h1>
      </header>
         {martCtx.showCart && <Cart />}
        </>
    )
}

export default Header;


 
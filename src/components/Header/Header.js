import { Container, Nav, Navbar , Badge, Button} from "react-bootstrap";
import  styles from './Header.module.css'
import { useContext, useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import {Link, NavLink , useNavigate} from "react-router-dom";
import MartCtx from "../Store/mymart-auth"
const Header = () =>{
  const [showCart,setShowCart] = useState(false)
  const martCtx = useContext(MartCtx)
   let isLogin = martCtx.isLogin
   const navigate = useNavigate()

   let email = localStorage.getItem('email') 
   email = email.replace('@','').replace('.','')
   const URL = `https://react-mymart-default-rtdb.firebaseio.com/${email}.json`

     function handleLogout(e){
      e.preventDefault();
    
        if(isLogin){
         martCtx.handleLogout()
         navigate('/auth')
        }
        
     }

    


     const  fetchCartItems = async () =>{
      try{
      let response = await fetch(`${URL}`)
      let data = await response.json()
      let count = 0;
      let totalAmount = 0;
      if(response.ok){
        let cartData = []
      for(let key in data ){
        count++;
    
        let item = {
          id : key,
          cartItemId: data[key].id,
          title: data[key].title,
          price: parseInt( data[key].price ),
          image: data[key].image
        }
        let existItem = cartData.find(cartItem => cartItem.title == item.title)
        if(existItem){
          existItem.quantity += 1
        }else{
          item.quantity = 1
          cartData.push(item)
        }
        if(item.price)
         totalAmount += parseInt(item.price) 
      }
      martCtx.setCart(cartData)
      martCtx.setTotalItem(count)
      martCtx.setTotalAmount(totalAmount)
    }
      }catch(error){
        console.error(error)
      }

     }

     useEffect(()=>{
      if(isLogin){
      fetchCartItems()
      }
     },[martCtx.isLoading])
    
    return(
        <>
       
       <Navbar bg="info" text="red" variant="dark" expand="lg" fixed="top" fluid >
       <Container>
     
        <Nav className="mx-auto">
        
          <Navbar className="m-3 text-white">
          {isLogin &&   <NavLink  to="/home" className={styles.heading} >HOME</NavLink> }
          </Navbar>
          <Navbar className="m-3">
          { isLogin &&  <NavLink to="/products"  className={styles.heading}>STORE</NavLink> }
          </Navbar>
          <Navbar className="m-3">
          { isLogin &&  <NavLink to="/about"  className={styles.heading}>ABOUT</NavLink> }
          </Navbar>
          <Navbar className="m-3">
          { isLogin &&   <NavLink to="/contact-us"  className={styles.heading}>CONTACT Us</NavLink> }
          </Navbar>
     
        
        </Nav>
      
        <Nav>
        <Nav.Item className={styles.login}>
       { isLogin &&  <Link to='/profile'>
         <Button variant="info" size="lg" >Profile</Button>
         </Link> }
       </Nav.Item>
        <Nav.Item className={styles.login}>
          <Link to={`/auth`}>
          <Button variant="info" size="lg" onClick={handleLogout}>{isLogin ? 'Logout' : 'Login'}</Button>
          </Link>
        </Nav.Item>
            <Nav.Item>
            
            { isLogin &&     <Button variant="info" size="lg" onClick={() => martCtx.handleShowCart(true)} className="border">cart</Button> }
            { isLogin &&  <Badge pill variant="danger" className={styles.count}>{martCtx.totalItem}</Badge> }
            
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


 